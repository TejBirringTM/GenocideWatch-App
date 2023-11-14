export const themeOptions = [
    "corporate",
    "business"
] as const;

export type ThemeOption = typeof themeOptions[number];

export const defaultTheme : ThemeOption = "business";
