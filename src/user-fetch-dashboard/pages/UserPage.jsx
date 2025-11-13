import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";

export default function UserPage() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  //local
  let itemsPerPage = 5;

  async function fetchData() {
    try {
      setLoader(true);
      setError(null);

      let response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      let data = await response.json();
      setUserList(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  }
  useEffect(() => {
    fetchData();

    return () => {};
  }, []);
  console.log(userList);
  let filteredList = userList.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(search) || email.toLowerCase().includes(email)
  );

  let viewList = filteredList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(viewList);
  console.log(search, "search");
  return (
    <div className="bg-blue-950 h-screen flex flex-col  justify-center items-center text-slate-100 ">
      <h1 className="font-extrabold text-3xl text-orange-400 mb-4 ">
        User List
      </h1>
      <SearchBar onSearch={setSearch} />
      <UserList users={viewList} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredList.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
