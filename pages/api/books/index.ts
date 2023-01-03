import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { books } from "../../../utils/books";
import type { Book, OpenLibraryBook } from "../../../utils/types";

const getISBNFromBooks = () =>
  Object.keys(books)
    .map((isbn) => `ISBN:${isbn}`)
    .join(",");

const formatData = (data: OpenLibraryBook[]): Book[] =>
  Object.entries(data).map(([k, v]) => {
    const isbn = k.slice(5);
    const { month, year, grid } = books[isbn];
    return {
      isbn,
      title: v.subtitle ? [v.title, v.subtitle].join(": ") : v.title,
      author: v.authors[0].name,
      cover: v.cover?.medium,
      month,
      year,
      goodreadsUrl: `https://www.goodreads.com/book/show/${grid}`,
    };
  });

/**
 * https://openlibrary.org/dev/docs/api/books
 * @param req
 * @param res
 */
const handler: NextApiHandler<Book[]> = async (
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) => {
  const bibkeys = getISBNFromBooks();
  try {
    const response = await fetch(
      `http://openlibrary.org/api/books?bibkeys=${bibkeys}&jscmd=data&format=json`
    );

    const data: OpenLibraryBook[] = await response.json();
    res.status(200).json(formatData(data));
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export default handler;
