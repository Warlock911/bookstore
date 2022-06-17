import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("inventory/getInventory", async () => {
  return await fetch(
    "https://bookstore-backend-24k44dt0z-warlock911.vercel.app/"
  ).then((res) => res.json());
});

export const addData = createAsyncThunk(
  "inventory/addInventory",
  async (newBook) => {
    return await fetch(
      `https://bookstore-backend-24k44dt0z-warlock911.vercel.app/`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: newBook.image,
          title: newBook.title,
          author: newBook.author,
          isbn: newBook.isbn,
          genre: newBook.genre,
          price: newBook.price,
          quantity: newBook.quantity,
        }),
      }
    ).then((res) => res.json());
  }
);

export const getOneData = createAsyncThunk(
  "inventory/updateInventory",
  async ({ _id }) => {
    console.log({ params: _id });
    return await fetch(
      `https://bookstore-backend-24k44dt0z-warlock911.vercel.app/${_id}`
    ).then((res) => res.json());
  }
);

export const updateData = createAsyncThunk(
  "inventory/deleteInventory",
  async ({ editBook }) => {
    console.log({ editBook: editBook });
    return await fetch(
      `https://bookstore-backend-24k44dt0z-warlock911.vercel.app/${editBook._id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: editBook.image,
          title: editBook.title,
          author: editBook.author,
          isbn: editBook.isbn,
          genre: editBook.genre,
          price: editBook.price,
          quantity: editBook.quantity,
        }),
      }
    ).then((res) => res.json());
  }
);

export const deleteData = createAsyncThunk(
  "inventory/deleteInventory",
  async ({ _id }) => {
    return await fetch(
      `https://bookstore-backend-24k44dt0z-warlock911.vercel.app/${_id}`,
      {
        method: "DELETE",
      }
    ).then((res) => res.json());
  }
);

const dataSlice = createSlice({
  name: "inventory",
  initialState: {
    inventory: [],
    bookData: [],
    editBook: false,
    isLoading: false,
    deleteData: false,
    totalBooks: 150, //can get the total here from the server
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.inventory = action.payload;
      state.isLoading = false;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteData.fulfilled]: (state, action) => {
      state.delete = deleteData.true;
      state.inventory.filter((book) => book._id === action.payload._id);
    },
    [addData.fulfilled]: (state, action) => {
      state.deleteData = true;
      state.inventory.push(action.payload);
    },
    [getOneData.fulfilled]: (state, action) => {
      state.bookData = action.payload;
      state.editBook = true;
      state.inventory.filter((book) => book._id === action.payload._id)
    },
    [updateData.fulfilled]: (state, action) => {
      state.inventory.push(action.payload);
    },
  },
  reducers: {
    editted(state) {
      state.editBook = false;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
