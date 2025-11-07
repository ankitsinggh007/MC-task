import { Route, Routes } from "react-router-dom";
import TodoPage from "./todo-task/pages/TodoPage";

export default function App() {
  return (
    <Routes>
      <Route path="task-1" element={<TodoPage />} />
    </Routes>
  );
}
