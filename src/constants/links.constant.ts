interface ILink {
  color: string;
  href: string;
  text: string;
}

export const links: ILink[] = [
  { color: "warning", href: "/about-me", text: "Infos" },
  { color: "light", href: "/projects", text: "Projets" }
];
