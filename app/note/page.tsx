// app/note/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function NotePage() {
  const router = useRouter();

  return (
    <main>
      <h1>Note</h1>
      <button onClick={() => router.push("/")}>Home</button>
    </main>
  );
}
