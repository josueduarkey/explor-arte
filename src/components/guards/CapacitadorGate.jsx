import { Navigate, useLocation } from "react-router-dom";
import {
  isCapacitadorUnlocked,
} from "../../lib/capacitadorAuth.js";

export default function CapacitadorGate({ children }) {
  const location = useLocation();

  if (isCapacitadorUnlocked()) return children;

  const target = location.pathname + location.search;
  const redirectTo = `/admin/validacion?redirect=${encodeURIComponent(target)}`;

  return <Navigate to={redirectTo} replace />;
}

