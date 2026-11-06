// The big title and the small gray line under it at the top of each page.

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </header>
  );
}
