import { Book } from "./Book";

export const fetchBooks = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_URL_API}/books`,
  );

  if (!response.ok) throw new Error("Error loading books");

  const books = await response.json();
  return books as Book[];
};
