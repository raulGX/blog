import React, { useCallback, useState } from "react";

export enum Theme {
  light = "light",
  dark = "dark",
}

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
export const ThemeContext = React.createContext<ThemeContextProps>({} as any);

const ThemeProvider: React.FC<{}> = (props) => {
  const [theme, setTheme] = useState(Theme.light);

  const toggleTheme = useCallback(() => {
    if (theme === Theme.light) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
