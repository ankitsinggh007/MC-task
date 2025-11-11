import { useEffect, useState } from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";
import useLocalStorage from "../hooks/useLocalStorage";

export default function TodoPage() {
  const [todoList, setTodoList] = useLocalStorage("todoList", []);
  const [toast, setToast] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState(true);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    // 🎯 JIT: Full-viewport flex column centered; dark background for contrast.
    <div className="flex flex-col  items-center justify-center h-screen bg-blue-950 text-white relative p-6">
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        setToast={setToast}
        setFilter={setFilter}
        setSort={setSort}
      />
      <Todo
        todoList={todoList}
        setTodoList={setTodoList}
        filter={filter}
        sort={sort}
      />

      {toast && (
        // 🎯 JIT: Toast positioned top-right with subtle border and rounded corners.
        <div
          role="alert"
          onClick={() => setToast(false)}
          className="absolute top-6 right-6 w-64 px-4 py-3 bg-green-100 border-2 border-green-500 text-green-900 text-center rounded-md shadow-md cursor-pointer   "
        >
          Todo added successfully 🔥
        </div>
      )}
    </div>
  );
}
