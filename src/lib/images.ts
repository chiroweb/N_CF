const S3_BASE = "https://chiro-web.s3.ap-northeast-2.amazonaws.com/N_CO";
const S3_HOTEL = "https://chiro-web.s3.ap-northeast-2.amazonaws.com/hotel_A";

export const IMAGES = {
  heroBg: `${S3_BASE}/hf_20260414_014816_25184efe-ae8e-4a5f-86d5-c325742fe437.png`,
  missionLeft: `${S3_BASE}/hf_20260413_021520_c41f363d-66fb-4259-82df-45cb373a0944.png`,
  missionRight: `${S3_BASE}/hf_20260413_021535_dd11c18e-7f94-480e-8a11-3107a77e3e8a.png`,
  installationPhoto: `${S3_BASE}/hf_20260413_021554_42247fbc-74f1-4797-8442-38899a5fe9e4.png`,
  obs01: `${S3_BASE}/hf_20260413_021602_90ce14ca-b4c2-4964-8719-fa0dcaf85b41.png`,
  obs02: `${S3_BASE}/hf_20260413_021609_9f3b7b09-45ad-4fc5-8ee8-3ae284ce5508.png`,
  obs03: `${S3_BASE}/hf_20260413_021615_37a664db-f4d9-4436-91a2-bc87bd039954.png`,
  footerMood: `${S3_BASE}/hf_20260413_021623_d1c0819b-cf7a-4843-91e0-65a5a74d0d8b.png`,
  closingMood: `${S3_BASE}/hf_20260413_021631_81a8e209-cb29-4be3-9bbd-9cfb97ac7bf8.png`,
  factory: `${S3_BASE}/hf_20260413_021528_dcbe3fe4-7bbf-4bcc-8e56-c2b832c95a00.png`,
  evidenceBg: `${S3_BASE}/hf_20260414_023331_f336294b-f8c4-497e-a7f6-e41c6d5bc6a8.png`,
  evidenceFloat: `${S3_BASE}/hf_20260414_025500_ed9f6be1-f82a-479c-904e-9d9ea2fd501d.png`,
  missionAfterburnerThumb: `${S3_HOTEL}/mission-afterburner-thumb.png`,
  missionRoasterThumb: `${S3_HOTEL}/mission-roaster-thumb.png`,
  missionNutbutterThumb: "/images/mission-nutbutter-thumb.png",
  missionNutbutterLeft: "/images/mission-nutbutter-left.png",
  brandAfterburnerGallery: `${S3_HOTEL}/brand-afterburner-gallery.png`,
  afterburnerLineup: `${S3_HOTEL}/afterburner-lineup.png`,
  // Brand Hall — Graffiti Edition exhibition (added 2026-04-28)
  brandGraffitiGalleryPair: "/images/brand-graffiti-gallery-pair.png",
  brandAfterburnerFiveLineup: "/images/brand-afterburner-five-lineup.png",
  brandKubanGraffitiPair: "/images/brand-kuban-graffiti-pair.png",
  brandKubanAfterburnerMix: "/images/brand-kuban-afterburner-mix.png",
  brandBrickCafeInstall: "/images/brand-brick-cafe-install.png",
  brandAfterburnerTrio: "/images/brand-afterburner-trio.png",
} as const;
