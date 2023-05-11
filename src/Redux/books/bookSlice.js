import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iyoZQ6EUfx7OnMm7dSSw/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const resp = await axios.get(url);
  return resp.data;
});

export const sendBook = createAsyncThunk('books/addBooks', async (payload) => {
  const resp = await axios.post(url, payload);
  return { book: resp.data, payload };
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const check = state.books.map((book) => book.itemId === action.payload.itemId);
      const index = check.indexOf(true);
      state.books.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(sendBook.fulfilled, (state, action) => {
        console.log(state, action.payload);
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { removeBook } = bookSlice.actions;

export default bookSlice.reducer;
