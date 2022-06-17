import "./EditBook.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../store/data";
import { updateData } from "../store/data";
import { getData } from "../store/data";
const EditBook = () => {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.data.bookData);

  const _id = bookData._id;
  const [image, setImage] = useState(bookData.image);
  const [title, setTitle] = useState(bookData.title);
  const [author, setAuthor] = useState(bookData.author);
  const [isbn, setIsbn] = useState(bookData.isbn);
  const [genre, setGenre] = useState(bookData.genre);
  const [price, setPrice] = useState(bookData.price);
  const [quantity, setQuantiy] = useState(bookData.quantity);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const editBook = {
      image,
      title,
      author,
      isbn,
      genre,
      price,
      quantity,
      _id,
    };
    dispatch(dataActions.editted());
    dispatch(updateData({ editBook }));
    dispatch(getData());
  };

  return (
    <div id="overlay">
      <div className="modal">
        <div className="modal-header">
          <div className="title">Edit Book</div>
          <button
            className="close-button"
            onClick={() => dispatch(dataActions.editted())}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="image">ImageURL: </label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="isbn">ISBN: </label>
            <input
              type="text"
              id="isbn"
              value={isbn}
              onChange={(e) => {
                setIsbn(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="price">Price: </label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <br></br>
            <label htmlFor="quantity">Quantity: </label>
            <input
              type="text"
              id="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantiy(e.target.value);
              }}
            />
            <br></br>
            <div className="submit-button">
              <button>Edit Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
