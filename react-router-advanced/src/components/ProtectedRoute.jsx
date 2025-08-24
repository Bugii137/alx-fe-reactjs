// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

// Fake authentication check
const isAuthenticated = false; // toggle true/false for testing

function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
