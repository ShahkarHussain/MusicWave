
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#09090d] px-6 py-16 text-white md:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
            Get in Touch
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">
            Lets Talk <span className="text-fuchsia-400">Music.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Have a project, a collaboration idea, or a question? We would love
            to hear from you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-4 leading-7 text-gray-400">
              Connect with the SoundWave team to discuss your music and
              creative ideas.
            </p>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/15 text-xl text-fuchsia-400">
                  ✉
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    hello@soundwave.example
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/15 text-xl text-fuchsia-400">
                  ♫
                </div>
                <div>
                  <h3 className="font-semibold">Artist Inquiries</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    For artists, producers, and collaborations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/15 text-xl text-fuchsia-400">
                  ◷
                </div>
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Monday – Friday · 9 AM – 5 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-fuchsia-950/60 to-purple-950/40 p-6">
              <p className="text-lg font-bold">Lets create something great.</p>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Every great track begins with an idea. Tell us yours.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-3 text-sm text-gray-400">
              Fill out the form below to get started.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">
                <h3 className="text-xl font-bold text-green-400">
                  Thank you!
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Your demo form was submitted successfully. Connect this form
                  to an email service or backend to deliver real messages.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-semibold text-fuchsia-300 hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#09090d] px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-fuchsia-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-[#09090d] px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-fuchsia-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm text-gray-300">
                    What is this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-xl border border-white/10 bg-[#09090d] px-4 py-3 text-gray-300 outline-none focus:border-fuchsia-500"
                  >
                    <option>General Inquiry</option>
                    <option>Artist Partnership</option>
                    <option>Music Production</option>
                    <option>Marketing & Distribution</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your idea..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-[#09090d] px-4 py-3 outline-none transition placeholder:text-gray-600 focus:border-fuchsia-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-fuchsia-500 px-6 py-3.5 font-semibold transition hover:bg-fuchsia-400"
                >
                  Send Message ↗
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
