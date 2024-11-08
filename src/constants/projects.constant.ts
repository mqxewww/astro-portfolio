type Project = {
  title: string;
  icons: string[];
  date: string;
  description: string;
  github_repo?: string;
  url_visit?: string;
};

export const projects: Project[] = [
  {
    title: "S11 Sélection",
    icons: ["php", "bulma", "composer", "mysql"],
    date: "Oct 2020",
    description:
      "Projet scolaire. Le but de cette application est de faciliter la création d'une grille d'évaluation d'un étudiant, puis de les classer.",
    github_repo: "https://github.com/mqxewww/s11-selection"
  },
  {
    title: "S11 Dolibarrapp",
    icons: ["cordova", "tailwindcss", "javascript"],
    date: "Mars 2021",
    description:
      "Projet scolaire. Cette application facilite la comptabilité entre une entreprise et ses employés (Requiert l'utilisation de l'ERP Dolibarr)."
  },
  {
    title: "VAC Notifications",
    icons: ["html5", "nodejs", "mongodb", "ovh"],
    date: "Mai 2021",
    description:
      "Stage. Application type PPMS qui permet d'avertir les habitants d'un village lors de risques météorologiques, attentats, et autres..."
  },
  {
    title: "S11 Success",
    icons: ["vuejs", "vuetify", "nodejs", "mongodb"],
    date: "Sep 2021",
    description:
      "Projet scolaire. Cette application est destinée aux entreprises souhaitant faire passer des questionnaires à ses employés."
  },
  {
    title: "Vinbip",
    icons: ["react", "typescript", "nestjs", "mongodb"],
    date: "Jan 2022",
    description: "Stage. Site internet type réseau social pour le domaine viticole."
  },
  {
    title: "Portfolio",
    icons: ["astro", "typescript", "tailwindcss", "bunjs"],
    date: "Sep 2022",
    description: "Portfolio sur lequel vous êtes actuellement ✨.",
    github_repo: "https://github.com/mqxewww/astro-portfolio",
    url_visit: "https://portfolio.apps.mqxewww.dev"
  },
  {
    title: "Viticulteurs Market",
    icons: ["nextjs", "tailwindcss", "nodejs", "mysql"],
    date: "Nov 2022",
    description: "Alternance. Boutique en ligne pour les professionnels du vin.",
    url_visit: "https://www.viticulteurs.market"
  },
  {
    title: "Novacollecte",
    icons: ["nextjs", "tailwindcss", "nestjs", "mysql"],
    date: "Fév 2023",
    description:
      "Alternance. Application pour les agriculteurs et techniciens d'une coopérative agricole.",
    url_visit: "https://www.agrivitech.com/solutions/novacollecte"
  },
  {
    title: "Site Guichard TP",
    icons: ["astro", "typescript", "tailwindcss"],
    date: "Août 2024",
    description: "Site Internet de l'entreprise Guichard TP.",
    github_repo: "https://github.com/guichardtp/guichardtp.github.io",
    url_visit: "https://guichard-tp.fr"
  }
];
