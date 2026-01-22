import { Suspense } from "react";
import IntentClient from "./intent-client";

export default function IntentPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <IntentClient />
    </Suspense>
  );
}
