"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
    {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
  );
}

