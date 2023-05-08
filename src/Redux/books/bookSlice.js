import { createSlice } from '@reduxjs/toolkit';

const initialStateBooks = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'books',
  initialStateBooks,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { adBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
