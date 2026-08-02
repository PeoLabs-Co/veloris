import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Homepage from "./storefront/pages/Homepage";
import JewelryPage from "./storefront/pages/JewelryPage";
import StorefrontLayout from "./storefront/components/StorefrontLayout";

function App() {
  return (
    <Routes>
      <Route element={<StorefrontLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/jewelry" element={<JewelryPage />} />
      </Route>
      <Route path="/admin" element={<Dashboard />} />
      {/* catch all */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
