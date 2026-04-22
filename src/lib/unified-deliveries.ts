// Unified delivery ledger — merges 2024 브랜드별 결합실적 (src/lib/deliveries.ts)
// with 2025 설치현황 (src/lib/installations-2025.ts) on a common key.
//
// Merge key: company | region | district | burnerKg (normalized).
// When both sources agree on a key, roaster-brand info (2024) and
// neighborhood/store-brand info (2025) are combined on a single row.

import { AFTERBURNER_BRAND_COMBOS } from "./deliveries";
import { INSTALLATIONS_2025, INSTALLATIONS_2025_SUMMARY } from "./installations-2025";

export type Source = "2024" | "2025";

export type UnifiedDelivery = {
  id: string;
  company: string;
  region: string;
  district?: string;
  neighborhood?: string;
  roasterBrand?: string;
  storeBrand?: string;
  roastKg?: string;
  burnerKg: string;
  sources: Source[];
  country: "KR" | "CN" | "TH" | "TW" | "JP" | "KW" | "QA" | "HK";
};

// ── Region & country normalization ──────────────────────────────────
const REGION_LONG_FORM: Record<string, string> = {
  서울: "서울특별시",
  경기: "경기도",
  대구: "대구광역시",
  부산: "부산광역시",
  인천: "인천광역시",
  대전: "대전광역시",
  광주: "광주광역시",
  울산: "울산광역시",
  세종: "세종특별자치시",
  제주: "제주특별자치도",
  충북: "충청북도",
  충남: "충청남도",
  전북: "전라북도",
  전남: "전라남도",
  경북: "경상북도",
  경남: "경상남도",
};

const OVERSEAS_MAP: Record<string, UnifiedDelivery["country"]> = {
  CHINA: "CN",
  TAIWAN: "TW",
  JAPAN: "JP",
  KUWAIT: "KW",
  QATAR: "QA",
  HONGKONG: "HK",
};

function parseLegacyLocation(raw: string): {
  region: string;
  district?: string;
  country: UnifiedDelivery["country"];
} {
  const trimmed = raw.trim();
  const overseasCode = OVERSEAS_MAP[trimmed.toUpperCase()];
  if (overseasCode) return { region: "해외", country: overseasCode };

  const firstSpace = trimmed.indexOf(" ");
  if (firstSpace === -1) {
    return { region: REGION_LONG_FORM[trimmed] || trimmed, country: "KR" };
  }
  const head = trimmed.slice(0, firstSpace);
  const tail = trimmed.slice(firstSpace + 1).trim();
  return {
    region: REGION_LONG_FORM[head] || head,
    district: tail || undefined,
    country: "KR",
  };
}

// ── Capacity normalization ──────────────────────────────────────────
// "15K" → "15", "15" → "15", "1.8" → "1.8", "?" → "?"
function normalizeCapacity(raw: string): string {
  return raw.replace(/K$/i, "").trim();
}

function makeKey(params: {
  company: string;
  region: string;
  district?: string;
  burnerKg: string;
}): string {
  return [
    params.company.trim(),
    params.region,
    params.district ?? "",
    normalizeCapacity(params.burnerKg),
  ].join("|");
}

// ── Build merged dataset once at module load ────────────────────────
const UNIFIED_DELIVERIES: UnifiedDelivery[] = (() => {
  const map = new Map<string, UnifiedDelivery>();

  // Pass 1 — 2025 installations (most records, richest geo)
  for (const r of INSTALLATIONS_2025) {
    const key = makeKey({
      company: r.company,
      region: r.region,
      district: r.district,
      burnerKg: r.capacity,
    });
    const existing = map.get(key);
    if (existing) {
      // Same key appearing twice in 2025 — keep both by disambiguating
      map.set(`${key}#${map.size}`, {
        id: `${key}#${map.size}`,
        company: r.company,
        region: r.region,
        district: r.district,
        neighborhood: r.neighborhood,
        storeBrand: r.brand,
        burnerKg: normalizeCapacity(r.capacity),
        sources: ["2025"],
        country: r.country,
      });
      continue;
    }
    map.set(key, {
      id: key,
      company: r.company,
      region: r.region,
      district: r.district,
      neighborhood: r.neighborhood,
      storeBrand: r.brand,
      burnerKg: normalizeCapacity(r.capacity),
      sources: ["2025"],
      country: r.country,
    });
  }

  // Pass 2 — 2024 brand combos (merge or append)
  for (const r of AFTERBURNER_BRAND_COMBOS) {
    const parsed = parseLegacyLocation(r.location);
    const key = makeKey({
      company: r.company,
      region: parsed.region,
      district: parsed.district,
      burnerKg: r.burnerKg,
    });
    const existing = map.get(key);
    if (existing) {
      existing.roasterBrand = r.brand;
      existing.roastKg = r.roastKg;
      if (!existing.sources.includes("2024")) existing.sources.push("2024");
    } else {
      map.set(key, {
        id: key,
        company: r.company,
        region: parsed.region,
        district: parsed.district,
        roasterBrand: r.brand,
        roastKg: r.roastKg,
        burnerKg: normalizeCapacity(r.burnerKg),
        sources: ["2024"],
        country: parsed.country,
      });
    }
  }

  return Array.from(map.values());
})();

// ── Sort: overseas last, then by burnerKg desc (big first),
//         then by region alpha, then by company
function capacityNum(raw: string): number {
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : -1;
}

UNIFIED_DELIVERIES.sort((a, b) => {
  if (a.country !== b.country) {
    if (a.country === "KR") return -1;
    if (b.country === "KR") return 1;
  }
  const diff = capacityNum(b.burnerKg) - capacityNum(a.burnerKg);
  if (diff !== 0) return diff;
  if (a.region !== b.region) return a.region.localeCompare(b.region, "ko");
  return a.company.localeCompare(b.company, "ko");
});

export { UNIFIED_DELIVERIES };

// ── Facet helpers (computed once) ───────────────────────────────────
export const ROASTER_BRANDS = Array.from(
  new Set(UNIFIED_DELIVERIES.map((r) => r.roasterBrand).filter(Boolean) as string[])
).sort();

export const REGIONS = Array.from(
  new Set(UNIFIED_DELIVERIES.map((r) => r.region))
).sort((a, b) => a.localeCompare(b, "ko"));

export const CAPACITY_BUCKETS = [
  { id: "small", label: "~5K", match: (kg: string) => capacityNum(kg) > 0 && capacityNum(kg) <= 5 },
  { id: "mid", label: "6–15K", match: (kg: string) => capacityNum(kg) > 5 && capacityNum(kg) <= 15 },
  { id: "large", label: "20–30K", match: (kg: string) => capacityNum(kg) >= 20 && capacityNum(kg) <= 30 },
  { id: "xl", label: "50K+", match: (kg: string) => capacityNum(kg) >= 50 },
] as const;

export const UNIFIED_STATS = {
  total: UNIFIED_DELIVERIES.length,
  bySource: {
    "2024_only": UNIFIED_DELIVERIES.filter((r) => r.sources.length === 1 && r.sources[0] === "2024").length,
    "2025_only": UNIFIED_DELIVERIES.filter((r) => r.sources.length === 1 && r.sources[0] === "2025").length,
    both: UNIFIED_DELIVERIES.filter((r) => r.sources.length === 2).length,
  },
  roasterBrandCount: ROASTER_BRANDS.length,
  regionCount: REGIONS.length,
  overseasAggregate: INSTALLATIONS_2025_SUMMARY.overseasBreakdown,
};
