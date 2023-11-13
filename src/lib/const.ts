import { Locale } from "@/i18n-config";

type NavigationItem = {
  label: string;
  href: string;
};

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
