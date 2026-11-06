// Fake data for the demo. Later, this is what the backend API will send us.

// Numbers for the "What reached a reviewer this week" card.
// Each step has fewer findings than the one before it.
export const weeklyFunnel = [
  { label: "Agents reported", value: 63, color: "bg-brand/50" },
  { label: "Left after removing duplicates", value: 49, color: "bg-brand/70" },
  { label: "Backed by code", value: 38, color: "bg-brand/90" },
  { label: "Sent to a reviewer", value: 11, color: "bg-brand", bold: true },
];

// Pull requests that are waiting for a person to decide.
// `counts` is how many findings of each severity are waiting.
export const waitingPullRequests = [
  {
    id: 14,
    title: "Add password reset endpoint",
    repo: "Myragull/veripr-github-demo",
    opened: "12 minutes ago",
    counts: { critical: 1, high: 1, medium: 1 },
  },
  {
    id: 13,
    title: "Refactor webhook signature check",
    repo: "Myragull/veripr-github-demo",
    opened: "2 hours ago",
    counts: { high: 1 },
  },
  {
    id: 12,
    title: "Cache repository embeddings",
    repo: "Myragull/veripr-github-demo",
    opened: "yesterday",
    counts: { medium: 2 },
  },
];

// One pipeline run: the steps VeriPR went through for pull request #14.
export const pipelineRun = {
  pullRequest: 14,
  totalSeconds: 20.0,
  findingsIn: 9,
  findingsToReview: 3,
  steps: [
    {
      title: "GitHub sent a webhook",
      seconds: 0.1,
      status: "done",
      text: "A pull_request event with the action opened, for #14. The signature matched, so VeriPR accepted it.",
    },
    {
      title: "Fetched the pull request",
      seconds: 0.9,
      status: "done",
      text: "4 files changed, 112 lines added and 9 removed, read through the GitHub API.",
    },
    {
      title: "Retrieved related code",
      seconds: 1.4,
      status: "done",
      text: "14 code chunks from 6 files, found by meaning in the pgvector index. 3 of those files were not changed in this pull request, which is how the agents see code outside the diff.",
    },
    {
      title: "Two agents reviewed it at the same time",
      seconds: 14.2,
      status: "done",
      agents: [
        { name: "Security agent", text: "5 findings in 14.2 seconds" },
        { name: "Testing agent", text: "4 findings in 11.8 seconds" },
      ],
      text: "Running them side by side took 14.2 seconds. One after the other would have taken 26.0.",
    },
    {
      title: "Combined the findings",
      seconds: 0.2,
      status: "done",
      result: "9 in, 7 out",
      text: "2 findings described the same problem as another finding, so VeriPR merged them.",
    },
    {
      title: "Checked each finding against the code",
      seconds: 3.1,
      status: "done",
      result: "7 in, 5 out",
      text: "VeriPR opens the file and line each finding points to and checks that the quoted code is really there. 2 findings failed and were dropped.",
      dropped: [
        {
          title: "SQL injection in the token lookup",
          reason: "Line 52 does not exist in the changed files.",
        },
        {
          title: "No CSRF protection on /reset",
          reason: "The quoted code does not appear in auth/reset.py.",
        },
      ],
    },
    {
      title: "Decided who sees each finding",
      seconds: 0.1,
      status: "done",
      result: "2 posted, 3 to review",
      text: "A finding is posted on its own only when its risk is low and confidence is 80% or higher. The other 3 findings go to a reviewer.",
    },
    {
      title: "Waiting for a reviewer",
      status: "waiting",
      text: "3 findings are in the review queue. Each decision you make is recorded with the finding.",
      linkText: "Open the review",
    },
  ],
};
