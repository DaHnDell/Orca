export function Card({ children, className="" }) {
  return (
    <div className={`rounded-xl bg-white shadow-card ring-1 ring-black/5 ${className}`}>
      {children}
    </div>
  );
}