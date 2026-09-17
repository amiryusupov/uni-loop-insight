import { createFileRoute, Link } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiDisclaimer, Card, CardTitle, MasteryBar, PageHeader, Pill, masteryTone } from "@/components/ui-bits";
import { masteryOverTime, outcomes } from "@/data/mock";

export const Route = createFileRoute("/student/mastery")({
  head: () => ({
    meta: [
      { title: "Mastery — Programming Fundamentals — UniLoop AI" },
      { name: "description", content: "AI-estimated mastery for each learning outcome in Programming Fundamentals." },
      { property: "og:title", content: "Mastery — UniLoop AI" },
      { property: "og:description", content: "Learning outcome mastery and progress over time." },
    ],
  }),
  component: MasteryPage,
});

function MasteryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Course · CS 101"
        title="Programming Fundamentals"
        description="Mastery per learning outcome, estimated by UniLoop AI from your diagnostics, exercises and projects."
        action={<AiDisclaimer />}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {outcomes.map((o, i) => {
          const tone = masteryTone(o.mastery);
          return (
            <Card key={o.id} className="animate-fade-up" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="mb-4 flex items-center justify-between">
                <Pill tone={tone}>
                  {tone === "success" ? (
                    <CheckCircle2 className="mr-1 size-3" />
                  ) : (
                    <AlertCircle className="mr-1 size-3" />
                  )}
                  {tone === "success" ? "On track" : tone === "warning" ? "Developing" : "Needs work"}
                </Pill>
                <span className="text-xs text-muted-foreground">Outcome {i + 1}</span>
              </div>
              <MasteryBar label={o.label} value={o.mastery} previous={o.previous} size="lg" delay={i * 70 + 100} />
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 animate-fade-up" style={{ animationDelay: "320ms" }}>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <CardTitle>Mastery over time</CardTitle>
            <p className="mt-0.5 text-xs text-muted-foreground">Overall course mastery, last 7 weeks</p>
          </div>
          <Pill tone="success">+31 pts since week 1</Pill>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={masteryOverTime} margin={{ top: 16, right: 8, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="masteryFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.28} />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--color-border)" />
              <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
              <YAxis domain={[0, 100]} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }} />
              <Tooltip
                cursor={{ stroke: "var(--color-primary)", strokeOpacity: 0.3 }}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-elevated)",
                  fontSize: 12,
                }}
                formatter={(v: number) => [`${v}%`, "Mastery"]}
              />
              <Area
                type="monotone"
                dataKey="mastery"
                stroke="var(--color-primary)"
                strokeWidth={2.5}
                fill="url(#masteryFill)"
                dot={{ r: 3, fill: "var(--color-primary)", strokeWidth: 0 }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <AiDisclaimer className="mt-3" />
      </Card>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border bg-card p-5 shadow-card animate-fade-up" style={{ animationDelay: "400ms" }}>
        <div>
          <p className="font-medium">Ready to update your mastery?</p>
          <p className="text-sm text-muted-foreground">Take the 5-question Recursive Functions diagnostic.</p>
        </div>
        <Button asChild variant="ai">
          <Link to="/student/assessment">
            Start diagnostic <ArrowRight />
          </Link>
        </Button>
      </div>
    </>
  );
}
