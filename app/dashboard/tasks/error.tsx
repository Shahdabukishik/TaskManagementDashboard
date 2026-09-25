"use client";

interface TasksErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function TasksError({
  reset,
}: TasksErrorProps) {
  return (
    <div className="flex min-h-[450px] items-center justify-center">
      <div className="max-w-md rounded-3xl border border-[#e5e2d5] bg-white p-8 text-center shadow-xl shadow-[#29351f]/5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fbf8eb] text-2xl text-[#a47716]">
          !
        </div>

        <h2 className="mt-5 text-2xl font-bold text-[#29351f]">
          Something went wrong
        </h2>

        <p className="mt-3 text-sm leading-6 text-[#73786b]">
          We could not load your tasks right now. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-[#3a482b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#29351f]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}