import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Homepage from "./storefront/pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
