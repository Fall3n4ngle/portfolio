import { Locale } from "@/i18n-config";
import lightShop from "@/assets/projects/shop-light.png";
import drakShop from "@/assets/projects/shop-dark.png";

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contacts",
    href: "#ontacts",
  },
];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ua: "Українська",
};

export const projects: Project[] = [
  {
    categories: ["React.js", "Typescript", "Css"],
    title: "React Movies App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi nam tempora laborum aut dolore consectetur, numquam voluptates soluta obcaecati ipsa voluptatibus eveniet neque eum dolores maiores voluptatem ipsam nemo.",
    githubLink: "",
    siteLink: "",
    image: {
      light: lightShop,
      dark: drakShop,
    },
  },
  {
    categories: ["React.js", "Typescript", "Css"],
    title: "React Movies App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi nam tempora laborum aut dolore consectetur, numquam voluptates soluta obcaecati ipsa voluptatibus eveniet neque eum dolores maiores voluptatem ipsam nemo.",
    githubLink: "",
    siteLink: "",
    image: {
      light: lightShop,
      dark: drakShop,
    },
  },
  {
    categories: ["React.js", "Typescript", "Css"],
    title: "React Movies App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi nam tempora laborum aut dolore consectetur, numquam voluptates soluta obcaecati ipsa voluptatibus eveniet neque eum dolores maiores voluptatem ipsam nemo.",
    githubLink: "",
    siteLink: "",
    image: {
      light: lightShop,
      dark: drakShop,
    },
  },
  {
    categories: ["React.js", "Typescript", "Css"],
    title: "React Movies App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi nam tempora laborum aut dolore consectetur, numquam voluptates soluta obcaecati ipsa voluptatibus eveniet neque eum dolores maiores voluptatem ipsam nemo.",
    githubLink: "",
    siteLink: "",
    image: {
      light: lightShop,
      dark: drakShop,
    },
  },
];
