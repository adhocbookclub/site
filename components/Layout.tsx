import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout = (props: Props) => {
  const { children, title = "Home" } = props;

  return (
    <>
      <Head>
        <title>{`${title} | Ad Hoc Book Club`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Ad Hoc Book Club" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          paddingY: 4,
          bgcolor: (theme) => theme.palette.background.default,
        }}
      >
        <Header />

        <Divider sx={{ marginY: 4 }} />

        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
