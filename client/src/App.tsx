import { useEffect, useState } from "react";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

function App() {
  const [status, setStatus] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  const backUrl = import.meta.env.VITE_BACK_URL || "http://localhost:5432";

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`${backUrl}/api`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStatus(data.message);
      } catch (error) {
        console.error("Error fetching status:", error);
        setStatus("Error fetching status");
      }
    };
    fetchStatus();
  }, [backUrl]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${backUrl}/api/users`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };
    fetchUsers();
  }, [backUrl]);

  console.log("Users fetched:", users);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.first_name} - {user.email}
          </li>
        ))}
      </ul>
      <p>{status}</p>
    </>
  );
}

export default App;
