import type { ReactNode } from "react";
import { Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex size-8 items-center justify-center rounded-lg bg-gradient-ai shadow-glow",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="white" strokeWidth="2.2">
        <path d="M7 5v7a5 5 0 0 0 10 0V5" strokeLinecap="round" />
        <circle cx="12" cy="19.5" r="1.4" fill="white" stroke="none" />
      </svg>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between animate-fade-up">
      <div>
        {eyebrow && (
          <p className="mb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
        {description && <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({
  className,
  children,
  style,
}: {
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("surface-card p-5", className)} style={style}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("text-sm font-semibold tracking-tight", className)}>{children}</h2>;
}

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "default",
  delay = 0,
}: {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  tone?: "default" | "primary" | "success" | "warning" | "danger";
  delay?: number;
}) {
  const toneClass = {
    default: "bg-secondary text-foreground",
    primary: "bg-primary-soft text-primary",
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
    danger: "bg-danger-soft text-danger",
  }[tone];
  return (
    <Card className="animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-start justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className={cn("flex size-8 items-center justify-center rounded-lg", toneClass)}>
          <Icon className="size-4" />
        </div>
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </Card>
  );
}

export function masteryTone(pct: number): "success" | "warning" | "danger" {
  if (pct >= 70) return "success";
  if (pct >= 50) return "warning";
  return "danger";
}

const barColor = { success: "bg-success", warning: "bg-warning", danger: "bg-danger" };
const textColor = { success: "text-success", warning: "text-warning", danger: "text-danger" };
const softColor = { success: "bg-success-soft", warning: "bg-warning-soft", danger: "bg-danger-soft" };

export function MasteryBar({
  label,
  value,
  previous,
  size = "md",
  delay = 0,
  className,
}: {
  label: string;
  value: number;
  previous?: number;
  size?: "sm" | "md" | "lg";
  delay?: number;
  className?: string;
}) {
  const tone = masteryTone(value);
  return (
    <div className={cn("animate-fade-up", className)} style={{ animationDelay: `${delay}ms` }}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className={cn("font-medium", size === "lg" ? "text-[15px]" : "text-sm")}>{label}</span>
        <span className="flex items-center gap-2 tabular-nums">
          {previous !== undefined && previous !== value && (
            <span className={cn("text-xs", value > previous ? "text-success" : "text-danger")}>
              {value > previous ? "+" : ""}
              {value - previous}
            </span>
          )}
          <span className={cn("font-semibold", textColor[tone], size === "lg" ? "text-lg" : "text-sm")}>
            {value}%
          </span>
        </span>
      </div>
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-secondary",
          size === "sm" ? "h-1.5" : size === "lg" ? "h-3" : "h-2",
        )}
      >
        <div
          className={cn("h-full origin-left rounded-full animate-grow-bar", barColor[tone])}
          style={{ width: `${value}%`, animationDelay: `${delay + 150}ms` }}
        />
      </div>
    </div>
  );
}

export function Pill({
  tone,
  children,
  className,
}: {
  tone: "success" | "warning" | "danger" | "primary" | "neutral";
  children: ReactNode;
  className?: string;
}) {
  const cls = {
    success: "bg-success-soft text-success",
    warning: "bg-warning-soft text-warning",
    danger: "bg-danger-soft text-danger",
    primary: "bg-primary-soft text-primary",
    neutral: "bg-secondary text-muted-foreground",
  }[tone];
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", cls, className)}>
      {children}
    </span>
  );
}

export function MasteryPill({ value }: { value: number }) {
  const tone = masteryTone(value);
  return (
    <Pill tone={tone} className={softColor[tone]}>
      {value}%
    </Pill>
  );
}

export function AiCard({
  title = "AI Insight",
  children,
  className,
  delay = 0,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-primary/15 bg-gradient-ai-soft p-6 shadow-card animate-fade-up",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-primary-glow/15 blur-3xl" />
      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-gradient-ai">
            <Sparkles className="size-3.5 text-primary-foreground" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{title}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AiDisclaimer({ className }: { className?: string }) {
  return (
    <p className={cn("flex items-center gap-1.5 text-xs text-muted-foreground", className)}>
      <Sparkles className="size-3 text-primary" />
      AI-estimated mastery · Not an official grade
    </p>
  );
}
