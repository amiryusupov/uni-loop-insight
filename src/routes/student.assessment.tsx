import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Sparkles, Brain, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiCard, AiDisclaimer, Card, CardTitle, MasteryBar, PageHeader, Pill } from "@/components/ui-bits";
import { outcomes, questions, updatedOutcomes } from "@/data/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/student/assessment")({
  head: () => ({
    meta: [
      { title: "Diagnostic: Recursive Functions — UniLoop AI" },
      { name: "description", content: "A 5-question diagnostic on recursive functions that updates your AI-estimated mastery." },
      { property: "og:title", content: "Assessment — UniLoop AI" },
      { property: "og:description", content: "Recursive Functions diagnostic." },
    ],
  }),
  component: AssessmentPage,
});

type Phase = "quiz" | "analyzing" | "result";

const analysisSteps = [
  "Scoring responses",
  "Mapping answers to learning outcomes",
  "Detecting misconception patterns",
  "Updating mastery estimates",
];

function AssessmentPage() {
  const [phase, setPhase] = useState<Phase>("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const q = questions[current];
  const answered = answers.filter((a) => a !== null).length;
  const isLast = current === questions.length - 1;

  if (phase === "analyzing") return <Analyzing onDone={() => setPhase("result")} />;
  if (phase === "result") return <Result answers={answers} />;

  return (
    <>
      <PageHeader
        eyebrow="Diagnostic · Programming Fundamentals"
        title="Recursive Functions"
        description="5 questions · about 6 minutes. Your answers update your AI-estimated mastery — they are not graded."
      />

      <div className="mx-auto max-w-3xl">
        <div className="mb-6 animate-fade-up">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Question {current + 1} of {questions.length}
            </span>
            <span>{answered} answered</span>
          </div>
          <div className="flex gap-1.5">
            {questions.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors duration-300",
                  i === current ? "bg-primary" : answers[i] !== null ? "bg-primary/40" : "bg-secondary",
                )}
              />
            ))}
          </div>
        </div>

        <Card key={q.id} className="p-6 sm:p-8 animate-scale-in">
          <Pill tone="primary" className="mb-4">
            {q.outcome}
          </Pill>
          <h2 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">{q.prompt}</h2>
          {q.code && (
            <pre className="mt-4 overflow-x-auto rounded-lg border bg-secondary/60 p-4 font-mono text-[13px] leading-relaxed">
              {q.code}
            </pre>
          )}

          <div className="mt-6 space-y-2.5">
            {q.options.map((opt, i) => {
              const selected = answers[current] === i;
              return (
                <button
                  key={i}
                  onClick={() => {
                    const next = [...answers];
                    next[current] = i;
                    setAnswers(next);
                  }}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 rounded-lg border p-4 text-left text-sm transition-all duration-200",
                    selected
                      ? "border-primary bg-primary-soft shadow-sm"
                      : "border-border bg-card hover:border-primary/40 hover:bg-accent/50",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold transition-colors",
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground",
                    )}
                  >
                    {selected ? <Check className="size-3.5" /> : String.fromCharCode(65 + i)}
                  </span>
                  <span className={cn(selected && "font-medium")}>{opt}</span>
                </button>
              );
            })}
          </div>
        </Card>

        <div className="mt-5 flex items-center justify-between">
          <Button variant="outline" onClick={() => setCurrent((c) => c - 1)} disabled={current === 0}>
            <ArrowLeft /> Previous
          </Button>
          {isLast ? (
            <Button variant="ai" size="lg" disabled={answered < questions.length} onClick={() => setPhase("analyzing")}>
              <Sparkles /> Submit Assessment
            </Button>
          ) : (
            <Button onClick={() => setCurrent((c) => c + 1)} disabled={answers[current] === null}>
              Next <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

function Analyzing({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timers = analysisSteps.map((_, i) => setTimeout(() => setStep(i + 1), (i + 1) * 800));
    const done = setTimeout(onDone, analysisSteps.length * 800 + 700);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center animate-fade-in">
      <div className="w-full max-w-md text-center">
        <div className="relative mx-auto mb-8 flex size-24 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-orbit" />
          <span className="flex size-16 items-center justify-center rounded-full bg-gradient-ai shadow-glow">
            <Brain className="size-8 text-primary-foreground" />
          </span>
        </div>
        <h2 className="text-xl font-semibold tracking-tight">AI is analyzing your answers</h2>
        <p className="mt-1 text-sm text-muted-foreground">This usually takes a few seconds.</p>

        <div className="mt-8 space-y-2 text-left">
          {analysisSteps.map((s, i) => {
            const done = step > i;
            const active = step === i;
            return (
              <div
                key={s}
                className={cn(
                  "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-all duration-300",
                  done ? "border-success/30 bg-success-soft/50" : active ? "border-primary/30 bg-card shadow-card" : "border-transparent opacity-50",
                )}
              >
                {done ? (
                  <CheckCircle2 className="size-4 text-success" />
                ) : (
                  <span className={cn("size-4 rounded-full border-2", active ? "border-primary border-t-transparent animate-orbit" : "border-border")} />
                )}
                <span className={cn(done && "text-foreground", active && "font-medium")}>{s}</span>
                {active && <span className="ml-auto h-1.5 w-16 rounded-full shimmer-bar" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Result({ answers }: { answers: (number | null)[] }) {
  const correct = answers.filter((a, i) => a === questions[i].correct).length;
  const before = Math.round(outcomes.reduce((s, o) => s + o.mastery, 0) / outcomes.length);
  const after = Math.round(updatedOutcomes.reduce((s, o) => s + o.mastery, 0) / updatedOutcomes.length);

  return (
    <>
      <PageHeader
        eyebrow="Diagnostic complete"
        title="Your mastery has been updated"
        description={`You answered ${correct} of ${questions.length} correctly. UniLoop AI has re-estimated your mastery for each outcome.`}
        action={<AiDisclaimer />}
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="flex flex-col items-center justify-center p-8 text-center lg:col-span-2 animate-scale-in">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Course mastery</p>
          <div className="mt-4 flex items-end justify-center gap-3">
            <span className="text-2xl text-muted-foreground line-through decoration-muted-foreground/40">{before}%</span>
            <ArrowUpRight className="mb-2 size-5 text-success" />
            <span className="text-6xl font-semibold tracking-tight text-gradient-ai">{after}%</span>
          </div>
          <Pill tone="success" className="mt-4">
            +{after - before} points
          </Pill>
        </Card>

        <Card className="lg:col-span-3 animate-fade-up" style={{ animationDelay: "120ms" }}>
          <CardTitle className="mb-5">Updated learning outcomes</CardTitle>
          <div className="space-y-5">
            {updatedOutcomes.map((o, i) => (
              <MasteryBar key={o.id} label={o.label} value={o.mastery} previous={o.previous} delay={200 + i * 80} />
            ))}
          </div>
        </Card>
      </div>

      <AiCard className="mt-6" title="AI Analysis" delay={400}>
        <p className="text-lg font-medium leading-snug tracking-tight">
          Strong progress on base cases — you correctly located the terminating condition in code. Tracing the
          call stack is still your weakest outcome, so your plan now includes a visual stack tracer.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild variant="ai" size="lg">
            <Link to="/student/plan">
              Open your updated learning plan <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/student/mastery">View mastery</Link>
          </Button>
        </div>
      </AiCard>
    </>
  );
}
