import Link from "@mui/material/Link";
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
    <>
      {navLinks.map((link) => (
        <Link
          href={link.path}
          color={pathname == link.path ? "primary" : "textSecondary"}
          component={NextLink}
          key={link.path}
          underline="none"
          sx={{
            borderBottom: (theme) =>
              pathname == link.path
                ? `2px solid ${theme.palette.primary.main}`
                : "none",
            "&:hover": {
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Nav;
