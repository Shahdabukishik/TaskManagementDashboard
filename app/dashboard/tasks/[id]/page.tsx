import Link from "next/link";
import { notFound } from "next/navigation";
import { tasks } from "@/lib/data";

interface TaskDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: TaskDetailsPageProps) {
  const { id } = await params;
  const task = tasks.find((item) => item.id === id);

  return {
    title: task?.title ?? "Task Not Found",
    description: task?.description ?? "Task details",
  };
}

export default async function TaskDetailsPage({
  params,
}: TaskDetailsPageProps) {
  const { id } = await params;

  const task = tasks.find((item) => item.id === id);

  if (!task) {
    notFound();
  }

  const statusLabels = {
    TODO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
  };

  const statusStyles = {
    TODO: "bg-[#f4f6ed] text-[#4f5f38]",
    IN_PROGRESS: "bg-[#fbf8eb] text-[#a47716]",
    DONE: "bg-[#e9eddf] text-[#3a482b]",
  };

  const priorityStyles = {
    LOW: "text-[#687a48]",
    MEDIUM: "text-[#a47716]",
    HIGH: "text-[#8c6410]",
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/dashboard/tasks"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#687a48] transition hover:text-[#a47716]"
      >
        ← Back to tasks
      </Link>

      <article className="mt-6 overflow-hidden rounded-3xl border border-[#e5e2d5] bg-white shadow-lg shadow-[#29351f]/5">
        <div className="h-2 bg-gradient-to-r from-[#4f5f38] via-[#c5a03a] to-[#82935c]" />

        <div className="p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a47716]">
                Task #{task.id}
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#29351f]">
                {task.title}
              </h1>
            </div>

            <span
              className={`rounded-full px-4 py-2 text-xs font-bold ${statusStyles[task.status]}`}
            >
              {statusLabels[task.status]}
            </span>
          </div>

          <div className="mt-9">
            <p className="text-xs font-bold uppercase tracking-wider text-[#687a48]">
              Description
            </p>

            <p className="mt-3 text-base leading-8 text-[#5f6459]">
              {task.description}
            </p>
          </div>

          <div className="mt-9 grid gap-4 border-t border-[#eeeade] pt-7 sm:grid-cols-2">
            <div className="rounded-xl bg-[#f8f7f0] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#73786b]">
                Status
              </p>

              <p className="mt-2 font-semibold text-[#3a482b]">
                {statusLabels[task.status]}
              </p>
            </div>

            <div className="rounded-xl bg-[#fbf8eb] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#73786b]">
                Priority
              </p>

              <p
                className={`mt-2 font-bold ${priorityStyles[task.priority]}`}
              >
                {task.priority}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}