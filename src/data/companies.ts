import logoHsinFraming from "@/assets/logo-hsin-framing.png";
import logoCambridgeArt from "@/assets/logo-cambridge-art.png";
import logoHsinPr from "@/assets/logo-hsin-pr.png";
import logoLaPetiteElli from "@/assets/logo-la-petite-elli.png";
import logoBluluma from "@/assets/logo-bluluma.png";

export interface Company {
  id: string;
  nameEn: string;
  nameZh: string;
  descEn: string;
  descZh: string;
  industryEn: string;
  industryZh: string;
  location: string;
  detailEn: string[];
  detailZh: string[];
  logo: string;
  external?: string;
}

export const companies: Company[] = [
  {
    id: "hsin-framing",
    nameEn: "Hsin Framing & Moulding",
    nameZh: "欣欣畫框",
    descEn: "A Vancouver-based craftsmanship company specializing in premium custom framing and art presentation for artists, collectors, and galleries.",
    descZh: "一家位於溫哥華的工藝公司，專門為藝術家、收藏家和畫廊提供優質定制裱框和藝術展示服務。",
    industryEn: "Art Craftsmanship / Manufacturing",
    industryZh: "藝術工藝 / 製造",
    location: "Vancouver, Canada",
    detailEn: [
      "Hsin Framing & Moulding is a Vancouver-based craftsmanship company specializing in museum-quality custom framing and art presentation.",
      "The studio works with artists, collectors, galleries, and institutions seeking high-quality framing solutions designed to protect and present artworks with precision.",
      "Combining traditional craftsmanship with modern materials and conservation techniques, the company continues to support the creative community through dedication to quality and detail.",
    ],
    detailZh: [
      "欣欣畫框是一家位於溫哥華的工藝公司，專門提供博物館級別的定制裱框和藝術展示服務。",
      "工作室與藝術家、收藏家、畫廊和機構合作，提供旨在精確保護和展示藝術品的高品質裱框解決方案。",
      "將傳統工藝與現代材料和保存技術相結合，公司持續通過對品質和細節的執著來支持創意社區。",
    ],
    logo: logoHsinFraming,
  },
  {
    id: "cambridge-art",
    nameEn: "Cambridge Art Center",
    nameZh: "劍橋藝術中心",
    descEn: "An educational platform offering workshops and creative programs focused on craftsmanship, artistic exploration, and community creativity.",
    descZh: "一個教育平台，提供專注於工藝、藝術探索和社區創意的工作坊和創意課程。",
    industryEn: "Art Education",
    industryZh: "藝術教育",
    location: "Vancouver, Canada",
    detailEn: [
      "Cambridge Art Center is a creative education platform dedicated to cultivating artistic skills through hands-on learning and studio practice.",
      "The center offers workshops and mentorship programs focused on craftsmanship, metal arts, sculpture, and artistic exploration.",
      "Through educational programs and community engagement, the center contributes to the growth of Vancouver's creative ecosystem.",
    ],
    detailZh: [
      "劍橋藝術中心是一個致力於通過實踐學習和工作室練習培養藝術技能的創意教育平台。",
      "中心提供專注於工藝、金屬藝術、雕塑和藝術探索的工作坊和指導課程。",
      "通過教育計劃和社區參與，中心為溫哥華創意生態系統的發展做出貢獻。",
    ],
    logo: logoCambridgeArt,
  },
  {
    id: "hsin-pr",
    nameEn: "Hsin PR & Events",
    nameZh: "向榮活動策劃公關公司",
    descEn: "A creative platform specializing in brand activations, cultural events, and curated corporate experiences.",
    descZh: "一個專注於品牌活動、文化活動和策劃企業體驗的創意平台。",
    industryEn: "Public Relations & Events",
    industryZh: "公共關係與活動",
    location: "Vancouver, Canada",
    detailEn: [
      "Hsin PR & Events specializes in cultural events, brand activations, and curated corporate experiences.",
      "The company collaborates with organizations to create engaging public programs and corporate events that communicate brand stories and connect audiences through meaningful experiences.",
    ],
    detailZh: [
      "向榮活動策劃公關公司專門策劃文化活動、品牌活動和企業體驗。",
      "公司與各組織合作，創造引人入勝的公共項目和企業活動，通過有意義的體驗傳達品牌故事並連接受眾。",
    ],
    logo: logoHsinPr,
  },
  {
    id: "la-petite-elli",
    nameEn: "La Petite Elli Coffee & Tea Boutique",
    nameZh: "La Petite Elli 咖啡茶精品店",
    descEn: "A lifestyle café offering specialty coffee, premium teas, and curated hospitality experiences.",
    descZh: "一家生活方式咖啡館，提供精品咖啡、優質茶和策劃的待客體驗。",
    industryEn: "Lifestyle Hospitality",
    industryZh: "生活方式餐旅",
    location: "Vancouver, Canada",
    detailEn: [
      "La Petite Elli Coffee & Tea Boutique is a curated café and lifestyle space celebrating the culture of coffee and tea.",
      "The boutique offers carefully sourced specialty coffee, premium teas, and artisanal ingredients while providing a welcoming environment for community gatherings.",
      "Inspired by European café culture, the brand blends hospitality, craftsmanship, and everyday lifestyle experiences.",
    ],
    detailZh: [
      "La Petite Elli 咖啡茶精品店是一個策劃的咖啡館和生活空間，慶祝咖啡和茶的文化。",
      "精品店提供精心採購的精品咖啡、優質茶和手工食材，同時為社區聚會提供溫馨的環境。",
      "受歐洲咖啡館文化啟發，品牌融合了待客之道、工藝和日常生活體驗。",
    ],
    logo: logoLaPetiteElli,
  },
  {
    id: "bluluma",
    nameEn: "Bluluma Design",
    nameZh: "Bluluma Design",
    descEn: "A creative studio specializing in brand identity, website design, and digital storytelling for modern businesses.",
    descZh: "一家專注於品牌識別、網站設計和數位故事敘述的創意工作室。",
    industryEn: "Brand Strategy & Digital Design",
    industryZh: "品牌策略與數位設計",
    location: "",
    detailEn: [
      "Bluluma Design is a creative studio specializing in brand identity, website design, and digital storytelling.",
      "The studio partners with modern businesses to develop strong brand systems and engaging digital platforms.",
    ],
    detailZh: [
      "Bluluma Design 是一家專注於品牌識別、網站設計和數位故事敘述的創意工作室。",
      "工作室與現代企業合作，開發強大的品牌系統和引人入勝的數位平台。",
    ],
    logo: logoBluluma,
    external: "https://bluluma.com",
  },
];
