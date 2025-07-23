import React from "react";
import DashboardPageWrapper from "../../components/DashboardPageWrapper";

export default function Nutrition() {
  return (
    <DashboardPageWrapper>
      <div>
        <h1 className="text-3xl font-bold mb-4">🥗 Daily Nutrition Tips</h1>
        <div className="space-y-4">
          {[
            "Start your day with protein-rich meals.",
            "Hydrate with at least 8 cups of water.",
            "Avoid processed sugars post 6 PM.",
          ].map((tip, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl">
              <p className="text-gray-200">✅ {tip}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardPageWrapper>
  );
}
