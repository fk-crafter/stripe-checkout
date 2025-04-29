import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="rounded-xl bg-white p-8 shadow-xl text-center">
        <h1 className="text-2xl font-bold text-green-600">
          ✅ Paiement réussi
        </h1>
        <p className="mt-4 text-gray-700">Merci pour votre achat !</p>

        <Link href="/" className="mt-6 block">
          <Button variant="outline">Retour à l’accueil</Button>
        </Link>
      </div>
    </div>
  );
}
