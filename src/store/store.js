import { configureStore } from '@reduxjs/toolkit';
import constructorReducer from './constructorSlice';

export const store = configureStore({
  reducer: {
    constructorTools: constructorReducer,
  },
});
