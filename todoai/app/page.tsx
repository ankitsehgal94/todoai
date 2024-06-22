"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Button } from "@/components/ui/button";
import Tasks from "@/components/todovex/tasks";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      todovex
      <Button>test</Button>
      <Tasks />
    </main>
  );
}
