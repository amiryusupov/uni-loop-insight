import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, BookOpen, Flame, ListTodo, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiCard, AiDisclaimer, Card, CardTitle, MasteryBar, PageHeader, StatCard, MasteryPill } from "@/components/ui-bits";
import { needsAttention, studentCourses, users } from "@/data/mock";

export const Route = createFileRoute("/student/")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — UniLoop AI" },
      { name: "description", content: "Your mastery overview, learning streak, and AI-recommended next task." },
      { property: "og:title", content: "Student Dashboard — UniLoop AI" },
      { property: "og:description", content: "Track mastery and follow your personalized learning plan." },
    ],
  }),
  component: StudentDashboard,
});

function StudentDashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Good evening"
        title={`Welcome back, ${users.student.name.split(" ")[0]}`}
        description="Here's where your learning stands today across Programming Fundamentals and your other courses."
        action={<AiDisclaimer />}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Overall mastery" value="72%" hint="+5% since last week" icon={Target} tone="primary" />
        <StatCard label="Courses" value="4" hint="2 with active plans" icon={BookOpen} delay={60} />
        <StatCard label="Learning streak" value="6 days" hint="Best: 11 days" icon={Flame} tone="warning" delay={120} />
        <StatCard label="Next task" value="Base Cases" hint="Understand Base Cases · 15 min" icon={ListTodo} tone="success" delay={180} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <AiCard className="lg:col-span-3" title="AI Recommendation" delay={220}>
          <p className="text-lg font-medium leading-snug tracking-tight text-balance">
            "You understand recursion generally, but your answers show difficulty with termination
            conditions."
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Based on your last diagnostic, focusing on base cases first will unlock the biggest gain in
            overall mastery.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild variant="ai" size="lg">
              <Link to="/student/plan">
                Start Recommended Task <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/student/assessment">Retake diagnostic</Link>
            </Button>
          </div>
        </AiCard>

        <Card className="lg:col-span-2 animate-fade-up" style={{ animationDelay: "280ms" }}>
          <div className="mb-5 flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="size-4 text-warning" /> Needs Attention
            </CardTitle>
            <Link to="/student/mastery" className="text-xs font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-5">
            {needsAttention.map((item, i) => (
              <MasteryBar key={item.label} label={item.label} value={item.mastery} delay={300 + i * 80} />
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6 animate-fade-up" style={{ animationDelay: "360ms" }}>
        <CardTitle className="mb-4">Your courses</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {studentCourses.map((c) => (
            <div key={c.code} className="rounded-lg border bg-background/60 p-4 transition-colors hover:bg-accent/50">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">{c.code}</p>
                  <p className="mt-0.5 text-sm font-medium leading-tight">{c.name}</p>
                </div>
                <MasteryPill value={c.mastery} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
