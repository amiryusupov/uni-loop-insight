# Loop Learning AI

Build a modern, premium EdTech SaaS web app called UniLoop AI.

Tagline: “Close the loop between teaching and mastery.”

UniLoop AI is an AI-powered platform for universities that connects student assessment results with personalized learning and professor teaching insights.

The core flow is:

Assessment → AI analyzes mastery → Student gets personalized plan → Professor sees class weaknesses → AI recommends teaching intervention

Design

Make it look like a polished modern SaaS product similar to Linear/Notion/Vercel-style dashboards, but designed for education.

Light theme

Clean white/gray background

Dark text

Subtle purple/blue AI accents

Rounded cards

Soft shadows

Modern typography

Lucide icons

Smooth subtle animations

Professional enough for a university

Avoid a generic ChatGPT look

Login

Create a simple demo login with two options:

Student — Aziz Karimov
Programming Fundamentals

Professor — Dr. Sarah Williams
Computer Science

Clicking each takes the user to their respective dashboard. No real authentication needed.

Student Dashboard

Show:

Overall mastery: 72%

Courses: 4

Learning streak: 6 days

Next task: Understand Base Cases

Add a “Needs Attention” section:

Base Cases — 46%

Call Stack — 38%

Implementing Recursion — 71%

Add an AI recommendation card:

“You understand recursion generally, but your answers show difficulty with termination conditions.”

Button: Start Recommended Task

Student Mastery Page

Course: Programming Fundamentals

Learning outcomes:

Explain recursive functions — 82%

Identify the base case — 46%

Trace the call stack — 38%

Implement recursion — 71%

Show these using beautiful progress bars/cards.

Add a mastery-over-time chart.

Clearly label:

AI-estimated mastery · Not an official grade

Student Assessment

Create a 5-question diagnostic about Recursive Functions.

Show one question at a time with:

progress indicator

multiple-choice answers

Previous / Next buttons

Submit Assessment

After submission, show an AI analysis loading animation and then the updated mastery result.

Student Learning Plan

Create a beautiful vertical timeline:

Review: Understand Base Cases — 15 min

Practice: Base Case Exercises — 20 min

Mini Project: Recursive Factorial Debugger — 30 min

Follow-up: 3-question diagnostic — 5 min

Show completion progress.

Professor Dashboard

Show:

Students: 10

Average mastery: 68%

Students needing support: 4

Improvement: +9%

Course card:

Programming Fundamentals

Weakest outcome:

Trace the Call Stack — 38%

Add a prominent AI Insight:

“61% of students are struggling to identify the correct base case.”

Recommendation:

“Reteach the concept using a visual call-stack trace followed by a short diagnostic.”

Button: View Intervention

Professor Class Insights

Create an analytics-heavy but clean dashboard.

Show:

Cohort Mastery

Explain recursive functions — 82%

Identify base case — 46%

Trace call stack — 38%

Implement recursion — 71%

Use charts and progress visualizations.

Common Misconceptions

Incorrect understanding of base cases — 6 students

Difficulty tracing recursive calls — 5 students

Confusion between recursive step and termination — 3 students

Student Groups

Needs intervention — 4

Developing — 3

Strong — 3

Teaching Intervention

Create an AI-generated intervention page.

Show:

Problem detected:
Students struggle to identify the base case.

Recommended intervention:
Visual Call-Stack Reteaching

Include:

Demonstrate factorial(4)

Draw the call stack

Ask students to identify the stopping condition

Give two short exercises

Run a 3-question follow-up diagnostic

Target group:

6 students below 60% mastery

Button:

Approve Intervention

After clicking, show:

✓ Intervention scheduled
✓ Follow-up diagnostic created

Faculty Growth

Add a secondary page for professors showing a simple 90-Day Growth Plan with teaching and research goals.

Important

Use realistic mock data throughout the app. No backend or real authentication is required yet.

Make navigation between all pages fully functional.

Prioritize the polished UI and the demo flow:

Student assessment → mastery update → learning plan → Professor class insight → AI teaching intervention.

The final product should immediately communicate:

“UniLoop AI turns assessment data into better learning and better teaching.”

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://uni-loop-insight.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b0f8b73e-e53b-4965-90a2-e2ba34d3e3dc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
