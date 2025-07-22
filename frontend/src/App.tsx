import { useEffect, useState } from "react";
import axios from "axios";

type Item = { id: number; info: string };

export default function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Items</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>{i.info}</li>
        ))}
      </ul>
    </div>
  );
}
