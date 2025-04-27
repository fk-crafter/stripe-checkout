"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Paiement fictif réussi 🎉");
      setLoading(false);
    }, 2000); // simule un paiement
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
    >
      <h1 className="mb-6 text-3xl font-bold text-center text-gray-800">
        Paiement SaaS
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Numéro de carte (fictif)
          </label>
          <input
            type="text"
            required
            placeholder="4242 4242 4242 4242"
            className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:border-blue-400 focus:outline-none"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-3 text-white transition hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Traitement..." : "Payer"}
        </motion.button>
      </form>
    </motion.div>
  );
}
