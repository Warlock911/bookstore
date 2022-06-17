import React from "react";
import BookCard from "./BookCard";

import { useSelector } from "react-redux";

const BookContainer = () => {
  const books = useSelector((state) => state.data.inventory);

  return books.map((book) => <BookCard bookData={book} key={book._id} />);
};

export default BookContainer;
