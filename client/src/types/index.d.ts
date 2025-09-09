declare interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  headingFont: string;
  setHeadingFont: (font: string) => void;
  bodyFont: string;
  setBodyFont: (font: string) => void;
}