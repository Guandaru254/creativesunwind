export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 tracking-tight">
          CREATIVES<br />UNWIND
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          A creative gathering in the heart of Nairobi — bringing together
          musicians, artists, and thinkers to create, connect, and recharge
          in nature.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/applications"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Apply to Perform
          </a>

          <a
            href="/about"
            className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
