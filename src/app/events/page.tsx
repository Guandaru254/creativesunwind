export default function EventsPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
        Events
      </h1>

      <div className="mt-12 space-y-12">
        {/* Upcoming Event */}
        <div className="border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            Creatives Unwind — Nairobi
          </h2>
          <p className="mt-2 text-gray-400">
            Saturday, 7th February 2026 · John Michuki Memorial Park
          </p>
          <p className="mt-4 text-gray-300">
            A creative gathering bringing together musicians, poets,
            instrumentalists, and creatives to connect through music, culture,
            and nature.
          </p>
        </div>

        {/* Past Event */}
        <div className="border border-white/10 rounded-xl p-8 opacity-80">
          <h2 className="text-xl font-semibold text-white">
            Hike & Art Bloom (Edition I)
          </h2>
          <p className="mt-2 text-gray-400">
            Karura Forest · October 2025
          </p>
          <p className="mt-4 text-gray-400">
            The inaugural edition focused on creative wellness through hiking,
            poetry, music, and community engagement in nature.
          </p>
        </div>
      </div>
    </section>
  );
}
