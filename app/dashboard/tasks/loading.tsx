export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <div className="h-4 w-24 animate-pulse rounded-full bg-[#e6d58f]" />
        <div className="mt-4 h-10 w-48 animate-pulse rounded-lg bg-[#dfe5d4]" />
        <div className="mt-3 h-5 w-80 max-w-full animate-pulse rounded bg-[#e9eddf]" />
      </div>

      <div className="rounded-2xl border border-[#e5e2d5] bg-white p-7">
        <div className="h-6 w-40 animate-pulse rounded bg-[#e9eddf]" />

        <div className="mt-6 space-y-4">
          <div className="h-12 animate-pulse rounded-xl bg-[#f4f6ed]" />
          <div className="h-24 animate-pulse rounded-xl bg-[#f4f6ed]" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-44 animate-pulse rounded-2xl bg-[#e9eddf]"
          />
        ))}
      </div>
    </div>
  );
}