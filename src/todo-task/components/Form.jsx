import { useRef, useState } from "react";
import { FaSortAmountUpAlt } from "react-icons/fa";
function Form({ todoList, setTodoList, setToast, setFilter, setSort }) {
  const property = ["All", "Complete", "Pending"];

  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  function addToList(e) {
    e.preventDefault();
    if (!todo.trim()) {
      setError(true);
      return;
    }
    const temp = { id: Date.now(), text: todo, complete: false };
    setTodoList([...todoList, temp]);
    setTodo("");
    inputRef.current.focus();
    setToast(true);
  }

  return (
    // 🎯 JIT: Align form elements horizontally with consistent gap.
    <form onSubmit={addToList} className="w-full flex flex-col items-center ">
      <section className="flex items-start justify-between  w-full max-w-xl gap-4 mb-4">
        <div className="flex flex-col flex-1">
          {/* 🎯 JIT: Full-width input with padding; color changes on error. */}
          <input
            ref={inputRef}
            aria-label="Create Todo"
            type="text"
            value={todo}
            onChange={(e) => {
              setError(false);
              setTodo(e.target.value);
            }}
            placeholder="Create todo..."
            className={`w-full rounded-md px-3 py-2 text-black border ${
              error ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-blue-500`}
          />
          <div className="flex-2">
            {error && (
              <p className="mt-1 text-sm font-semibold text-red-500">
                Value cannot be empty
              </p>
            )}
          </div>
        </div>

        {/* 🎯 JIT: Primary button with hover/focus feedback. */}
        <button
          type="submit"
          className="px-5 py-2 bg-green-500 rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Add
        </button>
      </section>
      <section className="flex  text-xl justify-center px-6  bg-gray-500 gap-4 items-center  h-20 border">
        {property.map((obj, index) => {
          return (
            <div key={index} className=" flex gap-1">
              <input
                type="radio"
                value={obj}
                onChange={(e) => setFilter(e.target.value)}
                name="filter"
                id={obj}
              />
              <label htmlFor={obj}>{obj}</label>
            </div>
          );
        })}
        <div>
          <div
            role="button"
            aria-label="sort list"
            onClick={() => setSort((prev) => !prev)}
            className="cursor-pointer flex items-center gap-1 border border-white bg-accent p-1"
          >
            <FaSortAmountUpAlt className="text-xl  " />
          </div>
        </div>
      </section>
    </form>
  );
}

export default Form;
