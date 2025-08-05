import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lightMode, setLightMode] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem("lightMode") || "false")
  );

  const toggleTheme = () => setLightMode((prev) => !prev)

  // Sync with localStorage and update root classes
  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));

    const root = document.documentElement;

    if (lightMode) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ lightMode, setLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
