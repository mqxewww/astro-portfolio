export interface ITechnology {
  icon: string;
  href: string;
}

export const technologies: ITechnology[][] = [
  [
    { href: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "html5" },
    { href: "https://www.php.net/", icon: "php" },
    { href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", icon: "javascript" },
    { href: "https://www.typescriptlang.org/", icon: "typescript" },
    { href: "https://tailwindcss.com/", icon: "tailwindcss" },
    { href: "https://sass-lang.com/", icon: "sass" }
  ],
  [
    { href: "https://vuejs.org/", icon: "vuejs" },
    { href: "https://reactjs.org/", icon: "react" },
    { href: "https://nextjs.org/", icon: "nextjs" },
    { href: "https://nestjs.com/", icon: "nestjs" }
  ],
  [
    { href: "https://www.mysql.com/", icon: "mysql" },
    { href: "https://www.mongodb.com/", icon: "mongodb" }
  ]
];
