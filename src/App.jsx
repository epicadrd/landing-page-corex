import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import PlansPage from "./pages/PlansPage";
import ModulesPage from "./pages/ModulesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="/soluciones" element={<SolutionsPage />} />
        <Route path="/modulos" element={<ModulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}