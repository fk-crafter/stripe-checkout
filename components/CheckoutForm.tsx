"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Paiement réussi !");
      setLoading(false);
    }, 2000);
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
        <div className="space-y-2">
          <Label htmlFor="name">Nom</Label>
          <Input id="name" type="text" required placeholder="Votre nom" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="Votre email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="card">Numéro de carte</Label>
          <Input
            id="card"
            type="text"
            required
            placeholder="4242 4242 4242 4242"
          />
        </div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Traitement..." : "Payer"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
