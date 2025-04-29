"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CancelPage() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-100">
      <div className="rounded-xl bg-white p-8 shadow-xl text-center">
        <h1 className="text-2xl font-bold text-red-600">❌ Paiement annulé</h1>
        <p className="mt-4 text-gray-700">
          Vous pouvez réessayer quand vous voulez.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Redirection dans 5 secondes...
        </p>
      </div>
    </div>
  );
}
