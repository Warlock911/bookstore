import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./display";
import dataSlice from "./data";

const store = configureStore({
  reducer: {
    display: displaySlice,
    data: dataSlice,
  },
});

export default store;
