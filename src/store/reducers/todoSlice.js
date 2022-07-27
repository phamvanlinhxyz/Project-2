import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DeleteMode } from "../../config";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodo: [],
    selectedTodo: null,
    deleteMode: DeleteMode.ONE,
    dialogMsg: "",
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodo.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            status: "Cần làm",
            updatedAt: new Date().toISOString(),
          },
        };
      },
    },
    updateTodo(state, action) {
      state.allTodo = state.allTodo.map((td) => {
        if (td.id === action.payload) {
          td.status === "Cần làm" ? (td.status = "Đang làm") : (td.status = "Hoàn thành");
          td.updatedAt = new Date().toISOString();
        }
        return td;
      });
      state.allTodo.sort(function (a, b) {
        return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
      });
    },
    selectTodo(state, action) {
      state.selectedTodo = action.payload;
    },
    deleteTodo(state) {
      state.allTodo = state.allTodo.filter((todo) => {
        return todo.id !== state.selectedTodo;
      });
    },
    loadTodo(state, action) {
      state.allTodo = action.payload;
    },
    deleteAll(state) {
      state.allTodo = [];
    },
    setDeleteMode(state, action) {
      state.deleteMode = action.payload;
    },
    setDialogMessage(state, action) {
      state.dialogMsg = action.payload;
    },
  },
});

// Reducer
const todoReducer = todoSlice.reducer;

// Selector
export const todoSelector = (state) => state.todoReducer;

// Export
export const {
  addTodo,
  updateTodo,
  selectTodo,
  deleteTodo,
  loadTodo,
  deleteAll,
  setDeleteMode,
  setDialogMessage,
} = todoSlice.actions;

export default todoReducer;
