import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    addBook: false,
    isLoggedIn: false,
    editBook: false,
    deleteBook: false,
  },
  reducers: {
    add(state) {
      state.addBook = true;
    },
    added(state) {
      state.addBook = false;
    },
    login(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    edit(state) {
      state.editBook = true;
    },
    editted(state) {
      state.editBook = false;
    },
    onDelete(state) {
      state.deleteBook = true;
    },
  },
});

export const displayActions = displaySlice.actions;
export default displaySlice.reducer;
