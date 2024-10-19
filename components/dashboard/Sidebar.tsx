"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 border-r bg-muted/40 p-6 hidden md:block">
      <nav className="space-y-2">
        <Button onClick={() => router.push("/dashboard")} variant="ghost" className="w-full justify-start">
          Dashboard
        </Button>
        <Button onClick={() => router.push("/dashboard/form")} variant="ghost" className="w-full justify-start">
          Form
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Settings
        </Button>
      </nav>
    </aside>
  );
}
