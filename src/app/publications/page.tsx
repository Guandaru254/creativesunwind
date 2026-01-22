export default function PublicationsPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
        Publications
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl">
        Essays, reflections, and cultural notes from the Creatives Unwind
        community — documenting thought, process, and creative life.
      </p>

      <div className="mt-16 space-y-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <article
            key={i}
            className="border-b border-white/10 pb-8"
          >
            <h2 className="text-xl font-semibold text-white">
              Coming Soon
            </h2>
            <p className="mt-2 text-gray-400">
              Long-form writing, reflections, and guest contributions.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
