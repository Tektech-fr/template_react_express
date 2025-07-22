import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { User } from "./types";

// S'assurer que le DOM est chargé et que les données sont disponibles
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

// Attendre que le DOM soit prêt et les données injectées
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
