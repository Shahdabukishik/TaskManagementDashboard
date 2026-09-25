import { createTask } from "@/app/actions/tasks";

export default function AddTaskForm() {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#d6b95c]/30 bg-white shadow-sm">
      <div className="h-1 bg-gradient-to-r from-[#687a48] via-[#c5a03a] to-[#687a48]" />

      <div className="p-6 sm:p-7">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e9eddf] text-xl text-[#4f5f38]">
            +
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#29351f]">
              Create a task
            </h2>

            <p className="mt-1 text-sm text-[#73786b]">
              Add something new to your workspace.
            </p>
          </div>
        </div>

        <form action={createTask} className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-[#3a482b]"
            >
              Task title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="e.g. Prepare project presentation"
              className="w-full rounded-xl border border-[#e5e2d5] bg-[#fafaf6] px-4 py-3 text-sm text-[#29351f] outline-none transition placeholder:text-[#9a9d92] focus:border-[#c5a03a] focus:bg-white focus:ring-4 focus:ring-[#c5a03a]/10"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-[#3a482b]"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              required
              rows={4}
              placeholder="What needs to be done?"
              className="w-full resize-none rounded-xl border border-[#e5e2d5] bg-[#fafaf6] px-4 py-3 text-sm leading-6 text-[#29351f] outline-none transition placeholder:text-[#9a9d92] focus:border-[#c5a03a] focus:bg-white focus:ring-4 focus:ring-[#c5a03a]/10"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label
                htmlFor="priority"
                className="mb-2 block text-sm font-semibold text-[#3a482b]"
              >
                Priority
              </label>

              <select
                id="priority"
                name="priority"
                defaultValue="MEDIUM"
                className="w-full rounded-xl border border-[#e5e2d5] bg-[#fafaf6] px-4 py-3 text-sm text-[#29351f] outline-none transition focus:border-[#c5a03a] focus:bg-white focus:ring-4 focus:ring-[#c5a03a]/10"
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-[#3a482b] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#29351f] focus:outline-none focus:ring-4 focus:ring-[#687a48]/20"
            >
              Add task
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}