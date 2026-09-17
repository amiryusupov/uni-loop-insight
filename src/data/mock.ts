export const users = {
  student: {
    name: "Aziz Karimov",
    initials: "AK",
    role: "Student",
    course: "Programming Fundamentals",
  },
  professor: {
    name: "Dr. Sarah Williams",
    initials: "SW",
    role: "Professor",
    course: "Computer Science",
  },
};

export type Outcome = { id: string; label: string; mastery: number; previous?: number };

export const outcomes: Outcome[] = [
  { id: "explain", label: "Explain recursive functions", mastery: 82, previous: 74 },
  { id: "base", label: "Identify the base case", mastery: 46, previous: 41 },
  { id: "stack", label: "Trace the call stack", mastery: 38, previous: 30 },
  { id: "implement", label: "Implement recursion", mastery: 71, previous: 62 },
];

export const updatedOutcomes: Outcome[] = [
  { id: "explain", label: "Explain recursive functions", mastery: 85, previous: 82 },
  { id: "base", label: "Identify the base case", mastery: 58, previous: 46 },
  { id: "stack", label: "Trace the call stack", mastery: 44, previous: 38 },
  { id: "implement", label: "Implement recursion", mastery: 74, previous: 71 },
];

export const masteryOverTime = [
  { week: "W1", mastery: 41 },
  { week: "W2", mastery: 48 },
  { week: "W3", mastery: 52 },
  { week: "W4", mastery: 58 },
  { week: "W5", mastery: 63 },
  { week: "W6", mastery: 67 },
  { week: "W7", mastery: 72 },
];

export const needsAttention = [
  { label: "Base Cases", mastery: 46 },
  { label: "Call Stack", mastery: 38 },
  { label: "Implementing Recursion", mastery: 71 },
];

export const studentCourses = [
  { name: "Programming Fundamentals", mastery: 72, code: "CS 101" },
  { name: "Discrete Mathematics", mastery: 81, code: "MATH 120" },
  { name: "Computer Architecture", mastery: 64, code: "CS 140" },
  { name: "Academic English", mastery: 88, code: "ENG 102" },
];

export type Question = {
  id: number;
  prompt: string;
  code?: string;
  options: string[];
  correct: number;
  outcome: string;
};

export const questions: Question[] = [
  {
    id: 1,
    prompt: "What is the primary purpose of a base case in a recursive function?",
    options: [
      "To make the function run faster",
      "To stop the recursion from continuing indefinitely",
      "To call the function again with a smaller input",
      "To allocate memory for the call stack",
    ],
    correct: 1,
    outcome: "Identify the base case",
  },
  {
    id: 2,
    prompt: "Which line contains the base case in this function?",
    code: `def factorial(n):
    if n == 0:          # line 2
        return 1        # line 3
    return n * factorial(n - 1)  # line 4`,
    options: ["Line 1", "Line 2", "Line 3", "Line 4"],
    correct: 1,
    outcome: "Identify the base case",
  },
  {
    id: 3,
    prompt: "How many frames are on the call stack at the deepest point when calling factorial(4)?",
    options: ["1", "3", "4", "5"],
    correct: 3,
    outcome: "Trace the call stack",
  },
  {
    id: 4,
    prompt: "What happens if a recursive function is missing its base case?",
    options: [
      "It returns None immediately",
      "It raises a RecursionError (stack overflow)",
      "It runs exactly once",
      "The compiler adds a default base case",
    ],
    correct: 1,
    outcome: "Identify the base case",
  },
  {
    id: 5,
    prompt: "In which order are the return values computed when factorial(3) unwinds?",
    options: [
      "factorial(3) → factorial(2) → factorial(1) → factorial(0)",
      "factorial(0) → factorial(1) → factorial(2) → factorial(3)",
      "All values are computed simultaneously",
      "Only factorial(3) is computed",
    ],
    correct: 1,
    outcome: "Trace the call stack",
  },
];

