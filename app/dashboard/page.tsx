import Link from "next/link";
import { tasks } from "@/lib/data";

export const metadata = {
  title: "Overview",
  description: "TaskFlow dashboard overview.",
};

export default function DashboardPage() {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "DONE",
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "IN_PROGRESS",
  ).length;

  const todoTasks = tasks.filter(
    (task) => task.status === "TODO",
  ).length;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-[#29351f] p-7 text-white shadow-xl shadow-[#29351f]/10 sm:p-10">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#c5a03a]/15 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#82935c]/20 blur-3xl" />

        <div className="relative max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e6d58f]/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#e6d58f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6b95c]" />
            Your workspace
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Keep your work moving.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#dce2d1] sm:text-base">
            A simple, focused space to organize tasks, track progress,
            and keep your priorities clear.
          </p>

          <Link
            href="/dashboard/tasks"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#d6b95c] px-5 py-3 text-sm font-semibold text-[#29351f] transition hover:bg-[#e6d58f]"
          >
            View all tasks
            <span>→</span>
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#29351f]">
            At a glance
          </h2>
          <p className="mt-1 text-sm text-[#73786b]">
            A quick overview of your current workload.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total tasks"
            value={totalTasks}
            accent="olive"
          />

          <StatCard
            label="To do"
            value={todoTasks}
            accent="gold"
          />

          <StatCard
            label="In progress"
            value={inProgressTasks}
            accent="olive"
          />

          <StatCard
            label="Completed"
            value={`${completionRate}%`}
            accent="gold"
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-[#29351f]">
                Recent tasks
              </h2>
              <p className="mt-1 text-sm text-[#73786b]">
                Your latest items at a glance.
              </p>
            </div>

            <Link
              href="/dashboard/tasks"
              className="text-sm font-semibold text-[#a47716] hover:text-[#805c0e]"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 divide-y divide-[#e5e2d5]">
            {tasks.slice(0, 4).map((task) => (
              <Link
                key={task.id}
                href={`/dashboard/tasks/${task.id}`}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#3a482b]">
                    {task.title}
                  </p>

                  <p className="mt-1 truncate text-xs text-[#73786b]">
                    {task.description}
                  </p>
                </div>

                <StatusBadge status={task.status} />
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#d6b95c]/30 bg-[#fbf8eb] p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d6b95c]/20 text-xl text-[#a47716]">
            ✦
          </div>

          <h2 className="mt-5 font-bold text-[#29351f]">
            Small steps matter
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#73786b]">
            Keep your task list clear and focus on what moves your
            work forward.
          </p>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#e9eddf]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#82935c] to-[#c5a03a]"
              style={{ width: `${completionRate}%` }}
            />
          </div>

          <p className="mt-2 text-xs font-medium text-[#687a48]">
            {completionRate}% completed
          </p>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number | string;
  accent: "olive" | "gold";
}) {
  return (
    <div className="glass-card rounded-2xl p-5">
      <div
        className={`mb-5 h-1.5 w-12 rounded-full ${
          accent === "gold"
            ? "bg-[#c5a03a]"
            : "bg-[#687a48]"
        }`}
      />

      <p className="text-sm font-medium text-[#73786b]">
        {label}
      </p>

      <p className="mt-2 text-3xl font-bold text-[#29351f]">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: "TODO" | "IN_PROGRESS" | "DONE";
}) {
  const styles = {
    TODO: "bg-[#f4f6ed] text-[#4f5f38]",
    IN_PROGRESS: "bg-[#fbf8eb] text-[#a47716]",
    DONE: "bg-[#e9eddf] text-[#3a482b]",
  };

  const labels = {
    TODO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
  };

  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}