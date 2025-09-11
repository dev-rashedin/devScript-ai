declare interface ThemeContextType {
  dark: boolean;
  toggleDark: () => void;
}

declare interface ThemeProviderProps {
  children: ReactNode;
}

declare interface ExplanationData {
  explanation: string;
  language: string;
}

declare interface ExplainResult {
  success: boolean;
  data?: unknown;
  error?: string;
}