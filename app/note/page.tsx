"use client";

import { useRouter } from "next/navigation";

export default function Note() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold">
          Selling your current home
        </h1>

        <p className="text-sm text-gray-400">
          If you also need to sell a property, we’ll help coordinate that
          after your offer strategy is clear.
        </p>

        <button
          onClick={() => router.push("/")}
          className="w-full rounded-md border px-4 py-3"
        >
          Continue
        </button>
      </div>
    </main>
  );
}
