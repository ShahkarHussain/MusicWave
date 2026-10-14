
const releases = [
  {
    title: "Midnight Dreams",
    artist: "Luna Rose",
    genre: "Pop",
    gradient: "from-fuchsia-600 to-purple-950",
    number: "01",
  },
  {
    title: "Electric Heart",
    artist: "The Midnight",
    genre: "Electronic",
    gradient: "from-cyan-500 to-blue-950",
    number: "02",
  },
  {
    title: "Golden Hour",
    artist: "Jay Rivers",
    genre: "Hip-Hop",
    gradient: "from-orange-500 to-red-950",
    number: "03",
  },
  {
    title: "Lost in Motion",
    artist: "Nova Sky",
    genre: "Indie Pop",
    gradient: "from-pink-500 to-rose-950",
    number: "04",
  },
  {
    title: "Blue Notes",
    artist: "Mia Blue",
    genre: "Jazz",
    gradient: "from-indigo-500 to-slate-950",
    number: "05",
  },
  {
    title: "Wild Sound",
    artist: "Alex Stone",
    genre: "Rock",
    gradient: "from-amber-500 to-stone-950",
    number: "06",
  },
];

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-16 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-950/60 via-[#15101f] to-cyan-950/40 px-6 py-16 text-center sm:px-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            The Sound of SoundWave
          </p>

          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            Feel the <span className="text-fuchsia-400">Music.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
            Explore our latest releases, discover fresh artists, and find
            the soundtrack for every moment.
          </p>

          <a
            href="#releases"
            className="mt-8 inline-block rounded-full bg-fuchsia-500 px-7 py-3 font-semibold hover:bg-fuchsia-400"
          >
            Explore Releases ↓
          </a>
        </div>

        <div id="releases" className="mb-10 mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            Fresh Drops
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Latest Releases
          </h2>
          <p className="mt-3 text-gray-400">
            New sounds and original music from our artists.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release) => (
            <article
              key={release.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-fuchsia-500/50"
            >
              <div
                className={`flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br ${release.gradient}`}
              >
                <div className="text-center">
                  <span className="text-7xl font-black text-white/90">
                    {release.number}
                  </span>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/70">
                    SoundWave
                  </p>
                  <span className="mt-4 inline-block text-4xl">♫</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{release.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {release.artist}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-white/5 px-3 py-1 text-xs text-fuchsia-300">
                    {release.genre}
                  </span>
                </div>

                <a
                  href="/contact"
                  aria-label={`Ask about ${release.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg transition hover:border-fuchsia-400 hover:bg-fuchsia-500"
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            Make Something New
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your next favorite sound starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            Are you an artist with music to share? Connect with our team and
            explore opportunities to work together.
          </p>

          <a
            href="/join-us"
            className="mt-7 inline-block rounded-full bg-fuchsia-500 px-7 py-3 font-semibold hover:bg-fuchsia-400"
          >
            Join SoundWave ↗
          </a>
        </section>
      </section>
    </main>
  );
}
