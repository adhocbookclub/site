import { DarkMode, LightMode } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useCustomTheme } from "../providers/CustomThemeProvider";
import Nav from "./Nav";

const Header = () => {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <Stack
      component="header"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        component={Link}
        href="/"
        color="textPrimary"
        variant="h5"
        sx={{ textDecoration: "none" }}
      >
        &#123; Ad Hoc Book Club &#125;
      </Typography>
      <Stack direction="row" spacing={4} alignItems="center">
        <Nav />
        <IconButton onClick={toggleTheme} color="secondary">
          {mode === "dark" ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
