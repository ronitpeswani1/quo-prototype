"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function IntentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sell = searchParams.get("sell");

  return (
    <main style={{ padding: 40 }}>
      <h1>How would you like to get started?</h1>

      {sell === "true" && (
        <p style={{ marginTop: 12, color: "#555" }}>
          If you also need to sell a property, we’ll help coordinate that after
          your offer strategy is clear.
        </p>
      )}

      <div style={{ marginTop: 24 }}>
        <button
          onClick={() => router.push("/note")}
          style={{ padding: "8px 12px" }}
        >
          Learn how offers work
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={() => router.push("/note")}
          style={{ padding: "8px 12px" }}
        >
          I have a property in mind
        </button>
      </div>
    </main>
  );
}
