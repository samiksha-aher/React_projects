import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleTodo,
} from "../features/todoSlice";

import {
  FaTrash,
  FaEdit,
  FaCheck,
  FaSave,
} from "react-icons/fa";

import { useState } from "react";

function TodoList() {
  const todos = useSelector(
    (state) => state.todos.todos
  );

  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    dispatch(
      updateTodo({
        id,
        text: editText,
      })
    );

    setEditingId(null);
  };

  const deleteTodo = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (confirmDelete) {
      dispatch(removeTodo(id));
    }
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex items-center justify-between p-4 rounded-xl shadow-md transition-all
          ${
            todo.completed
              ? "bg-green-200"
              : "bg-white"
          }`}
        >
          <div
            className="flex items-center gap-3 flex-1"
          >
            <button
              onClick={() =>
                dispatch(toggleTodo(todo.id))
              }
              className={`w-8 h-8 rounded-full flex items-center justify-center
              ${
                todo.completed
                  ? "bg-green-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              <FaCheck />
            </button>

            {editingId === todo.id ? (
              <input
                value={editText}
                onChange={(e) =>
                  setEditText(e.target.value)
                }
                className="border p-2 rounded w-full"
              />
            ) : (
              <p
                onClick={() =>
                  dispatch(toggleTodo(todo.id))
                }
                className={`cursor-pointer text-lg
                ${
                  todo.completed
                    ? "line-through text-gray-600"
                    : ""
                }`}
              >
                {todo.text}
              </p>
            )}
          </div>

          <div className="flex gap-2 ml-4">
            {editingId === todo.id ? (
              <button
                onClick={() =>
                  saveEdit(todo.id)
                }
                className="bg-green-500 text-white p-2 rounded"
              >
                <FaSave />
              </button>
            ) : (
              <button
                onClick={() =>
                  startEdit(todo)
                }
                className="bg-yellow-500 text-white p-2 rounded"
              >
                <FaEdit />
              </button>
            )}

            <button
              onClick={() =>
                deleteTodo(todo.id)
              }
              className="bg-red-500 text-white p-2 rounded"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;