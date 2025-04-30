"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) return alert("Merci de renseigner un email.");

    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      const stripe = await stripePromise;

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: data.sessionId });
      }
    } catch (error) {
      console.error("Erreur de paiement:", error);
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
        Votre commande
      </h1>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <Input
          type="email"
          id="email"
          placeholder="votre@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <ul className="mb-6 space-y-3 text-gray-700">
        <li className="flex justify-between">
          <span>Abonnement SaaS (1 mois)</span>
          <span>€20,00</span>
        </li>
        <li className="flex justify-between">
          <span>Option premium</span>
          <span>Inclus</span>
        </li>
        <li className="border-t pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span>€20,00</span>
        </li>
      </ul>

      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          onClick={handleSubmit}
          className="w-full cursor-pointer"
          disabled={loading}
        >
          {loading ? "Redirection..." : "Passer la commande"}
        </Button>
      </motion.div>
    </motion.div>
  );
}
