import type { ImageMetadata, Props } from "astro";

// assets
import AstroSVG from "~assets/svgs/astro.svg";
import BulmaSVG from "~assets/svgs/bulma.svg";
import BunSVG from "~assets/svgs/bunjs.svg";
import ComposerSVG from "~assets/svgs/composer.svg";
import CordovaSVG from "~assets/svgs/cordova.svg";
import Html5SVG from "~assets/svgs/html5.svg";
import JavascriptSVG from "~assets/svgs/javascript.svg";
import MongoDBSVG from "~assets/svgs/mongodb.svg";
import MySQLSVG from "~assets/svgs/mysql.svg";
import NestJSSVG from "~assets/svgs/nestjs.svg";
import NextJSSVG from "~assets/svgs/nextjs.svg";
import NodeJSSVG from "~assets/svgs/nodejs.svg";
import OvhSVG from "~assets/svgs/ovh.svg";
import PhpSVG from "~assets/svgs/php.svg";
import ReactSVG from "~assets/svgs/react.svg";
import TailwindSVG from "~assets/svgs/tailwindcss.svg";
import TypescriptSVG from "~assets/svgs/typescript.svg";
import VueJSSVG from "~assets/svgs/vuejs.svg";
import VuetifySVG from "~assets/svgs/vuetify.svg";

export type ProjectType = {
  title: string;
  icons: (((_props: Props) => unknown) & ImageMetadata)[];
  date: string;
  description: string;
  github_repo?: string;
  url_visit?: string;
};

export const projects: ProjectType[] = [
  {
    title: "S11 Sélection",
    icons: [PhpSVG, BulmaSVG, ComposerSVG, MySQLSVG],
    date: "Oct 2020",
    description:
      "Projet scolaire. Le but de cette application est de faciliter la création d'une grille d'évaluation d'un étudiant, puis de les classer.",
    github_repo: "https://github.com/mqxewww/s11-selection"
  },
  {
    title: "S11 Dolibarrapp",
    icons: [CordovaSVG, TailwindSVG, JavascriptSVG],
    date: "Mars 2021",
    description:
      "Projet scolaire. Cette application facilite la comptabilité entre une entreprise et ses employés (Requiert l'utilisation de l'ERP Dolibarr)."
  },
  {
    title: "VAC Notifications",
    icons: [Html5SVG, NodeJSSVG, MongoDBSVG, OvhSVG],
    date: "Mai 2021",
    description:
      "Stage. Application type PPMS qui permet d'avertir les habitants d'un village lors de risques météorologiques, attentats, et autres..."
  },
  {
    title: "S11 Success",
    icons: [VueJSSVG, VuetifySVG, NodeJSSVG, MongoDBSVG],
    date: "Sep 2021",
    description:
      "Projet scolaire. Cette application est destinée aux entreprises souhaitant faire passer des questionnaires à ses employés."
  },
  {
    title: "Vinbip",
    icons: [ReactSVG, TypescriptSVG, NestJSSVG, MongoDBSVG],
    date: "Jan 2022",
    description: "Stage. Site internet type réseau social pour le domaine viticole."
  },
  {
    title: "Portfolio",
    icons: [AstroSVG, TypescriptSVG, TailwindSVG, BunSVG],
    date: "Sep 2022",
    description: "Portfolio sur lequel vous êtes actuellement ✨.",
    github_repo: "https://github.com/mqxewww/portfolio",
    url_visit: "https://mqxewww.dev"
  },
  {
    title: "Viticulteurs Market",
    icons: [NextJSSVG, TailwindSVG, NodeJSSVG, MySQLSVG],
    date: "Nov 2022",
    description: "Alternance. Boutique en ligne pour les professionnels du vin.",
    url_visit: "https://www.viticulteurs.market"
  },
  {
    title: "Novacollecte",
    icons: [NextJSSVG, TailwindSVG, NestJSSVG, MySQLSVG],
    date: "Fév 2023",
    description:
      "Alternance. Application pour les agriculteurs et techniciens d'une coopérative agricole.",
    url_visit: "https://www.agrivitech.com/solutions/novacollecte"
  },
  {
    title: "Site Guichard TP",
    icons: [AstroSVG, TypescriptSVG, TailwindSVG],
    date: "Août 2024",
    description: "Site Internet de l'entreprise Guichard TP.",
    github_repo: "https://github.com/guichardtp/guichardtp.github.io",
    url_visit: "https://guichardtp.fr"
  }
];
