import React from "react";
import "./BookCard.css";
import { useDispatch } from "react-redux";

import { getOneData } from "../store/data";
import { deleteData } from "../store/data";
import { getData } from "../store/data";

const BookCard = ({
  bookData: { _id, image, title, author, isbn, genre, price, quantity },
}) => {
  const dispatch = useDispatch();

  const editButtonHandler = () => {
    dispatch(getOneData({ _id: _id }));
  };

  const deleteButtonHandler = () => {
    dispatch(deleteData({ _id: _id }));
    dispatch(getData());
  };

 

  return (
    <div className="card">
      <div className="main">
        <img src={image} alt={title} />
        <div className="info">
          <h3>Title: {title}</h3>
          <h3>Author: {author}</h3>
          <h3>ISBN: {isbn}</h3>
          <h3>Genre: {genre}</h3>
        </div>
      </div>
      <div className="inventory">
        <div>Price: ${price}</div>
        <div>Quantity: {quantity}</div>
        <div className="buttons">
          <button onClick={editButtonHandler}>Edit Information</button>
          <button onClick={deleteButtonHandler}>Delete Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
