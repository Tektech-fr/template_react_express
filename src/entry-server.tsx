import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export function render(_url: string, data?: any) {
  const users = data?.users || [];

  const html = renderToString(
    <StrictMode>
      <App initialUsers={users} />
    </StrictMode>
  );
  return { html };
}
