export default function CancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-100">
      <div className="rounded-xl bg-white p-8 shadow-xl text-center">
        <h1 className="text-2xl font-bold text-red-600">❌ Paiement annulé</h1>
        <p className="mt-4 text-gray-700">
          Vous pouvez réessayer quand vous voulez.
        </p>
      </div>
    </div>
  );
}
