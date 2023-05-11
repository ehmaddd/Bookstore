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

export const removeBook = createAsyncThunk('books/remove', async (payload) => {
  const deletePost = await axios.delete(`${url}/${payload.key}`);
  return { bookId: payload.key, deletedPost: deletePost.data };
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      console.log(state);
      state.books.push(action.payload);
    },
    removeBooks: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.bookId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      console.log(state);
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(sendBook.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeBook.fulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addBooks, removeBooks } = bookSlice.actions;

export default bookSlice.reducer;
