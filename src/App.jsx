import { Route, Routes } from "react-router-dom";
import TodoPage from "./todo-task/pages/TodoPage";
import HomePage from "./pages/HomePage";
import UserPages from "./user-fetch/Pages/UserPages";
import UserPage from "./user-fetch-dashboard/pages/UserPage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="task-1" element={<TodoPage />} />
      <Route path="task-2" element={<UserPages />} />
      <Route path="task-3" element={<UserPage />} />
    </Routes>
  );
}
