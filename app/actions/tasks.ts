"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { tasks } from "@/lib/data";
import type { Task } from "@/lib/types";

export async function createTask(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const priorityValue = formData.get("priority")?.toString();

  if (!title || !description) {
    throw new Error("Title and description are required.");
  }

  const priority: Task["priority"] =
    priorityValue === "HIGH" ||
    priorityValue === "MEDIUM" ||
    priorityValue === "LOW"
      ? priorityValue
      : "MEDIUM";

  const newTask: Task = {
    id: String(Date.now()),
    title,
    description,
    status: "TODO",
    priority,
  };

  tasks.push(newTask);

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/tasks");

  redirect("/dashboard/tasks");
}