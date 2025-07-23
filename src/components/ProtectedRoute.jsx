import React from "react";
import { Navigate } from "react-router-dom";

// Simulated auth check (replace with real logic)
const userIsSubscribed = true; // 🔁 Replace with Firebase/Auth check later

export default function ProtectedRoute({ children }) {
  return userIsSubscribed ? children : <Navigate to="/checkout" replace />;
}
