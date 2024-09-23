import { configureStore } from '@reduxjs/toolkit';
import reducer from './items-slice';

// make a function for creating a store 
export const createStore = () => configureStore({
  reducer: {items: reducer},
})

export const store = createStore();

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
