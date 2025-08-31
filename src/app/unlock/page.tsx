"use client";
import { useState } from "react";
import { Lock, Unlock, KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UnlockPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const router = useRouter();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      setOk(res.ok);
      if (res.ok) {
        // petit délai, puis retour au catalogue
        setTimeout(() => router.push("/catalogue"), 600);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex items-center mb-6">
          <KeyRound className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">
            Déverrouiller le contenu
          </h1>
        </div>
        <p className="text-gray-600 mb-4">
          Saisis la clé d’accès pour consulter aussi les leçons verrouillées (N2,
          N3, N4).
        </p>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="password"
            className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Clé d’accès…"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center rounded-lg bg-blue-600 text-white py-2.5 hover:bg-blue-700 transition"
          >
            {loading ? "Vérification…" : "Déverrouiller"}
            {ok === true && <Unlock className="h-4 w-4 ml-2" />}
            {ok === false && <Lock className="h-4 w-4 ml-2" />}
          </button>
        </form>

        {ok === true && (
          <p className="mt-4 text-green-700 bg-green-50 border border-green-200 rounded-lg p-3">
            Accès activé. Redirection…
          </p>
        )}
        {ok === false && (
          <p className="mt-4 text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            Clé invalide. Réessaye.
          </p>
        )}
      </div>
    </div>
  );
}
