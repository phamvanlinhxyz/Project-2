import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appSlice';
import todoReducer from './reducers/todoSlice';

const store = configureStore({
  reducer: {
    appReducer,
    todoReducer,
  },
});

export default store;
