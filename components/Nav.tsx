import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Books we've read", path: "/previous-books" },
];

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <Stack direction="row" gap={4} alignItems="baseline">
      {navLinks.map((link) => (
        <Link
          href={link.path}
          color={pathname == link.path ? "primary" : "textPrimary"}
          component={NextLink}
          key={link.path}
          underline="none"
          sx={{
            borderBottom: (theme) =>
              pathname == link.path
                ? `4px solid ${theme.palette.primary.main}`
                : "none",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {link.title}
        </Link>
      ))}
    </Stack>
  );
};

export default Nav;
