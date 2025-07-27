// src/pages/Checkout.jsx
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "../context/AuthContext";

const stripePromise = loadStripe("pk_test_51RnRYVI8pRnTUeRYZOrQtYKdfkqxEYQ913n11akfNOjXwENsO3kG6p2eeav18gY14RweiigX2pvgL7FGHu5nDEeK00r63bN6dp");

export default function Checkout() {
  const { currentUser } = useAuth();

  const handleCheckout = async () => {
    if (!currentUser) {
      alert("Please log in first.");
      return;
    }

    const stripe = await stripePromise;
    const res = await fetch("https://<your-cloud-function-url>/createCheckoutSession", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: currentUser.uid }),
    });
    const session = await res.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl mb-6">Subscribe for $99.99</h1>
      <button
        onClick={handleCheckout}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
