import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Presentation, ClipboardCheck, Brain, Route as RouteIcon, Users, Lightbulb } from "lucide-react";
import { Logo } from "@/components/ui-bits";
import { users } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UniLoop AI — Close the loop between teaching and mastery" },
      {
        name: "description",
        content:
          "Sign in to UniLoop AI, the platform that turns assessment data into personalized learning and better teaching.",
      },
      { property: "og:title", content: "UniLoop AI — Sign in" },
      { property: "og:description", content: "Close the loop between teaching and mastery." },
    ],
  }),
  component: Login,
});

const loop = [
  { icon: ClipboardCheck, label: "Assessment" },
  { icon: Brain, label: "AI analyzes mastery" },
  { icon: RouteIcon, label: "Personalized plan" },
  { icon: Users, label: "Class weaknesses" },
  { icon: Lightbulb, label: "Teaching intervention" },
];

function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background grid-dots">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10">
        <header className="flex items-center gap-2.5 animate-fade-in">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">UniLoop AI</span>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-14 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3 py-1 text-xs font-medium text-primary shadow-card animate-fade-up">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-primary animate-pulse-ring" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            AI-powered learning loop for universities
          </span>
          <h1
            className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Close the loop between <span className="text-gradient-ai">teaching</span> and{" "}
            <span className="text-gradient-ai">mastery</span>.
          </h1>
          <p
            className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            UniLoop AI connects student assessment results with personalized learning and professor
            teaching insights.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-2 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            {loop.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium shadow-card">
                  <step.icon className="size-3.5 text-primary" />
                  {step.label}
                </div>
                {i < loop.length - 1 && <ArrowRight className="size-3.5 text-muted-foreground/60" />}
              </div>
            ))}
          </div>

          <div className="mt-14 w-full max-w-2xl animate-fade-up" style={{ animationDelay: "320ms" }}>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Choose a demo account
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <RoleCard
                to="/student"
                icon={GraduationCap}
                role="Student"
                name={users.student.name}
                sub={users.student.course}
              />
              <RoleCard
                to="/professor"
                icon={Presentation}
                role="Professor"
                name={users.professor.name}
                sub={users.professor.course}
              />
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-muted-foreground animate-fade-in">
          Demo environment · No real authentication
        </footer>
      </div>
    </div>
  );
}

function RoleCard({
  to,
  icon: Icon,
  role,
  name,
  sub,
}: {
  to: "/student" | "/professor";
  icon: typeof GraduationCap;
  role: string;
  name: string;
  sub: string;
}) {
  return (
    <Link
      to={to}
      className="group surface-card flex items-center gap-4 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated"
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-ai group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{role}</p>
        <p className="mt-0.5 truncate font-semibold">{name}</p>
        <p className="truncate text-sm text-muted-foreground">{sub}</p>
      </div>
      <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  );
}
