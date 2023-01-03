import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import useSWR from "swr";
import BookCard from "../components/BookCard";
import CardLoader from "../components/CardLoader";
import Layout from "../components/Layout";
import { fetcher } from "../utils/fetcher";
import type { Book } from "../utils/types";

const PreviousBooks: NextPage = () => {
  const { data: books, isLoading } = useSWR<Book[]>("/api/books", fetcher);

  return (
    <Layout title="Previous Books">
      {isLoading || !books ? (
        <CardLoader />
      ) : (
        <Grid container spacing={4}>
          {books.map((book) => (
            <Grid key={book.isbn}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
};

export default PreviousBooks;
