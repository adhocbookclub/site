import { Brightness2Outlined, WbSunnyOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useCustomTheme } from "../providers/CustomThemeProvider";
import Nav from "./Nav";

const Header = () => {
  const { mode, toggleTheme } = useCustomTheme();

  return (
    <header>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component={Link}
          href="/"
          color="textPrimary"
          variant="h4"
          sx={{ textDecoration: "none" }}
        >
          &#123; Ad Hoc Book Club &#125;
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Nav />
          <IconButton onClick={toggleTheme} color="secondary">
            {mode === "dark" ? <WbSunnyOutlined /> : <Brightness2Outlined />}
          </IconButton>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
