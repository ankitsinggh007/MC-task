import { useMemo } from "react";
import { MdDeleteForever } from "react-icons/md";

function Todo({ todoList, setTodoList, filter, sort }) {
  function update(operation, id) {
    if (operation === "delete") {
      setTodoList(todoList.filter((t) => t.id !== id));
    } else if (operation === "mark") {
      setTodoList(
        todoList.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t))
      );
    }
  }

  let filterData = useMemo(() => {
    return todoList.filter((obj) => {
      if (filter === "All") return true;
      if (filter === "Complete") return true;
      if (filter === "Pending") return true;
    });
  }, [filter, todoList]);

  if (!sort) {
    filterData.sort((a, b) => a.id - b.id);
  } else {
    filterData.sort((a, b) => b.id - a.id);
  }
  return (
    // 🎯 JIT: Centered section with fixed width for consistency.
    <section className="flex flex-col h-96 items-center w-full max-w-xl text-white">
      <h2 className="mb-3 text-2xl font-bold">Todo List</h2>

      {filterData.length > 0 ? (
        // 🎯 JIT: Scrollable list container with soft border and padding.
        <ul className="w-full h-64 overflow-y-auto border border-white rounded-md p-4 space-y-2">
          {filterData.map(({ id, text, complete }) => (
            // 🎯 JIT: Each item = fixed height, spaced row, smooth transitions.
            <li
              key={id}
              className="flex items-center justify-between h-12 px-3 border-b border-gray-400 last:border-0 "
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <input
                  id={id}
                  type="checkbox"
                  checked={complete}
                  onChange={() => update("mark", id)}
                  className="w-5 h-5 accent-blue-500"
                />
                <label
                  htmlFor={id}
                  title={text}
                  className={`flex-1 truncate text-lg ${
                    complete ? "line-through text-gray-400" : ""
                  }`}
                >
                  {text}
                </label>
              </div>
              <button
                aria-label="Delete todo"
                onClick={() => update("delete", id)}
                className="text-red-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 rounded"
              >
                <MdDeleteForever className="text-2xl" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-6 text-center text-lg text-gray-300">
          No todos yet ✏️
        </p>
      )}
    </section>
  );
}

export default Todo;
