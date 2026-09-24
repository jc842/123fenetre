export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "123fenetre.fr — Guide & Comparateur Fenêtres PVC, Alu, Bois & Isolation RGE",
  siteName: "123fenetre.fr",
  domain: "123fenetre.fr",
  url: "https://123fenetre.fr",
  siteUrl: "https://123fenetre.fr",
  description: "L'observatoire indépendant de la menuiserie et du vitrage : comparatifs PVC vs Aluminium, double et triple vitrage, isolation phonique et aides MaPrimeRénov'.",
  siteDescription: "L'observatoire indépendant de la menuiserie et du vitrage : comparatifs PVC vs Aluminium, double et triple vitrage, isolation phonique et aides MaPrimeRénov'.",
  defaultAuthor: "La Rédaction 123fenetre",
  repo: "jc842/123fenetre",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-carrington",
    fontFamily: "Inter, system-ui, sans-serif",
    colorScheme: "slate",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "78",
    containerId: "F8nhI3vW",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 599, format: "mobileBanner" },
      inContent: { zoneId: 603, format: "mediumRectangle" },
      header: { zoneId: 602, format: "leaderboard" },
      halfPage: { zoneId: 601, format: "halfPage" },
      largeRectangle: { zoneId: 598, format: "largeRectangle" },
      skyscraper: { zoneId: 600, format: "skyscraper" },
    },
  },

  legal: {
    editor: "123fenetre.fr — Observatoire Indépendant de la Rénovation Énergétique",
    address: "BP 402, 97163 Le Moule Cedex",
    contactEmail: "contact@123fenetre.fr",
    hostName: "Cloudflare Inc.",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "fenetres-pvc", label: "Fenêtres PVC" },
    { id: "fenetres-alu", label: "Menuiserie Aluminium" },
    { id: "isolation-thermique", label: "Isolation & Énergie" },
    { id: "aides-subventions", label: "Aides & MaPrimeRénov'" },
    { id: "guides-pose", label: "Guides & Pose RGE" },
  ],
};
