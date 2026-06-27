"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200 group"
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      Kembali
    </button>
  );
}