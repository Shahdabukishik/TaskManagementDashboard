import Link from "next/link";
import type { Task } from "@/lib/types";

interface TaskCardProps {
  task: Task;
}

const statusStyles = {
  TODO: "bg-[#f4f6ed] text-[#4f5f38] border-[#e9eddf]",
  IN_PROGRESS: "bg-[#fbf8eb] text-[#a47716] border-[#e6d58f]",
  DONE: "bg-[#e9eddf] text-[#3a482b] border-[#d5ddc4]",
};

const priorityStyles = {
  LOW: "text-[#687a48]",
  MEDIUM: "text-[#a47716]",
  HIGH: "text-[#8c6410]",
};

const statusLabels = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Link
      href={`/dashboard/tasks/${task.id}`}
      className="group block rounded-2xl border border-[#e5e2d5] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#d6b95c]/60 hover:shadow-lg hover:shadow-[#29351f]/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#a47716]">
              Task #{task.id}
            </span>
          </div>

          <h2 className="text-lg font-bold text-[#29351f] transition group-hover:text-[#4f5f38]">
            {task.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#73786b]">
            {task.description}
          </p>
        </div>

        <span
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusStyles[task.status]}`}
        >
          {statusLabels[task.status]}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-[#eeeade] pt-4">
        <span
          className={`text-xs font-bold uppercase tracking-wider ${priorityStyles[task.priority]}`}
        >
          {task.priority} priority
        </span>

        <span className="text-sm font-semibold text-[#a47716] transition group-hover:translate-x-1">
          View →
        </span>
      </div>
    </Link>
  );
}