import Link from "next/link";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="dashboard-shell min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[#e5e2d5]/80 bg-[#f8f6ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/dashboard" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3a482b] text-[#e6d58f] shadow-lg shadow-[#29351f]/10">
              ✓
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight text-[#29351f]">
                TaskFlow
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#a47716]">
                Focus & Progress
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-1 rounded-xl border border-[#e5e2d5] bg-white/70 p-1">
            <Link
              href="/dashboard"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#4f5f38] transition hover:bg-[#f4f6ed] hover:text-[#29351f]"
            >
              Overview
            </Link>

            <Link
              href="/dashboard/tasks"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#4f5f38] transition hover:bg-[#f4f6ed] hover:text-[#29351f]"
            >
              Tasks
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
        {children}
      </main>

      <footer className="border-t border-[#e5e2d5] bg-white/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-[#73786b] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>TaskFlow Dashboard</p>
          <p>
            Built with <span className="font-medium text-[#a47716]">Next.js</span>
          </p>
        </div>
      </footer>
    </div>
  );
}