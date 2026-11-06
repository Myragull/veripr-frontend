"use client";

// The dark panel on the left with the two tabs.
// It is a client component because it needs to know which page we are on
// (usePathname) so it can highlight the active tab.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { waitingPullRequests } from "@/lib/mock-data";

// Total findings waiting for a person (1+1+1 + 1 + 2 = 6)
const waitingCount = waitingPullRequests.reduce(
  (total, pr) => total + Object.values(pr.counts).reduce((a, b) => a + b, 0),
  0
);

const tabs = [
  { label: "Review queue", href: "/", badge: waitingCount },
  { label: "Pipeline runs", href: "/pipeline-runs" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-56 shrink-0 flex-col bg-sidebar p-4 text-sidebar-text md:w-64">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-3 px-2 py-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-sidebar-text text-sm text-white">
          ✓
        </span>
        <span className="text-xl font-bold text-white">VeriPR</span>
      </div>

      {/* Tabs */}
      <nav className="flex flex-col gap-1">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-active text-white"
                  : "hover:bg-sidebar-active/60"
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-ink">
                  {tab.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom of the sidebar */}
      <p className="mt-auto px-2 pt-6 text-xs">Signed in as Myragull</p>
    </aside>
  );
}
