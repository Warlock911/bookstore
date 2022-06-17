import "./MainBody.css";
import React from "react";
import AddBook from "./AddBook";
import BookContainer from "./BookContainer";
import Header from "./Header";
import EditBook from "./EditBook";
import { useSelector, useDispatch } from "react-redux";
import { displayActions } from "../store/display";

const MainBody = () => {
  const dispatch = useDispatch();
  const addBook = useSelector((state) => state.display.addBook);
  const edit = useSelector((state) => state.data.editBook);
  const total = useSelector((state) => state.data.totalBooks);

  const addBookHandler = () => {
    dispatch(displayActions.add());
  };

  return (
    <div>
      {edit && <EditBook />}
      {addBook && <AddBook />}
      <Header />

      <div className="inventory-information">
        <div>
          <BookContainer />
        </div>

        <div>
          <div className="add-new-book">
            <button onClick={addBookHandler}>Add New Book</button>
          </div>
          <h3>Total Books: {total}</h3>
          <input type="search-box" placeholder="Search Books By Name" />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
