import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./App.css"
import { registerSW } from "virtual:pwa-register"

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("Nueva versión disponible. ¿Actualizar?")) {
      updateSW(true);
    }
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
