import Card from "./Card";

// The "What reached a reviewer this week" card with the four bars.
// Each bar's width is its value divided by the biggest value.

export default function FunnelCard({ rows }) {
  const biggest = Math.max(...rows.map((row) => row.value));

  return (
    <Card className="mb-10">
      <h2 className="text-lg font-bold">What reached a reviewer this week</h2>
      <p className="mt-1 text-sm text-muted">
        VeriPR removes findings it cannot back with code before anyone has to
        read them.
      </p>

      <div className="mt-6 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center gap-4">
            <span
              className={`w-40 shrink-0 text-sm sm:w-56 ${
                row.bold ? "font-bold" : ""
              }`}
            >
              {row.label}
            </span>

            {/* gray track with a colored bar inside */}
            <div className="h-7 flex-1 rounded-md bg-page">
              <div
                className={`h-full rounded-md ${row.color}`}
                style={{ width: `${(row.value / biggest) * 100}%` }}
              />
            </div>

            <span className="w-8 text-right text-lg font-bold">{row.value}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">
        Of the 11 sent to a reviewer, 6 are waiting and 5 are decided. The rest
        were low risk and well backed, so VeriPR posted them to the pull request
        on its own.
      </p>
    </Card>
  );
}
