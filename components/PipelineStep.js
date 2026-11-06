import Card from "./Card";
import Badge from "./Badge";

// One numbered step of a pipeline run.
// Some steps have extra parts: `agents`, `dropped`, `result` or `linkText`.

export default function PipelineStep({ number, step, isLast }) {
  const isWaiting = step.status === "waiting";

  return (
    <li className="flex gap-4">
      {/* Number circle with a line going down to the next step */}
      <div className="flex flex-col items-center">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            isWaiting
              ? "bg-waiting-bg text-waiting-text"
              : "bg-success-bg text-success-text"
          }`}
        >
          {number}
        </span>
        {!isLast && <span className="my-1 w-0.5 flex-1 bg-line" />}
      </div>

      <Card className="mb-4 flex-1 py-5">
        {/* Title on the left, time and status on the right */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="text-base font-semibold">{step.title}</h2>
          <div className="flex items-center gap-3 text-sm text-muted">
            {step.seconds !== undefined && <span>{step.seconds} seconds</span>}
            {step.result && <Badge variant="success">{step.result}</Badge>}
            {!step.result && (
              <Badge variant={isWaiting ? "waiting" : "success"}>
                {isWaiting ? "Waiting" : "Done"}
              </Badge>
            )}
          </div>
        </div>

        {/* The two agents, side by side */}
        {step.agents && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {step.agents.map((agent) => (
              <div key={agent.name} className="rounded-lg bg-page p-4">
                <p className="text-sm font-semibold">{agent.name}</p>
                <p className="mt-1 text-sm text-muted">{agent.text}</p>
              </div>
            ))}
          </div>
        )}

        <p className="mt-3 text-sm text-muted">{step.text}</p>

        {/* Findings that were thrown away */}
        {step.dropped && (
          <div className="mt-4 space-y-3">
            {step.dropped.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 rounded-lg bg-page p-4"
              >
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.reason}</p>
                </div>
                <Badge variant="dropped">Dropped</Badge>
              </div>
            ))}
          </div>
        )}

        {step.linkText && (
          <button
            type="button"
            className="mt-3 cursor-pointer text-sm font-semibold text-brand hover:underline"
          >
            {step.linkText}
          </button>
        )}
      </Card>
    </li>
  );
}
