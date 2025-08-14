export default function Section({ id, bg = "bg-white", children }) {
  return (
    <section id={id} className={`${bg}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {children}
      </div>
    </section>
  );
}