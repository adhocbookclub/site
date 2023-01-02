import { Theme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ThemeMode } from "../constants/theme";
import getCustomTheme from "../constants/theme";

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeContext = createContext({
  mode: "light",
  toggleTheme: () => {},
});

export const useCustomTheme = () => useContext(CustomThemeContext);

const CustomThemeProvider = (props: CustomThemeProviderProps) => {
  const { children } = props;

  const systemPrefDark = useMediaQuery("(prefers-color-scheme: dark)");
  const defaultMode = systemPrefDark ? "dark" : "light";

  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [theme, setTheme] = useState<Theme>(getCustomTheme("light"));

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    setTheme(getCustomTheme(mode));
  }, [mode]);

  return (
    <CustomThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
