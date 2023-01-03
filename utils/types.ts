export type BookISBN = string;

export interface BookInfo {
  title: string;
  grid: string;
  month: number;
  year: number;
}

export interface OpenLibraryBook {
  title: string;
  subtitle?: string;
  authors: Array<{ url: string; name: string }>;
  cover?: { small: string; medium: string; large: string };
}

export interface Book extends Omit<BookInfo, "grid"> {
  isbn: string;
  author: string;
  cover?: string;
  goodreadsUrl: string;
}

export type ThemeMode = "light" | "dark";
