import type { Task } from "./types";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Build dashboard layout",
    description:
      "Create the main dashboard layout with navigation and a content area.",
    status: "DONE",
    priority: "HIGH",
  },
  {
    id: "2",
    title: "Implement task list",
    description:
      "Display all available tasks in a clean and responsive task list.",
    status: "IN_PROGRESS",
    priority: "HIGH",
  },
  {
    id: "3",
    title: "Add task filtering",
    description:
      "Allow users to search and filter tasks by their current status.",
    status: "TODO",
    priority: "MEDIUM",
  },
  {
    id: "4",
    title: "Create task details page",
    description:
      "Create a dynamic page that displays the details of a selected task.",
    status: "TODO",
    priority: "MEDIUM",
  },
  {
    id: "5",
    title: "Add loading and error states",
    description:
      "Implement Next.js loading and error UI for the task pages.",
    status: "TODO",
    priority: "LOW",
  },
];