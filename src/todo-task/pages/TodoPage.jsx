import { useEffect, useState } from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";
import useLocalStorage from "../hooks/useLocalStorage";
export default function TodoPage() {
  let [todoList, setTodoList] = useLocalStorage('todoList',[]);

  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
