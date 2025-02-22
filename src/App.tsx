import { Routes, Route } from "react-router-dom"

// Rutas
import Login from "./pages/Login"
import ValidateUser from "./pages/ValidateUser"
import Home from "./pages/Home"
import Estadistica from "./pages/Estadistica"
import Inventario from "./pages/Inventario"
import Solicitudes from "./pages/Solicitudes"
import ProtectedRoute from "./ProtectedRoute"
import "./i18n/i18n"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/validateuser" element={<ValidateUser />} />
      <Route element={<ProtectedRoute />}>          
          <Route path="/home" element={<Home />} />
          <Route path="/estadistica" element={<Estadistica />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/solicitudes" element={<Solicitudes />} />
      </Route>
    </Routes>
  );
}

export default App
