export default function GalleryPage() {
  return (
    <section className="min-h-screen px-4 md:px-6 py-24 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">
        Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-white/5 rounded-lg"
          />
        ))}
      </div>

      <p className="mt-10 text-gray-400 max-w-xl">
        Moments from past editions, community gatherings, and creative
        experiences under the Creatives Unwind platform.
      </p>
    </section>
  );
}
