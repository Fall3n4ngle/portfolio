export const i18n = {
  defaultLocale: "En",
  locales: ["en", "ua"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
