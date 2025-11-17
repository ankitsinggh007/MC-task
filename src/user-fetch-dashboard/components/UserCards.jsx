export function UserCards({ users = [] }) {
  return (
    <div className="flex flex-col gap-3 w-full px-4">
      {users.length === 0 ? (
        <p className="text-center text-gray-500 py-4">No users found</p>
      ) : (
        users.map(({ id, name, email, address: { city } }) => (
          <div
            key={id}
            className="border rounded-lg p-3 bg-white text-gray-800 shadow-sm"
          >
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm">{email}</p>
            <p className="text-sm text-gray-500">{city}</p>
          </div>
        ))
      )}
    </div>
  );
}
