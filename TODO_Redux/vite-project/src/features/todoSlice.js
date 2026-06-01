import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    return [];
  }
};

const initialState = {
  todos: loadTodos(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.todos.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodo(state, action) {
      const { id, text } = action.payload;

      const todo = state.todos.find(
        (todo) => todo.id === id
      );

      if (todo) {
        todo.text = text;
      }
    },

    toggleTodo(state, action) {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  toggleTodo,
} = todoSlice.actions;

export default todoSlice.reducer;