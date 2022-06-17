// import { createSlice } from "@reduxjs/toolkit";

// const inventorySlice = createSlice({
//   name: "inventory",
//   initialState: {
//     list: [],
//     editBook: [],
//     totalBooks: 89,
//     isLoading: false,
//   },
//   reducer: {
//     getInventory(state,action){
//       state.list.concat(action.payload)
//     },
//     addBook(state, action) {
//       state.list.push(action.payload);
//     },

//     editBook(state, action) {
//       const { image, name, status, species, gender  } =
//         action.payload;
//         this.editBook.push({image, name, status, species, gender })
//       // const book = state.list.filter((item) => item.isbn === isbn);
//       // book.image = image;
//       // book.title = title;
//       // book.author = author;
//       // book.isbn = isbn;
//       // book.genre = genre;
//       // book.price = price;
//       // book.quantity = quantity;
//     },

//     deleteBook(state, action) {
//       const { isbn } = action.payload;
//       state.list = state.posts.list.filter((item) => item.isbn !== isbn);
//     },
//   },
// });

// export const inventoryActions = inventorySlice.actions;
// export default inventorySlice.reducer;
