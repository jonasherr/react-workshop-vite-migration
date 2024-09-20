import { useState } from "react";
import { formatCurrency } from "../App";
import { Book } from "../domain/book/Book";
import { LikeCounter } from "./LikeCounter";
import { Hideable } from "./Hideable";

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  const [likes, setLikes] = useState(0);
  const priceAsNumber = formatCurrency(book.price);
  const isFree = priceAsNumber === 0;

  return (
    <div className={`book-list-item ${isFree ? "book-list-item_free" : ""}`}>
      <h2>
        {likes >= 5 && <span className="icon_entry">⭐ </span>}
        {isFree && <span>💰</span>}
        {book.title}
      </h2>
      <h3>
        <span>{"💰".repeat(getPriceCategory(priceAsNumber))}</span>
        {book.subtitle}
      </h3>
      <div className="text-meta">by {book.author}</div>
      <LikeCounter likes={likes} onLikesChange={setLikes} />
      <Hideable>
        <p>{book.abstract}</p>
      </Hideable>
    </div>
  );
};

const getPriceCategory = (price: number) => {
  if (price === 0) return 0;

  if (price <= 10) return 1;

  if (price <= 30) return 2;

  return 3;
};
