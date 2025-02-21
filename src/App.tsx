import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Estadistica from "./pages/Estadistica";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estadistica" element={<Estadistica />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
