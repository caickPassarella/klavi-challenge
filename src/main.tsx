import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";

import { NavBar } from "./components/ui/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <NavBar />
      <App />
    </Provider>
  </StrictMode>
);
