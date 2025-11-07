import { useEffect, useState } from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";
export default function TodoPage() {
  let [todoList, setTodoList] = useState(() => {
    let stored = localStorage.getItem("todoList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  console.log(todoList, "todo");

  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
