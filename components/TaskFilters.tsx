"use client";

import { useMemo, useState } from "react";
import type { Task, TaskStatus } from "@/lib/types";
import TaskCard from "./TaskCard";

interface TaskFiltersProps {
  tasks: Task[];
}

export default function TaskFilters({
  tasks,
}: TaskFiltersProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<TaskStatus | "ALL">("ALL");

  const filteredTasks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(normalizedSearch) ||
        task.description.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        status === "ALL" || task.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, search, status]);

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-[#e5e2d5] bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <div>
            <label
              htmlFor="search"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#687a48]"
            >
              Search
            </label>

            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a47716]">
                ⌕
              </span>

              <input
                id="search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by title or description..."
                className="w-full rounded-xl border border-[#e5e2d5] bg-[#fafaf6] py-3 pl-10 pr-4 text-sm text-[#29351f] outline-none transition placeholder:text-[#9a9d92] focus:border-[#c5a03a] focus:bg-white focus:ring-4 focus:ring-[#c5a03a]/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="status"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#687a48]"
            >
              Status
            </label>

            <select
              id="status"
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as TaskStatus | "ALL",
                )
              }
              className="w-full rounded-xl border border-[#e5e2d5] bg-[#fafaf6] px-4 py-3 text-sm text-[#29351f] outline-none transition focus:border-[#c5a03a] focus:bg-white focus:ring-4 focus:ring-[#c5a03a]/10"
            >
              <option value="ALL">All statuses</option>
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#eeeade] pt-4">
          <p className="text-sm text-[#73786b]">
            Showing{" "}
            <span className="font-bold text-[#29351f]">
              {filteredTasks.length}
            </span>{" "}
            {filteredTasks.length === 1 ? "task" : "tasks"}
          </p>

          {(search || status !== "ALL") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setStatus("ALL");
              }}
              className="text-xs font-bold text-[#a47716] hover:text-[#805c0e]"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filteredTasks.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#d6b95c] bg-[#fbf8eb] px-6 py-14 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6d58f]/30 text-2xl text-[#a47716]">
            ⌕
          </div>

          <h3 className="mt-4 font-bold text-[#29351f]">
            No tasks found
          </h3>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#73786b]">
            Try a different search term or reset the status filter.
          </p>
        </div>
      )}
    </div>
  );
}