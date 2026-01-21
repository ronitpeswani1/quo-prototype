"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Intent() {
  const router = useRouter();
  const params = useSearchParams();
  const needsToSell = params.get("sell");

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-semibold">
          How would you like to get started?
        </h1>

        <div className="space-y-3">
          <button
            onClick={() =>
              needsToSell ? router.push("/note") : router.push("/note")
            }
            className="w-full rounded-md border px-4 py-3"
          >
            Learn how offers work
          </button>

          <button
            onClick={() =>
              needsToSell ? router.push("/note") : router.push("/note")
            }
            className="w-full rounded-md border px-4 py-3"
          >
            I have a property in mind
          </button>
        </div>
      </div>
    </main>
  );
}
