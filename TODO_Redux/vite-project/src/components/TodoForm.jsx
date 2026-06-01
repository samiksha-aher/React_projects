import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { FaPlus } from "react-icons/fa";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(addTodo(text));

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-8"
    >
      <input
        type="text"
        placeholder="Add Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-3 text-white border border-black/10 rounded-lg outline-none duration-150 bg-white/20"
      />

      <button
        className="bg-green-600 text-white px-5 rounded-lg hover:bg-green-700"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default TodoForm;