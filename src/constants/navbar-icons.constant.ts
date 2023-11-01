interface INavbarIcon {
  href: string;
  icon: string;
  text: string;
}

export const navbarIcons: INavbarIcon[] = [
  { href: "/", icon: "home", text: "Accueil" },
  // { href: "/about-me", icon: "info", text: "Infos" },
  { href: "/projects", icon: "grid", text: "Projets" }
];
