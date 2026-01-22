export default function ApplicationsPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
        Performer Applications
      </h1>

      <p className="text-gray-300 mb-10">
        We are inviting rappers, singers, poets, and instrumentalists to be part
        of Creatives Unwind. This is a curated, community-focused experience.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name / Stage Name"
          className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400"
        />

        <select className="w-full bg-[#0f1f17] border border-white/20 px-4 py-3 rounded-lg">
          <option>Rapper</option>
          <option>Singer</option>
          <option>Poet</option>
          <option>Instrumentalist</option>
        </select>

        <input
          type="text"
          placeholder="Links (Spotify, YouTube, SoundCloud, Instagram)"
          className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400"
        />

        <button
          type="submit"
          className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}
