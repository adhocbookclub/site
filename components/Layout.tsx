import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
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
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          paddingY: 4,
          bgcolor: "background.default",
        }}
      >
        <Header />

        <Typography
          variant="h3"
          sx={{
            alignSelf: "flex-start",
            borderBottom: (theme) =>
              `4px solid ${theme.palette.secondary.main}`,
            marginY: 6,
          }}
        >
          {title}
        </Typography>

        <Box component="main" sx={{ flex: "auto" }}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
