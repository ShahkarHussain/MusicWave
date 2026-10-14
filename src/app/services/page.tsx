
const services = [
  {
    icon: "♫",
    title: "Music Production",
    description:
      "Professional recording, sound design, mixing, and mastering to bring your musical ideas to life.",
  },
  {
    icon: "✦",
    title: "Artist Development",
    description:
      "Build your artistic identity with guidance on branding, creative direction, and career planning.",
  },
  {
    icon: "◉",
    title: "Music Distribution",
    description:
      "Prepare and distribute your releases across digital music platforms and streaming services.",
  },
  {
    icon: "▣",
    title: "Music Marketing",
    description:
      "Promote your music through digital campaigns, social media strategies, and audience engagement.",
  },
  {
    icon: "♬",
    title: "Recording Studio",
    description:
      "Create your next single, album, or demo in a professional recording environment.",
  },
  {
    icon: "↗",
    title: "Artist Management",
    description:
      "Get support with project planning, collaborations, releases, and professional opportunities.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-20 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            What We Do
          </p>
          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            Services for <span className="text-fuchsia-400">Artists</span>
          </h1>
          <p className="mt-5 leading-8 text-gray-400">
            Everything you need to develop your sound, grow your audience,
            and take your music career to the next level.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-fuchsia-500/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/15 text-3xl text-fuchsia-400">
                {service.icon}
              </div>
              <h2 className="mt-6 text-xl font-bold">{service.title}</h2>
              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-fuchsia-300 hover:text-white"
              >
                Learn More ↗
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-fuchsia-950/60 to-purple-950/40 p-10 text-center">
          <h2 className="text-3xl font-bold">Ready to make some noise?</h2>
          <p className="mt-4 text-gray-400">
            Tell us about your next music project.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-block rounded-full bg-fuchsia-500 px-7 py-3 font-semibold hover:bg-fuchsia-400"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </main>
  );
}
