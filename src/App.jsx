import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Workouts from "./pages/dashboard/Workouts";
import Nutrition from "./pages/dashboard/Nutrition";
import FAQs from "./pages/dashboard/FAQs";
import Profile from "./pages/dashboard/Profile";
import ProtectedRoute from "./components/ProtectedRoute"; // If you’re protecting dashboard routes

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="workouts" element={<Workouts />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
