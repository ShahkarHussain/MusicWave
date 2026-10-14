
const jobs = [
  {
    title: "Music Producer",
    department: "Production",
    type: "Full-time",
    description:
      "Work with artists to develop original music, arrange tracks, and shape recording sessions.",
  },
  {
    title: "Artist Relations Coordinator",
    department: "Artist Management",
    type: "Full-time",
    description:
      "Build relationships with musicians and help coordinate releases, collaborations, and projects.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Part-time",
    description:
      "Help artists grow their audiences through digital campaigns, content, and social media.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-20 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            Join Our Team
          </p>

          <h1 className="mt-5 text-4xl font-black sm:text-6xl">
            Make your career
            <span className="block text-fuchsia-400">sound different.</span>
          </h1>

          <p className="mt-5 leading-8 text-gray-400">
            We bring together creative thinkers, music lovers, and talented
            professionals who believe in the power of music.
          </p>
        </div>

        <div className="mb-12 overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85"
            alt="Musicians performing on stage"
            className="h-72 w-full object-cover sm:h-96"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold">Explore Opportunities</h2>
          <p className="mt-3 text-gray-400">
            Find a role where your talent can make a difference.
          </p>
        </div>

        <div className="space-y-5">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-fuchsia-500/50 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-400">
                    <span>{job.department}</span>
                    <span>·</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                    {job.description}
                  </p>
                </div>

                <a
                  href={`mailto:careers@soundwave.example?subject=${encodeURIComponent(
                    `Application: ${job.title}`
                  )}`}
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold hover:bg-fuchsia-400"
                >
                  Apply Now ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Dont see your role?</h2>
          <p className="mt-3 text-gray-400">
            We welcome passionate people with new ideas and a love for music.
          </p>
          <a
            href="mailto:careers@soundwave.example?subject=General%20Career%20Inquiry"
            className="mt-5 inline-block text-fuchsia-300 hover:text-white"
          >
            Introduce Yourself ↗
          </a>
        </div>
      </section>
    </main>
  );
}
