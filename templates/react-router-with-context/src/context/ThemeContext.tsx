import { FC, ReactNode, createContext, useMemo, useState } from "react";

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  setTheme: () => {},
});

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
