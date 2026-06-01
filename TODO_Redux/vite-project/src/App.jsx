import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-[#242a33] p-5">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mt-5 text-white mb-8">
          Redux Toolkit Todo App
        </h1>

        <div className="bg-[#3f4a5a] backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;