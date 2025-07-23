import React from "react";
import DashboardPageWrapper from "../../components/DashboardPageWrapper";

export default function Profile() {
  const user = {
    name: "Dominic Jones",
    email: "dom@example.com",
    goals: "Lose 10 lbs and build lean muscle.",
    startDate: "July 1, 2025",
  };

  return (
    <DashboardPageWrapper>
      <div>
        <h1 className="text-3xl font-bold mb-6">🙋 Your Profile</h1>
        <div className="bg-gray-800 p-6 rounded-xl space-y-4 text-gray-200">
          <p><span className="font-bold">Name:</span> {user.name}</p>
          <p><span className="font-bold">Email:</span> {user.email}</p>
          <p><span className="font-bold">Goals:</span> {user.goals}</p>
          <p><span className="font-bold">Joined:</span> {user.startDate}</p>
        </div>
      </div>
    </DashboardPageWrapper>
  );
}
