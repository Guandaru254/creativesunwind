export default function PartnersPage() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
        Our Partners
      </h1>

      <p className="mt-6 text-gray-300 max-w-2xl">
        Creatives Unwind is supported by organizations that believe in culture,
        community, and creative expression.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "Soma Campaign",
          "GrandNation Events Ltd",
          "Tazamo Africa",
        ].map((partner) => (
          <div
            key={partner}
            className="border border-white/10 rounded-xl p-8 text-center hover:border-yellow-400 transition"
          >
            <h2 className="text-xl font-semibold text-white">
              {partner}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
