import type { Variants } from 'motion/react';
import type { ReactNode } from 'react';
import { type HTMLMotionProps } from 'motion/react';

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

declare type TExplanation = { explanation: string };

declare interface ButtonProps {
  label: string;
  type: string;
  href?: string;
  isSubmit?: boolean;
  onClick?: () => void;
  className?: string;
}

declare type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: React.ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: React.RefObject<HTMLElement | null>;
  as?: T;
  customVariants?: Variants;
  once?: boolean;
} & HTMLMotionProps<T>;