import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { displayActions } from "../store/display";

const Header = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(displayActions.login());
  };

  return (
    <div className="header">
      <h1>The 3 Day BookShop</h1>
      <h2>Logged in as Owner</h2>
      <div>
        <button className="logout-button" onClick={onClickHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
