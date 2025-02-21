import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Estadistica from "./pages/Estadistica";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estadistica" element={<Estadistica />} />
    </Routes>
  );
}

export default App;
