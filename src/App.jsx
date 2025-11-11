import { Route, Routes } from "react-router-dom";
import TodoPage from "./todo-task/pages/TodoPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="task-1" element={<TodoPage />} />
    </Routes>
  );
}
