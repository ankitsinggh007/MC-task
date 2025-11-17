export default function SearchBar({ onSearch }) {
  return (
    <form className=" h-12 w-1/3 my-4 ">
      <input
        className="h-12 w-full rounded-md text-black text-2xl "
        aria-label="searchBar"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search user by Name or Email"
      />
    </form>
  );
}
