import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isShowAddTodo: false,
    isShowDialog: false,
  },
  reducers: {
    toggleArea(state) {
      state.isShowAddTodo = !state.isShowAddTodo;
    },
    toggleDialog(state) {
      state.isShowDialog = !state.isShowDialog;
    },
  },
});

// Reducer
const appReducer = appSlice.reducer;

// Selector
export const appSelector = (state) => state.appReducer;

// Export
export const { toggleArea, toggleDialog } = appSlice.actions;

export default appReducer;
