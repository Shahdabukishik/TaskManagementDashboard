import AddTaskForm from "@/components/AddTaskForm";
import TaskFilters from "@/components/TaskFilters";
import { tasks } from "@/lib/data";

export const metadata = {
  title: "Tasks",
  description: "View, search, filter, and create tasks.",
};

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-[#e9eddf] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4f5f38]">
              Workspace
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-[#29351f] sm:text-4xl">
              Your tasks
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#73786b]">
              Organize your work, keep priorities visible, and move
              each task forward.
            </p>
          </div>

          <div className="rounded-xl border border-[#d6b95c]/40 bg-[#fbf8eb] px-4 py-3 text-right">
            <p className="text-xs font-medium text-[#73786b]">
              Total
            </p>

            <p className="text-2xl font-bold text-[#a47716]">
              {tasks.length}
            </p>
          </div>
        </div>
      </section>

      <AddTaskForm />

      <TaskFilters tasks={tasks} />
    </div>
  );
}