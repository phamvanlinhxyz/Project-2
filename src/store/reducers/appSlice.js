import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    addTodoArea: false,
    isShowDialog: false,
  },
  reducers: {
    toggleArea(state, action) {
      state.addTodoArea = !state.addTodoArea;
    },
    toggleDialog(state, action) {
      state.isShowDialog = !state.isShowDialog;
    },
  },
});

// Reducer
const appReducer = appSlice.reducer;

// Selector
export const toggleSelector = (state) => state.appReducer.addTodoArea;
export const dialogSelector = (state) => state.appReducer.isShowDialog;

// Export
export const { toggleArea, toggleDialog } = appSlice.actions;

export default appReducer;
