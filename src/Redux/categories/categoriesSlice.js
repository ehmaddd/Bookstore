import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkState: (state) => {
      state.category.push('Under construction');
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkState } = categoriesSlice.actions;

export default categoriesSlice.reducer;
