// The white rounded box used all over the app.
// Pass extra Tailwind classes with `className` if you need them.

export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl bg-card p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
