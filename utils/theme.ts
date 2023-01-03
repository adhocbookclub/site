import { amber, grey, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Fira_Sans } from "@next/font/google";
import type { ThemeMode } from "./types";

const firaSans = Fira_Sans({
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
      background: {
        default: mode === "dark" ? grey[800] : "#fff",
      },
    },
    typography: {
      fontFamily: firaSans.style.fontFamily,
    },
  });

export default getCustomTheme;
