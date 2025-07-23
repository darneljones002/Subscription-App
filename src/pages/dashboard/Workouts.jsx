import React from "react";
import DashboardPageWrapper from "../../components/DashboardPageWrapper";

export default function Workouts() {
  return (
    <DashboardPageWrapper>
      <div>
        <h1 className="text-3xl font-bold mb-4">🏋️ Daily Workouts</h1>
        <ul className="space-y-4">
          {[
            { title: "Push Day", desc: "Chest, shoulders, triceps (3 sets each)" },
            { title: "Pull Day", desc: "Back and biceps (4 exercises)" },
            { title: "Leg Day", desc: "Squats, lunges, hamstring curls" },
          ].map((w, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold">{w.title}</h2>
              <p className="text-gray-300">{w.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </DashboardPageWrapper>
  );
}
