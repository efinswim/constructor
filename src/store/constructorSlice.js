import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  elements: [],
};

const findItemByIndex = (state, action) => state.elements.findIndex((item) => item.id === action.payload);

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
          value:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png',
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
    removeElement(state, action) {
      const id = action.payload;
      const filtered = state.elements.filter((item) => item.id !== id);
      state.elements = filtered;
    },
    copyElement(state, action) {
      const id = action.payload;
      const copied = state.elements.find((item) => item.id === id);
      state.elements.push({
        ...copied,
        id: new Date().getTime(),
      });
    },
    changeValueElement(state, action) {
      const id = action.payload.id;
      const value = action.payload.value;
      const type = action.payload.type;
      const element = state.elements.findIndex((item) => item.id === id);
      state.elements[element] = {
        type: type,
        value: value,
        id: id,
      };
    },
    moveUp(state, action) {
      const fromIndex = findItemByIndex(state, action)
      const toIndex = fromIndex - 1;
      if (toIndex >= 0) {
        const element = state.elements.splice(fromIndex, 1)[0];
        state.elements.splice(toIndex, 0, element);
      }
    },
    moveDown(state, action) {

      const fromIndex = findItemByIndex(state, action)
      const element = state.elements[fromIndex];
      const toIndex = fromIndex + 1;
      state.elements.splice(fromIndex, 1);
      state.elements.splice(toIndex, 0, element);
    }
  },
});

export const {
  addNewElement,
  removeElement,
  copyElement,
  changeValueElement,
  moveUp,
  moveDown,
  setActiveElement,
} = constructorSlice.actions;

export default constructorSlice.reducer;
