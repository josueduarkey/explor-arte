import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import AdminModulesPage from "./pages/AdminModulesPage.jsx";
import AdminReorderPage from "./pages/AdminReorderPage.jsx";
import AdminValidateCodePage from "./pages/AdminValidateCodePage.jsx";
import DocenteModulePage from "./pages/DocenteModulePage.jsx";
import DocenteDashboardPage from "./pages/DocenteDashboardPage.jsx";
import StudentBooksPage from "./pages/StudentBooksPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import CapacitadorGate from "./components/guards/CapacitadorGate.jsx";

function NotFoundPage() {
  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 18, fontWeight: 700 }}>404 - No encontrado</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={
            <CapacitadorGate>
              <AdminDashboardPage />
            </CapacitadorGate>
          }
        />
        <Route
          path="/admin/gestion-modulos"
          element={
            <CapacitadorGate>
              <AdminModulesPage />
            </CapacitadorGate>
          }
        />
        <Route
          path="/admin/ordenar-modulos"
          element={
            <CapacitadorGate>
              <AdminReorderPage />
            </CapacitadorGate>
          }
        />
        <Route
          path="/admin/validacion"
          element={<AdminValidateCodePage />}
        />

        <Route path="/docente/modulo" element={<DocenteModulePage />} />
        <Route
          path="/docente/dashboard"
          element={<DocenteDashboardPage />}
        />

        <Route
          path="/estudiante/libros"
          element={<StudentBooksPage />}
        />

        <Route path="/faq" element={<FaqPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
