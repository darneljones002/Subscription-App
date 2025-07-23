import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-700 rounded w-1/2"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
      <div className="h-32 bg-gray-700 rounded"></div>
    </div>
  );
}
