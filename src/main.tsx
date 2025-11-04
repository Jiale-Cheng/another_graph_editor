import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Only register the service worker in production to avoid stale-cache issues
// on GitHub Pages while we're debugging deployment.
import { registerSW } from "virtual:pwa-register";
if (typeof window !== "undefined" && "serviceWorker" in navigator && import.meta.env.PROD) {
  registerSW({ immediate: true });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
