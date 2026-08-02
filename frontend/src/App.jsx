import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Homepage from "./storefront/pages/Homepage";
import JewelryPage from "./storefront/pages/JewelryPage";
import ShoesPage from "./storefront/pages/ShoesPage";
import ApparelPage from "./storefront/pages/ApparelPage";
import CollectionPage from "./storefront/pages/CollectionPage";
import AccountPage from "./storefront/pages/AccountPage";
import NotFoundPage from "./storefront/pages/NotFoundPage";
import StorefrontLayout from "./storefront/components/StorefrontLayout";

function App() {
  return (
    <Routes>
      <Route element={<StorefrontLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/jewelry" element={<JewelryPage />} />
        <Route path="/shoes" element={<ShoesPage />} />
        <Route path="/apparel" element={<ApparelPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
