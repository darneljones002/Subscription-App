import React from "react";
import DashboardPageWrapper from "../../components/DashboardPageWrapper";


export default function FAQs() {
  return (
    <DashboardPageWrapper>
      <div>
        <h1 className="text-3xl font-bold mb-4">❓ Frequently Asked Questions</h1>
        <div className="space-y-6">
          {[
            {
              q: "How often are workouts updated?",
              a: "New workouts drop every morning at 6 AM EST.",
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime via your profile page.",
            },
            {
              q: "What equipment do I need?",
              a: "Most workouts use dumbbells or bodyweight only.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-xl">
              <h2 className="font-semibold text-red-400">{q}</h2>
              <p className="text-gray-300">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardPageWrapper>
  );
}
