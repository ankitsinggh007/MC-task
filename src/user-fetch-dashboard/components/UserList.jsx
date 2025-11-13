export default function UserList({ users }) {
  console.log(users, "users");
  return (
    <table className="border ">
      <thead className="border ">
        <tr>
          <th className="border border-black ">User</th>
          <th className="border border-black">Email</th>
          <th className="border border-black">City</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 && (
          <tr>
            <td className="text-center">No users found</td>
          </tr>
        )}
        {users.map(({ id, name, email, address: { city } }) => {
          return (
            <tr key={id} className="  border border-white-500">
              <td className="border border-white "> {name} </td>
              <td className="border border-white  "> {email} </td>
              <td className="border border-white "> {city} </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
