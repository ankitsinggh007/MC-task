import { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";
import { UserCards } from "../components/UserCards";

export default function UserPage() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const abortRef = useRef(null);
  //local
  let itemsPerPage = 5;

  async function fetchData() {
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();
    let { signal } = abortRef.current;
    try {
      setLoader(true);
      setError(null);

      let response = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      let data = await response.json();
      if (!abortRef.current.signal.aborted) setUserList(data);
    } catch (error) {
      if (!error.name === "AbortError") setError(error);
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
      name.toLowerCase().includes(search) ||
      email.toLowerCase().includes(search)
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
      {loader ? (
        <p className="text-xl font-medium mt-4">Loading...</p>
      ) : error ? (
        <p className="text-xl font-medium mt-4 text-red-500">
          Something went wrong: {error.message}
        </p>
      ) : (
        <>
          {/* Desktop/Table */}
          <div className="hidden md:block">
            <UserList users={viewList} />
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            <UserCards users={viewList} />
          </div>

          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            totalItems={filteredList.length}
          />
        </>
      )}
    </div>
  );
}
