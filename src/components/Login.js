import React from "react";
import "./Login.css";

const Login = (props) => {
  const onClickHandler = () => {
    props.onLogin();
  };

  return (
    <div className="container">
      <h1>The 3 Day BookStore</h1>
      <label htmlFor="name">Username</label>
      <input id="name" type="string" />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />
      <button onClick={onClickHandler}>Login</button>
    </div>
  );
};

export default Login;
