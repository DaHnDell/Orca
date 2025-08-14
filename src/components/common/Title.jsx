export function Title({ overline, title, subtitle, align="center" }) {
  return (
    <header className={`mb-10 sm:mb-12 ${align === "center" ? "text-center" : ""}`}>
      {overline && <p className="text-sm tracking-[.2em] text-brand mb-2">{overline}</p>}
      <h2 className="text-2xl sm:text-3xl font-bold text-ink">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </header>
  );
}