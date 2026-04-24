// English translations of the blog posts. Mirrors src/lib/posts.ts shape
// so /en/blog/[id] can reuse the same component structure.

import type { Post } from "./posts";

const S3_STOCK =
  "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products";

export const POSTS_EN: Post[] = [
  {
    id: 1,
    title: "The science of roast profiles: what happens after first crack",
    excerpt:
      "A data-driven look at how time and temperature between first crack and drop shape cup character. Findings from a 12-week study on the NBP roaster's real-time monitoring rig.",
    date: "2025.12.18",
    readMinutes: 6,
    category: "Technical Note",
    image: `${S3_STOCK}/stock-roasting-1.jpg`,
    imageAlt: "Coffee beans tumbling inside the drum",
    featured: true,
    body: [
      {
        type: "p",
        text: "The decisive moment in a roast isn't first crack. It's the 45 to 90 seconds after the crack — the choices the roaster makes in that window set the direction of every flavor that ends up in the cup.",
      },
      { type: "h2", text: "What DTR actually tells you" },
      {
        type: "p",
        text: "Development Time Ratio (DTR) is the time between first crack and drop divided by total roast time. Most guides quote 20–25% as the sweet spot, but the number shifts with green density, moisture, and how the machine transfers heat. In a 12-week study across six greens, the NBP lab found that holding DTR constant and shifting drop temperature by 2°C produced a measurably different sweetness score.",
      },
      {
        type: "p",
        text: "The number is less important than the shape. A Rate of Rise curve that declines steadily and lands softly reveals sweetness cleanly, while a flat RoR opens the door to ashy or baked defects.",
      },
      {
        type: "quote",
        text: "A profile isn't about hitting a number — it's about shaping a curve.",
      },
      { type: "h2", text: "What real-time monitoring changed" },
      {
        type: "p",
        text: "The dual probe on the NBP roaster (BT and ET) logs every half second. At that resolution you can see a phenomenon most gear hides — a brief slowdown in bean temperature just after first crack. We call it the crack slump. How you steer through it is the development phase.",
      },
      {
        type: "p",
        text: "Drop the burner output before the slump and the curve stays smooth. Drop it after the crack lands and you're already correcting a bent curve. One or two seconds of lead time survives into the cup.",
      },
      { type: "h2", text: "Two legitimate choices" },
      {
        type: "p",
        text: "A short development phase lifts acidity and florals but becomes brittle on machines with heavy thermal inertia. A long one stacks sweetness and body but runs a tightrope against baking. BTU-per-kg, drum RPM, and the draft your afterburner pulls have to move together.",
      },
      {
        type: "p",
        text: "A profile is not a graph — it's the state of a system where the machine, the green, and the intent meet. Before you copy someone else's numbers, ask which machine those numbers were measured on.",
      },
    ],
  },
  {
    id: 2,
    title: "Solving the urban café smoke problem with catalytic oxidation",
    excerpt:
      "Smoke is the real barrier to running a roastery café in central Seoul. A look at how the two-stage combustion and regenerative heat recovery in the NBP afterburner handle it.",
    date: "2025.11.04",
    readMinutes: 5,
    category: "Product Note",
    image: `${S3_STOCK}/stock-roasting-2.jpg`,
    imageAlt: "A city roastery with visible roof ducting",
    body: [
      {
        type: "p",
        text: "When a prospective owner walks into our shop for an urban café, the first question is rarely about equipment. It's about smoke. Neighbor complaints, landlord clauses, and district office inspections have to be answered before you can even think about the drum roaster.",
      },
      { type: "h2", text: "What the smoke actually is" },
      {
        type: "p",
        text: "Roast exhaust is dominated by volatile organic compounds (VOCs), unburned tar, and fine particulate matter. The cloud you see is mostly condensed tar and water vapor; the smell you can't see is VOC. Cyclones and particulate filters catch the big stuff but leave the VOCs behind.",
      },
      { type: "h2", text: "Why two-stage combustion matters" },
      {
        type: "p",
        text: "The NBP afterburner runs exhaust through a combustion chamber held above 800°C and oxidizes the VOCs directly. At that temperature the carbon chains decompose to CO₂ and water, and tar burns off. The variable people forget is residence time. If the exhaust spends under 0.3 seconds in the hot zone, oxidation is incomplete. NBP chambers are sized for 0.5–0.8 seconds depending on capacity.",
      },
      {
        type: "quote",
        text: "High temperature without residence time burns nothing.",
      },
      { type: "h2", text: "Why regenerative heat recovery earns its place" },
      {
        type: "p",
        text: "A straight thermal oxidizer works, but the gas bill bites. NBP's regenerative module stores outgoing heat in a ceramic matrix and uses it to pre-heat the next cycle's inlet air. The burner becomes an assist, and gas consumption drops 40–60%.",
      },
      {
        type: "p",
        text: "Field measurements on a 5kg roaster show 0.18 m³ of gas per roast on the NBP system, versus roughly 0.35 m³ on a non-regenerative equivalent. On a 20-day month the difference is obvious on the invoice.",
      },
      { type: "h2", text: "Where installation makes or breaks the system" },
      {
        type: "p",
        text: "Performance lives in the ductwork. When the run from roaster to afterburner exceeds 2 m, tar cools and condenses, and a back-flow event then contaminates the roaster. NBP surveys the site and routes the duct with insulation in the right places. Selling a box and walking away doesn't solve an urban roastery's real problem.",
      },
      {
        type: "p",
        text: "A roast that doesn't inconvenience the neighborhood — that, in the end, is the first asset your brand owns.",
      },
    ],
  },
  {
    id: 3,
    title: "What nut-butter menus actually do to café revenue",
    excerpt:
      "We pulled six months of POS data from ten cafés that installed the NUTS-STAR nut butter machine. What menu expansion did to ticket size, and what it did to repeat visits.",
    date: "2025.10.22",
    readMinutes: 5,
    category: "Insight",
    image: `${S3_STOCK}/stock-roasting-3.jpg`,
    imageAlt: "Peanut butter being jarred straight from the mill",
    body: [
      {
        type: "p",
        text: "The margin on coffee alone keeps getting compressed. Green prices nearly doubled in two years, labor climbs every cycle. A café under that pressure has two exits: raise prices, or raise ticket size.",
      },
      { type: "h2", text: "Ten cafés, six months of data" },
      {
        type: "p",
        text: "From April through September 2025 we pulled POS data from ten cafés that installed the NUTS-STAR nut butter machine: six in Seoul and Gyeonggi, two in Busan, two in Daegu. Monthly traffic sat between 1,200 and 2,800 visitors.",
      },
      {
        type: "p",
        text: "Average ticket rose from ₩9,800 to ₩11,400 — about 16%. Nut-butter-adjacent menu items (spread toasts, signature lattes) accounted for 78% of that lift, with the remaining 22% coming from cross-sell effects.",
      },
      { type: "h2", text: "The repeat-visit curve moved too" },
      {
        type: "p",
        text: "Ticket size is the easy number. The more interesting one was repeat rate. Six-month repeat visits rose from 31% to 44% on average. The nut menu wasn't just an add-on — it became a reason to come back.",
      },
      {
        type: "quote",
        text: "A menu that stands out doesn't build margin. It builds memory.",
      },
      { type: "h2", text: "The cost side" },
      {
        type: "p",
        text: "Expansion carries a load. Beyond the capital cost of the NUTS-STAR, three of the ten cafés added 2–4 hours a week of production time. Three chose once-a-week batch production to cut that load, which then made freshness a new problem to solve.",
      },
      {
        type: "p",
        text: "If you're evaluating the machine, look at contribution margin — revenue uplift minus ingredients, labor, and depreciation. The ten cafés averaged ₩1.4–2.2M per month in contribution margin, with a 9.8-month average payback.",
      },
      { type: "h2", text: "The next question" },
      {
        type: "p",
        text: "A menu isn't a finish line, it's a start. Once nut butter walks in, brunch items follow. Once brunch lands, the lunch-hour sales curve bends. One machine can, in the end, rewrite the whole day.",
      },
    ],
  },
];

export function getPostEn(id: number | string): Post | undefined {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  if (!Number.isFinite(numId)) return undefined;
  return POSTS_EN.find((p) => p.id === numId);
}

export function listPostIdsEn(): string[] {
  return POSTS_EN.map((p) => String(p.id));
}
