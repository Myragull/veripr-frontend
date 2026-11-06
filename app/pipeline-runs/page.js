import PageHeader from "@/components/PageHeader";
import PipelineStep from "@/components/PipelineStep";
import { pipelineRun } from "@/lib/mock-data";

// The Pipeline runs page, shown at "/pipeline-runs"
export default function PipelineRunsPage() {
  const { pullRequest, totalSeconds, findingsIn, findingsToReview, steps } =
    pipelineRun;

  return (
    <>
      <PageHeader
        title={`How VeriPR reviewed pull request #${pullRequest}`}
        subtitle={`The run finished in ${totalSeconds.toFixed(1)} seconds. ${findingsIn} findings came in and ${findingsToReview} reached the review queue.`}
      />

      <ol>
        {steps.map((step, index) => (
          <PipelineStep
            key={step.title}
            number={index + 1}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </ol>
    </>
  );
}
