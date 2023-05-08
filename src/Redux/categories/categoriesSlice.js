import { createSlice } from '@reduxjs/toolkit';

const initialStateCategory = {
  category: [],
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialStateCategory,
  reducers: {
    checkState: (state) => {
      if (state) state.category.push('Under construction');
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkState } = categoriesSlice.actions;

export default categoriesSlice.reducer;
