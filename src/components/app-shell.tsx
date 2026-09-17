import { Link, Outlet } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Target,
  ClipboardList,
  Route as RouteIcon,
  BarChart3,
  Sparkles,
  TrendingUp,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/ui-bits";
import { users } from "@/data/mock";

type NavItem = { to: string; label: string; icon: LucideIcon; exact?: boolean };

const nav: Record<"student" | "professor", NavItem[]> = {
  student: [
    { to: "/student", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/student/mastery", label: "Mastery", icon: Target },
    { to: "/student/assessment", label: "Assessment", icon: ClipboardList },
    { to: "/student/plan", label: "Learning Plan", icon: RouteIcon },
  ],
  professor: [
    { to: "/professor", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { to: "/professor/insights", label: "Class Insights", icon: BarChart3 },
    { to: "/professor/intervention", label: "Intervention", icon: Sparkles },
    { to: "/professor/growth", label: "Faculty Growth", icon: TrendingUp },
  ],
};

export function AppShell({ role }: { role: "student" | "professor" }) {
  const user = users[role];
  const items = nav[role];

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[256px_1fr]">
      <aside className="sticky top-0 z-20 flex flex-col border-b border-sidebar-border bg-sidebar lg:h-screen lg:border-r lg:border-b-0">
        <div className="flex items-center justify-between px-5 py-4 lg:py-5">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight">UniLoop AI</span>
          </Link>
          <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-medium text-primary lg:hidden">
            {user.role}
          </span>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:px-3 lg:pb-0">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="group flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
              activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent" }}
            >
              <item.icon className="size-4 opacity-80 transition-opacity group-hover:opacity-100" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden border-t border-sidebar-border p-3 lg:block">
          <div className="flex items-center gap-3 rounded-xl px-2 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-ai text-xs font-semibold text-primary-foreground">
              {user.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {user.role} · {user.course}
              </p>
            </div>
            <Link
              to="/"
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Switch role"
            >
              <LogOut className="size-4" />
            </Link>
          </div>
        </div>
      </aside>

      <main className="min-w-0">
        <div className="mx-auto max-w-6xl px-5 py-8 lg:px-10 lg:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