export const learningPlan = [
  {
    id: 1,
    type: "Review",
    title: "Understand Base Cases",
    minutes: 15,
    description: "Short visual walkthrough of what stops a recursive call and why it matters.",
  },
  {
    id: 2,
    type: "Practice",
    title: "Base Case Exercises",
    minutes: 20,
    description: "Six guided problems where you identify and write the terminating condition.",
  },
  {
    id: 3,
    type: "Mini Project",
    title: "Recursive Factorial Debugger",
    minutes: 30,
    description: "Step through a broken factorial() and fix the base case using a call-stack tracer.",
  },
  {
    id: 4,
    type: "Follow-up",
    title: "3-question diagnostic",
    minutes: 5,
    description: "Quick check to confirm your updated mastery of base cases.",
  },
];

export const professorStats = {
  students: 10,
  averageMastery: 68,
  needingSupport: 4,
  improvement: 9,
};

export const cohortOutcomes = [
  { label: "Explain recursive functions", short: "Explain", mastery: 82 },
  { label: "Identify base case", short: "Base case", mastery: 46 },
  { label: "Trace call stack", short: "Call stack", mastery: 38 },
  { label: "Implement recursion", short: "Implement", mastery: 71 },
];

export const misconceptions = [
  { label: "Incorrect understanding of base cases", students: 6 },
  { label: "Difficulty tracing recursive calls", students: 5 },
  { label: "Confusion between recursive step and termination", students: 3 },
];

export const studentGroups = [
  { label: "Needs intervention", count: 4, tone: "danger" as const, range: "< 60%" },
  { label: "Developing", count: 3, tone: "warning" as const, range: "60–79%" },
  { label: "Strong", count: 3, tone: "success" as const, range: "≥ 80%" },
];

export const cohortStudents = [
  { name: "Aziz Karimov", mastery: 72, trend: 5 },
  { name: "Malika Tosheva", mastery: 91, trend: 3 },
  { name: "Jasur Rakhimov", mastery: 54, trend: 8 },
  { name: "Nilufar Saidova", mastery: 47, trend: 2 },
  { name: "Bekzod Umarov", mastery: 83, trend: 6 },
  { name: "Dilnoza Yuldasheva", mastery: 66, trend: 11 },
  { name: "Sardor Ismoilov", mastery: 39, trend: -2 },
  { name: "Kamola Nazarova", mastery: 88, trend: 4 },
  { name: "Timur Abdullaev", mastery: 58, trend: 7 },
  { name: "Zarina Mirzaeva", mastery: 78, trend: 9 },
];

export const cohortTrend = [
  { week: "W1", mastery: 52, baseCase: 31 },
  { week: "W2", mastery: 55, baseCase: 34 },
  { week: "W3", mastery: 59, baseCase: 38 },
  { week: "W4", mastery: 61, baseCase: 40 },
  { week: "W5", mastery: 64, baseCase: 43 },
  { week: "W6", mastery: 68, baseCase: 46 },
];

export const interventionSteps = [
  { title: "Demonstrate factorial(4)", detail: "Live-code it and narrate each recursive call aloud." },
  { title: "Draw the call stack", detail: "Stack four frames on the board; pop them as values return." },
  {
    title: "Ask students to identify the stopping condition",
    detail: "Cold-call: 'Which frame stops the recursion, and why?'",
  },
  { title: "Give two short exercises", detail: "sum_list() and countdown() — students mark the base case." },
  { title: "Run a 3-question follow-up diagnostic", detail: "Auto-generated by UniLoop; results feed back into mastery." },
];

export const targetStudents = cohortStudents.filter((s) => s.mastery < 60).slice(0, 6);

export const growthPlan = {
  teaching: [
    { title: "Adopt visual call-stack tracing in all recursion lectures", progress: 60, due: "Day 30" },
    { title: "Introduce weekly 3-question diagnostics", progress: 40, due: "Day 45" },
    { title: "Raise cohort base-case mastery from 46% to 70%", progress: 25, due: "Day 90" },
  ],
  research: [
    { title: "Submit paper: 'Mastery-based feedback loops in CS1'", progress: 70, due: "Day 40" },
    { title: "Pilot UniLoop AI across two additional sections", progress: 15, due: "Day 60" },
    { title: "Present findings at the Faculty Teaching Symposium", progress: 5, due: "Day 90" },
  ],
};
