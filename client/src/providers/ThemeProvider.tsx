// ThemeProvider.tsx
import {
  useState,
  type ReactNode,
  useEffect,
} from 'react';
import { ThemeContext } from '../utils/ThemeContext';



interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#4f46e5'); // Indigo 600
  const [headingFont, setHeadingFont] = useState("'Oswald', sans-serif");
  const [bodyFont, setBodyFont] = useState("'PT Serif', serif");

  // Apply dark mode class to html/body
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  // Apply CSS variables for dynamic theme
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--heading-font', headingFont);
    document.documentElement.style.setProperty('--body-font', bodyFont);
  }, [primaryColor, headingFont, bodyFont]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
        primaryColor,
        setPrimaryColor,
        headingFont,
        setHeadingFont,
        bodyFont,
        setBodyFont,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

