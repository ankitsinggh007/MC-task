import React from "react";

function Todo({ todoList, setTodoList }) {
  function update(operation, id) {
    let temp = [];
    if (operation === "delete") {
      temp = todoList.filter((todo) => todo.id !== id);
    } else if (operation === "mark") {
      temp = todoList.map((obj) => {
        return { ...obj };
      });

      for (let todo of temp) {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
      }
    }
    setTodoList(temp);
  }
  return (
    <section>
      {todoList.length > 0 ? (
        <ul>
          {todoList.map(({ id, text, complete }) => (
            <li className="flex" key={id}>
              <input
                id={id}
                type="checkbox"
                checked={complete}
                onChange={() => update("mark", id)}
              />
              <label htmlFor={id}> {text}</label>
              <button
                aria-label="Delete todo"
                onClick={() => update("delete", id)}
              >
                ␡
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos yet ✏️</p>
      )}
    </section>
  );
}

export default Todo;
