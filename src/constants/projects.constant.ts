export interface IProject {
  name: string;
  icons: string[];
  date: string;
  description: {
    intro: string;
    features?: string[];
  };
  links?: string[];
}

export const projects: IProject[] = [
  {
    name: "s11-selection",
    icons: ["php", "bulma", "composer", "mysql"],
    date: "Oct 2020",
    description: {
      intro:
        "S11 Selection est une application web créée dans le but de faciliter la création de la grille d'évaluation d'un étudiant en BTS SIO. Après sa création, elle est intégrée avec les autres dans le classement automatique.",
      features: [
        "L'application se divise en trois catégories d'utilisateur : Évaluateur, Secrétaire et enfin Administrateur.",
        "Un Évaluateur peut créer, modifier et supprimer les différentes grilles d'évaluations ainsi que de voir le classement actuel des étudiants. Une Secrétaire a également la possibilité de voir le classement actuel des étudiants et peut également le télécharger en format CSV. Quand à l'Administrateur, il peut créer, modifier et supprimer les comptes utilisateurs de l'application."
      ]
    },
    links: ["https://github.com/mqxewww/s11-selection"]
  },
  {
    name: "s11-dolibarrapp",
    icons: ["cordova", "tailwindcss", "javascript"],
    date: "Mar 2021",
    description: {
      intro:
        "S11 Dolibarrapp est une application mobile Android développé en HTML/JS destinée aux entreprises utilisatrices de l'ERP Dolibarr. Son but est de rendre plus rapide et plus accessible la comptabilité entre entreprises/employés.",
      features: [
        "Le moyen choisi pour améliorer la rapidité de ce processus est un formulaire de remboursement. Ce formulaire permet aux employés de renseigner leurs informations de remboursement comme la date, le montant ainsi que la raison. L'application permet aussi d'ajouter une pièce jointe comme preuve.",
        "Après avoir complété le formulaire, le remboursement est directement appliqué dans l'ERP de la comptabilité et peut toujours être annulé en cas d'erreur."
      ]
    }
  },
  {
    name: "vac-notifications",
    icons: ["html5", "nodejs", "mongodb", "ovh"],
    date: "May 2021",
    description: {
      intro:
        "VAC Notifications est une application web type PPMS développée en JS utilisée pour avertir un groupe d'habitants d'un risque météorologique, d'attentat, et autres... Elle a été développé en 6 semaines lors de mon stage de 1re année.",
      features: [
        "L'application permet à l'avance d'enregistrer des messages d'alertes ainsi que des groupes prédéfinis d'habitants dans une base de données.",
        "De la sorte, lorsqu'une alerte est à faire, l'administrateur de l'application peut sélectionner un message, le faire correspondre avec un groupe d'habitants, et envoyer l'alerte très rapidement."
      ]
    }
  },
  {
    name: "s11-success",
    icons: ["vuejs", "vuetify", "nodejs", "mongodb"],
    date: "Sep 2021",
    description: {
      intro:
        "S11-Success est une application web développé avec le framework Vue.js. Elle est destinée aux entreprises souhaitant faire passer tout type de questionnaire à ses employés.",
      features: [
        "L'application possède deux types de compte : Administrateur et Employé.",
        "Les questionnaires sont créés par les administrateurs. Chaque questionnaire est assigné une catégorie, peut avoir une limite de temps, et peut contenir des questions soit à choix unique/mulitples soit à réponse libre. L'administrateur doit également définir un code secret pour limiter l'accès au questionnaire.",
        "L'utilisateur, une fois connecté, a accès à deux pages. La première est une page de statistiques où il peut consulter son score sur chaque questionnaire passé. La seconde est la page qui lui permet d'accéder à un questionnaire de son choix.",
        "L'administrateur possédé lui aussi une page statistique où il peut voir la moyenne ainsi que la plus basse & haute note de chacun de ses questionnaires créés. Il est également gérant des comptes.",
        "Pour terminer, l'application possède un système de correction automatique. Toutes les questions à choix uniques et multiples sont corrigées automatiquement. Pour les questions à réponse libre, c'est le créateur du questionnaire qui doit valider ou non la réponse fournie."
      ]
    }
  },
  {
    name: "vinbip",
    icons: ["react", "typescript", "nestjs", "mongodb"],
    date: "Jan 2022",
    description: {
      intro:
        "Vinbip est une plateforme web développé avec les frameworks React.js et Nest.js. Elle met en lien viticulteurs et consommateurs. J'ai participé au développement de cette plateforme lors de mon stage de 2ème année."
    }
  },
  {
    name: "portfolio",
    icons: ["astro", "bootstrap", "typescript"],
    date: "Sep 2022",
    description: {
      intro:
        "Mon portfolio est le site sur lequel vous vous trouvez actuellement ! ✨ J'y expose mes compétences ainsi que mes différents projets."
    },
    links: ["https://portfolio.apps.mqxewww.dev"]
  },
  {
    name: "viticulteurs-market",
    icons: ["nextjs", "tailwindcss", "nodejs", "mysql"],
    date: "Nov 2022",
    description: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui congue dui porta volutpat vitae id risus.",
      features: [
        "Cras eleifend lacinia velit ac mattis. Nulla nec lectus eget sem tempus iaculis vel in odio. Mauris sollicitudin, risus sed vulputate cursus, lorem urna posuere sem, a consectetur diam augue at ipsum. Aenean ut massa enim.",
        "Aliquam purus ligula, semper vel pretium non, consectetur in ipsum. Fusce feugiat urna quis magna mollis tempor. Sed vel dui et sapien pretium semper ac in tellus. Curabitur nisl risus, aliquet in enim eu, feugiat mollis mauris."
      ]
    },
    links: ["https://www.viticulteurs.market"]
  },
  {
    name: "novacollecte",
    icons: ["nextjs", "typescript", "nestjs", "mysql"],
    date: "Feb 2023",
    description: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae dui congue dui porta volutpat vitae id risus.",
      features: [
        "Cras eleifend lacinia velit ac mattis. Nulla nec lectus eget sem tempus iaculis vel in odio. Mauris sollicitudin, risus sed vulputate cursus, lorem urna posuere sem, a consectetur diam augue at ipsum. Aenean ut massa enim.",
        "Aliquam purus ligula, semper vel pretium non, consectetur in ipsum. Fusce feugiat urna quis magna mollis tempor. Sed vel dui et sapien pretium semper ac in tellus. Curabitur nisl risus, aliquet in enim eu, feugiat mollis mauris."
      ]
    },
    links: ["https://www.agrivitech.com/solutions/novacollecte"]
  }
];
