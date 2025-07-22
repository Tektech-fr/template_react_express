import { useEffect, useState } from "react";

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>USERS</h1>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.first_name} - {u.last_name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
