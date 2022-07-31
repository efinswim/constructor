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
    removeElement(state, action) {
      if (action.payload === 'button') {
        if (state.button === 0) {
          state.button = 0;
        }
        state.button--;
      }
      if (action.payload === 'headline') {
        if (state.headline === 0) {
          state.headline = 0;
        }
        state.headline--;
      }
      if (action.payload === 'image') {
        if (state.image === 0) {
          state.image = 0;
        }
        state.image--;
      }
      if (action.payload === 'paragraph') {
        if (state.paragraph) {
          state.paragraph = 0;
        }
        state.paragraph--;
      }
    },
    copyElement(state, action) {
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
  },
});

export const { addNewElement, removeElement, copyElement } = constructorSlice.actions;

export default constructorSlice.reducer;
