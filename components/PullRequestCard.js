import Card from "./Card";
import Badge from "./Badge";

// One row in "Waiting for your decision".
// The review page does not exist yet, so "Open review" does not go anywhere.

const severityOrder = ["critical", "high", "medium"];

export default function PullRequestCard({ pr }) {
  return (
    <Card className="flex flex-wrap items-center justify-between gap-4 py-5">
      <div>
        <h3 className="text-lg font-semibold">{pr.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {pr.repo}, pull request #{pr.id}, opened {pr.opened}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {severityOrder
            .filter((level) => pr.counts[level])
            .map((level) => (
              <Badge key={level} variant={level}>
                {pr.counts[level]} {level}
              </Badge>
            ))}
        </div>
        <button
          type="button"
          className="cursor-pointer text-sm font-semibold text-brand hover:underline"
        >
          Open review
        </button>
      </div>
    </Card>
  );
}
