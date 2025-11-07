import React, { useEffect, useRef, useState } from "react";

function Form({ todoList, setTodoList }) {
  //todo:{id:1,text:'sleep at 10 o'clock',complete:false}
  let [todo, setTodo] = useState("");
  let counter = useRef(0);

  useEffect(() => {
    counter.current = todoList.length;
  }, [todoList]);

  function addToList(event) {
    event.preventDefault();
    if (todo === "") return;

    let temp = { id: counter.current++, text: todo, complete: false };
    setTodoList([...todoList, temp]);
    setTodo("");
  }
  return (
    <form>
      <label htmlFor="todoInput">create Todo</label>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="create todo..."
      />
      <button onClick={addToList}>Add</button>
    </form>
  );
}

export default Form;
