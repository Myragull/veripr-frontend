// A small colored label, like "1 critical" or "Done".
// Pick a color with the `variant` prop.

const variants = {
  critical: "bg-severity-critical-bg text-severity-critical-text",
  high: "bg-severity-high-bg text-severity-high-text",
  medium: "bg-severity-medium-bg text-severity-medium-text",
  success: "bg-success-bg text-success-text",
  waiting: "bg-waiting-bg text-waiting-text",
  dropped: "bg-dropped-bg text-dropped-text",
};

export default function Badge({ variant = "dropped", children }) {
  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
