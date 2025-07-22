import { User } from "./types";

interface AppProps {
  initialUsers?: User[];
}

function App({ initialUsers = [] }: AppProps) {
  // Plus de useState - on utilise directement les props
  const users = initialUsers;

  console.log("App rendering with users:", users); // Debug

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
