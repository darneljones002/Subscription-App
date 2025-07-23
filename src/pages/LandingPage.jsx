import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[120vh] flex items-start justify-center pt-48 px-6"
            style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
            >

            <div className="bg-black/70 p-6 md:p-10 rounded-xl max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-red-600 mb-4">
                Unlock Your Power
                </h1>
                <p className="text-white text-base md:text-lg mb-6">
                Daily Workouts, Nutrition Tips, FAQs & Personalized Coaching. One subscription, total transformation.
                </p>
                <Link to="/checkout">
                <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-white shadow-lg">
                    Subscribe for $99.99
                </button>
                </Link>
            </div>
        </section>


      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          {[
            { title: "Daily Workouts", icon: "🏋️‍♀️" },
            { title: "Nutrition Tips", icon: "🥗" },
            { title: "FAQs", icon: "❓" },
            { title: "Your Profile", icon: "🙋" }
          ].map(({ title, icon }) => (
            <div key={title} className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-black text-sm text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} VBody Power Fitness. All rights reserved.
      </footer>
    </div>
  );
}
