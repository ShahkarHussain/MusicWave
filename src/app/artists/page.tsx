
const artists = [
  {
    name: "Luna Rose",
    genre: "Pop & R&B",
    description: "Emotional vocals and modern pop sounds.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "The Midnight",
    genre: "Electronic",
    description: "Atmospheric sounds and electrifying beats.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jay Rivers",
    genre: "Hip-Hop & Soul",
    description: "Powerful lyrics with a soulful rhythm.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nova Sky",
    genre: "Indie Pop",
    description: "Fresh melodies for a new generation.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Alex Stone",
    genre: "Rock",
    description: "Bold guitar riffs and unforgettable performances.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mia Blue",
    genre: "Jazz & Soul",
    description: "Smooth vocals and timeless musical style.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-16 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            The SoundWave Family
          </p>

          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Meet Our <span className="text-fuchsia-400">Artists</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Discover the talented voices, creative minds, and unique sounds
            shaping the future of music with SoundWave.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-fuchsia-500/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-wider backdrop-blur-md">
                  {artist.genre}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold">{artist.name}</h2>
                  <span className="text-2xl text-fuchsia-400">♫</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {artist.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-sm font-semibold text-fuchsia-300">
                    SoundWave Artist
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20 rounded-3xl border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-950/40 to-purple-950/30 px-6 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
            Have a unique sound?
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your music deserves to be heard.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            We are always looking for creative artists ready to share their
            music with the world.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-fuchsia-500 px-7 py-3 font-semibold text-white transition hover:bg-fuchsia-400"
          >
            Join SoundWave ↗
          </a>
        </section>
      </section>
    </main>
  );
}
