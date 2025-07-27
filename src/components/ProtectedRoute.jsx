// src/components/ProtectedRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { currentUser, userData, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!currentUser || !userData?.paid) return <Navigate to="/" />;

  return children;
}
