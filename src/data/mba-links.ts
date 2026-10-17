const MBA_BASE_URL = "https://mba.hsinhsin.ca";

export const MBA_LINKS = {
  website: MBA_BASE_URL,
  program: `${MBA_BASE_URL}/programs/uk-online-mba`,
  eligibility: `${MBA_BASE_URL}/eligibility`,
  tuition: `${MBA_BASE_URL}/tuition`,
  consultation: `${MBA_BASE_URL}/consultation`,
  faq: `${MBA_BASE_URL}/faq`,
} as const;

export const MBA_REFERENCE_DOCUMENTS = [
  { file: "/downloads/uk-mba-program-guide-en.pdf", en: "2025 MBA guide · English", zh: "2025 MBA 課程指南 · 英文" },
  { file: "/downloads/uk-mba-program-guide-zh.pdf", en: "2025 MBA guide · Traditional Chinese", zh: "2025 MBA 課程指南 · 繁體中文" },
  { file: "/downloads/mba-brochure.pdf", en: "MBA brochure · Reference copy", zh: "MBA 課程簡介 · 參考版本" },
  { file: "/downloads/application-form.pdf", en: "Application documents · Reference copy", zh: "申請文件 · 參考版本" },
] as const;