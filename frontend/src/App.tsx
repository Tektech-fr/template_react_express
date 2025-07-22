import React, { useState } from "react";
import { login, fetchData } from "./api";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);

  const handleLogin = async () => {
    try {
      const res = await login(username, password);
      setToken(res.data.token);
    } catch {
      alert("Login failed");
    }
  };

  const handleFetch = async () => {
    if (!token) return;
    try {
      const res = await fetchData(token);
      setData(res.data);
    } catch {
      alert("Fetch failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      {!token ? (
        <div>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={handleFetch}>Fetch Data</button>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
