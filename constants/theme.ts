import { amber, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Fira_Sans } from "@next/font/google";

export type ThemeMode = "light" | "dark";

export const firaSans = Fira_Sans({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const getCustomTheme = (mode: ThemeMode) =>
  createTheme({
    palette: {
      mode,
      primary: teal,
      secondary: amber,
    },
    typography: {
      fontFamily: firaSans.style.fontFamily,
    },
  });

export default getCustomTheme;
