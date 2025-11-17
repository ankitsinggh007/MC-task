export default function UserList({ users }) {
  console.log(users, "users");
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto min-w-full border-collapse">
        <thead className="bg-white text-black text-xl  ">
          <tr>
            <th className="px-4 py-2 text-left">User</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">City</th>
          </tr>
        </thead>
        
        <tbody>
          {users.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="text-center py-4 text-gray-500 font-medium"
              >
                No users found

              </td>
            </tr>
          )}
          {users.map(({ id, name, email, address: { city } }) => {
            return (
              <tr key={id} className="">
                <td className="border border-gray-300 px-4 py-2 "> {name} </td>
                <td className="border border-gray-300 px-4 py-2  ">
                  {" "}
                  {email}{" "}
                </td>
                <td className="border border-gray-300 px-4 py-2 "> {city} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
