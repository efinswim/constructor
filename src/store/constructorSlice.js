import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [],
};

const constructorSlice = createSlice({
  name: 'constructorTools',
  initialState,
  reducers: {
    addNewElement(state, action) {
      if (action.payload === 'button') {
        state.elements.push({
          type: 'button',
          value: 'Button',
          id: new Date().getTime(),
        });
      }
      if (action.payload === 'headline') {
        state.elements.push({
          type: 'headline',
          value: 'Headline Headline',
          id: new Date().getTime(),
        });
      }
      if (action.payload === 'image') {
        state.elements.push({
          type: 'image',
          value: '',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png',
          id: new Date().getTime(),
        });
      }
      if (action.payload === 'paragraph') {
        state.elements.push({
          type: 'paragraph',
          value: 'Paragraph Paragraph',
          id: new Date().getTime(),
        });
      }
    },
    removeElement(state, action) {},
    copyElement(state, action) {},
    changeValueElement(state, action) {
      const id = action.payload.id;
      const value = action.payload.value;
      const element = state.elements.findIndex((item) => item.id === id);
      state.elements[element] = {
        type: element.type,
        value: value,
        id: element.id,
      };
      console.log('element', element);
    },
  },
});

export const { addNewElement, removeElement, copyElement, changeValueElement } =
  constructorSlice.actions;

export default constructorSlice.reducer;
