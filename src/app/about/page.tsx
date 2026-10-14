
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-20 text-white">
      <section className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            About SoundWave
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl">
            Music connects us
            <span className="block text-fuchsia-400">all.</span>
          </h1>

          <p className="mt-6 leading-8 text-gray-400">
            SoundWave is an independent music company dedicated to discovering
            extraordinary talent, supporting creative artists, and sharing
            unforgettable music with the world.
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            From artist development to music production and distribution,
            we help musicians turn their creative ideas into lasting careers.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full bg-fuchsia-500 px-7 py-3 font-semibold hover:bg-fuchsia-400"
          >
            Get in Touch ↗
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85"
            alt="Live music concert"
            className="h-[450px] w-full rounded-3xl object-cover"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-950/60 to-transparent" />
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-6 sm:grid-cols-3">
        {[
          { number: "25+", label: "Talented Artists" },
          { number: "120+", label: "Music Releases" },
          { number: "12M+", label: "Streams Worldwide" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
          >
            <h2 className="text-4xl font-black text-fuchsia-400">
              {item.number}
            </h2>
            <p className="mt-3 text-gray-400">{item.label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

