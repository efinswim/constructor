import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  button: 0,
  headline: 0,
  image: 0,
  paragraph: 0,
};

const constructorSlice = createSlice({
  name: 'constructorTools',
  initialState,
  reducers: {
    addNewElement(state, action) {
      if (action.payload === 'button') {
        state.button++;
      }
      if (action.payload === 'headline') {
        state.headline++;
      }
      if (action.payload === 'image') {
        state.image++;
      }
      if (action.payload === 'paragraph') {
        state.paragraph++;
      }
    },
    removeElement(state, action) {},
    copyElement(state, action) {},
  },
});

export const { addNewElement, removeElement, copyElement } = constructorSlice.actions;

export default constructorSlice.reducer;
