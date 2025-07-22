import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { User } from "./types";

function initializeApp() {
  const initialData = (window as any).__INITIAL_DATA__ as
    | { users: User[] }
    | undefined;
  const users = initialData?.users || [];

  console.log("Hydrating with users:", users); // Debug

  hydrateRoot(
    document.getElementById("root") as HTMLElement,
    <StrictMode>
      <App initialUsers={users} />
    </StrictMode>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
