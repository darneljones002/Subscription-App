import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingSkeleton from "../components/LoadingSkeleton"; // import it

export default function DashboardPageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // fake load delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex-1 p-6 overflow-y-auto"
    >
      {loading ? <LoadingSkeleton /> : children}
    </motion.div>
  );
}
