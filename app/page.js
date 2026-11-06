import PageHeader from "@/components/PageHeader";
import FunnelCard from "@/components/FunnelCard";
import PullRequestCard from "@/components/PullRequestCard";
import { weeklyFunnel, waitingPullRequests } from "@/lib/mock-data";

// The Review queue page, shown at "/"
export default function ReviewQueuePage() {
  return (
    <>
      <PageHeader
        title="Review queue"
        subtitle="6 findings in 3 pull requests need a person to decide."
      />

      <FunnelCard rows={weeklyFunnel} />

      <h2 className="mb-4 text-lg font-bold">Waiting for your decision</h2>
      <div className="space-y-4">
        {waitingPullRequests.map((pr) => (
          <PullRequestCard key={pr.id} pr={pr} />
        ))}
      </div>

      <p className="mt-4 max-w-md text-sm text-muted">
        Findings that are low risk and well backed by code go to the pull
        request without waiting here.
      </p>
    </>
  );
}
