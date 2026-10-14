
const opportunities = [
  {
    icon: "♫",
    title: "Join as an Artist",
    description:
      "Share your music, develop your sound, and explore opportunities to grow your audience.",
    type: "Singers & Musicians",
  },
  {
    icon: "🎧",
    title: "Join as a Producer",
    description:
      "Collaborate with artists, create original sounds, and bring exciting musical projects to life.",
    type: "Music Producers",
  },
  {
    icon: "✦",
    title: "Join Our Creative Team",
    description:
      "Help build artist brands, promote releases, and create memorable music experiences.",
    type: "Creative Professionals",
  },
];

export default function JoinUsPage() {
  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-16 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-950/70 via-[#15101f] to-cyan-950/40 px-7 py-16 text-center sm:px-14 sm:py-24">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
              Become Part of SoundWave
            </p>

            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
              Your talent.
              <span className="block text-fuchsia-400">
                Your sound. Your future.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              We believe great music begins with creative people. Join our
              community and explore opportunities to turn your passion into
              something bigger.
            </p>

            <a
              href="#opportunities"
              className="mt-9 inline-flex rounded-full bg-fuchsia-500 px-8 py-4 font-semibold transition hover:bg-fuchsia-400"
            >
              Explore Opportunities ↓
            </a>
          </div>
        </div>

        <section id="opportunities" className="py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
              Find Your Place
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              How would you like to join?
            </h2>
            <p className="mt-4 text-gray-400">
              Choose the path that best fits your talent.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-fuchsia-500/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-3xl text-fuchsia-400">
                  {item.icon}
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
                  {item.type}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 flex-1 leading-7 text-gray-400">
                  {item.description}
                </p>

                <a
                  href={`/contact?interest=${encodeURIComponent(item.type)}`}
                  className="mt-7 inline-flex items-center justify-center rounded-full border border-fuchsia-500/50 px-5 py-3 text-sm font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white"
                >
                  Get Started ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
              Our Community
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Great things happen when creativity comes together.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-400">
              Whether you where releasing your first track or bringing years of
              experience, we want to hear what makes your music unique. Tell us
              about yourself, your goals, and the sound you want to share.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-fuchsia-200"
            >
              Contact Our Team ↗
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
