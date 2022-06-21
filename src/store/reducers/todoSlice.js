import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    allTodo: [],
    selectedTodo: null,
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
            status: 'To do',
            updatedAt: new Date().toISOString(),
          },
        };
      },
    },
    updateTodo(state, action) {
      state.allTodo = state.allTodo.map((td) => {
        if (td.id === action.payload) {
          td.status === 'To do' ? (td.status = 'Doing') : (td.status = 'Done');
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
    deleteTodo(state, action) {
      state.allTodo = state.allTodo.filter((todo) => {
        return todo.id !== state.selectedTodo;
      });
    },
  },
});

// Reducer
const todoReducer = todoSlice.reducer;

// Selector
export const todoSelector = (state) => state.todoReducer.allTodo;

// Export
export const { addTodo, updateTodo, selectTodo, deleteTodo } =
  todoSlice.actions;

export default todoReducer;
