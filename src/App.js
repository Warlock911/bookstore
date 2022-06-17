import MainBody from "./components/MainBody";
import Login from "./components/Login";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayActions } from "../src/store/display";
import { getData } from "../src/store/data";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.display.isLoggedIn);
  const inventory = useSelector((state) => state.data.inventory);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const onLoginHandler = () => {
    dispatch(displayActions.login());
  };

  return (
    <>
      {!loggedIn && <Login onLogin={onLoginHandler} />}
      {loggedIn && <MainBody />}
    </>
  );
}

export default App;
