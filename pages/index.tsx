import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="subtitle1">
        The official site of the Ad Hoc Book Club! Friends, pseudo-friends, INTJ
        dominance, potpourri of books, quotes and enlightening discussions!
      </Typography>
    </Layout>
  );
};

export default Home;
