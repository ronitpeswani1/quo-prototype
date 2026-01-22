"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function IntentClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sell = searchParams.get("sell");

  return (
    <div style={{ padding: 24 }}>
      <h1>How would you like to get started?</h1>

      {sell === "true" && <p>Selling flow enabled</p>}

      <button onClick={() => router.push("/note")}>
        Continue
      </button>
    </div>
  );
}
