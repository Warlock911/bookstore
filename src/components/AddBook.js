import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { displayActions } from "../store/display";
import { addData } from "../store/data";
import { getData } from "../store/data";

const AddBook = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantiy] = useState("");

  const onAddHandler = (e) => {
    e.preventDefault();
    const newBook = { image, title, author, isbn, genre, price, quantity };
    dispatch(addData({ newBook }));
    dispatch(displayActions.added());
    dispatch(getData());
  };

  return (
    <div id="overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="title">Add New Book</div>
          <button
            className="close-button"
            onClick={() => dispatch(displayActions.added())}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={onAddHandler}>
            <label htmlFor="image">ImageURL: </label>
            <input
              type="text"
              id="image"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="isbn">ISBN Number: </label>
            <input
              type="text"
              id="isbn"
              onChange={(e) => {
                setIsbn(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              id="genre"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="prce">Price: </label>
            <input
              type="text"
              id="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="text"
              id="quantity"
              onChange={(e) => {
                setQuantiy(e.target.value);
              }}
            />
            <br></br>
            <div className="submit-button">
              <button>Add Book to Inventory</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
