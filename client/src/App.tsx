import { useState } from "react";
import axios from "./utils/axios";

type User = {
	id: number;
	name: string;
	email: string;
};

function App() {
	const [health, setHealth] = useState<string | null>(null);
	const [users, setUsers] = useState<User[]>([]);

	const checkHealth = async () => {
		try {
			const response = await axios.get("/health");
			setHealth(response.data.status);
		} catch (error) {
			console.error("Error checking health:", error);
			setHealth("Error checking health");
		}
	};

	const fetchUsers = async () => {
		try {
			const response = await axios.get("/api/db-test");
			setUsers(response.data.users);
		} catch (error) {
			console.error("Error fetching users:", error);
		}
	};

	return (
		<section>
			<h1>Je suis le composant : `App`</h1>
			<button onClick={checkHealth}>Check Health</button>
			<button onClick={fetchUsers}>Fetch Users</button>
			{health && <p>Health Status: {health}</p>}
			{users.length > 0 && (
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							{user.name} - {user.email}
						</li>
					))}
				</ul>
			)}
		</section>
	);
}

export default App;
