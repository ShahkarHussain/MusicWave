"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85",
    label: "THE SOUND OF NOW",
    title: "Feel Every Beat.",
    description: "Discover your next favorite sound.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
    label: "LIVE THE MUSIC",
    title: "Own the Moment.",
    description: "Experience the energy of live music.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85",
    label: "NEW SOUNDS. NEW STORIES.",
    title: "Find Your Rhythm.",
    description: "Explore sounds that move you.",
  },
];

const artists = [
  {
    name: "Luna Rose",
    genre: "POP · R&B",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "The Midnight",
    genre: "ELECTRONIC · SYNTHWAVE",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Jay Rivers",
    genre: "HIP-HOP · SOUL",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=700&q=80",
  },
];

const releases = [
  {
    title: "Midnight Dreams",
    artist: "Luna Rose",
    color: "from-fuchsia-600 to-purple-950",
    number: "01",
  },
  {
    title: "Electric Heart",
    artist: "The Midnight",
    color: "from-cyan-500 to-blue-950",
    number: "02",
  },
  {
    title: "Golden Hour",
    artist: "Jay Rivers",
    color: "from-orange-500 to-red-950",
    number: "03",
  },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Artists", href: "/artists" },
  { label: "Music Releases", href: "/music" },
  { label: "About Us", href: "/about" },
];

const companyLinks = [
  { label: "Our Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Join Our Team", href: "/join-us" },
  { label: "Contact Us", href: "/contact" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const handleNewsletter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    alert("Thanks for your interest! Newsletter signup needs to be connected to a backend.");
  };

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#09090d] text-white"
    >
      {/* Hero Section */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
          <div>
            <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
              Independent Music Company
            </p>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              We make music{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
                move.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              We discover bold talent, create unforgettable sounds, and
              connect artists with the world. Welcome to a new wave of music.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#releases"
                className="inline-flex items-center rounded-full bg-fuchsia-600 px-7 py-3.5 text-sm font-bold transition hover:bg-fuchsia-500"
              >
                Explore Music <span className="ml-2">↗</span>
              </Link>

              <Link
                href="#artists"
                className="inline-flex items-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold transition hover:border-fuchsia-400 hover:bg-white/5"
              >
                Meet Our Artists
              </Link>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 gap-5 border-t border-white/10 pt-7">
              <div>
                <p className="text-3xl font-black sm:text-4xl">
                  25<span className="text-fuchsia-400">+</span>
                </p>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Artists
                </p>
              </div>

              <div>
                <p className="text-3xl font-black sm:text-4xl">
                  120<span className="text-fuchsia-400">+</span>
                </p>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Releases
                </p>
              </div>

              <div>
                <p className="text-3xl font-black sm:text-4xl">
                  12<span className="text-fuchsia-400">M+</span>
                </p>
                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  Streams
                </p>
              </div>
            </div>
          </div>

          {/* Automatic Hero Slideshow */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-5 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#17151f] shadow-2xl shadow-purple-950/40 sm:h-[520px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    active === index
                      ? "z-10 opacity-100"
                      : "z-0 opacity-0"
                  }`}
                  aria-hidden={active !== index}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

                  <div
                    className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-700 sm:p-9 ${
                      active === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                      {slide.label}
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                      {slide.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-300 sm:text-base">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white backdrop-blur transition hover:bg-fuchsia-600"
              >
                &#8592;
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-xl text-white backdrop-blur transition hover:bg-fuchsia-600"
              >
                &#8594;
              </button>

              <div className="absolute bottom-5 right-6 z-20 flex gap-2 sm:bottom-8 sm:right-9">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={active === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-8 bg-fuchsia-400"
                        : "w-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -right-2 top-7 z-20 rounded-2xl border border-white/10 bg-[#18151f]/95 p-4 text-white shadow-xl backdrop-blur sm:-right-5">
              <span className="text-2xl text-fuchsia-400">♫</span>
              <p className="mt-1 text-xs text-gray-400">NOW PLAYING</p>
              <p className="text-sm font-semibold">Your next obsession</p>
            </div>
          </div>
        </div>
      </section>

      {/* Music Partners */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-center sm:gap-x-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Sound without limits
          </span>
          <span className="text-sm font-black tracking-widest text-gray-400">
            SOUNDWAVE
          </span>
          <span className="text-sm font-bold tracking-wider text-gray-400">
            NEXT BEAT
          </span>
          <span className="text-sm font-black tracking-widest text-gray-400">
            AMPLIFY
          </span>
          <span className="text-sm font-bold tracking-wider text-gray-400">
            WAVEFORM
          </span>
        </div>
      </section>

      {/* Artists Section */}
      <section
        id="artists"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-400">
              The people behind the sound
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Meet our artists<span className="text-fuchsia-400">.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-gray-400">
              Original voices. Fresh perspectives. Artists who are changing
              the way the world hears music.
            </p>
          </div>

          <Link
            href="/artists"
            className="w-fit text-sm font-bold text-fuchsia-300 transition hover:text-white"
          >
            View all artists <span className="ml-2">↗</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, index) => (
            <Link
              href="/artists"
              key={artist.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#121218]"
            >
              <div className="h-[340px] overflow-hidden sm:h-[380px]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-bold tracking-[0.18em] text-fuchsia-300">
                  {artist.genre}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-2xl font-black">{artist.name}</h3>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition group-hover:border-fuchsia-400 group-hover:bg-fuchsia-600">
                    ↗
                  </span>
                </div>
              </div>

              <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs backdrop-blur">
                Artist 0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Releases */}
      <section
        id="releases"
        className="border-y border-white/[0.06] bg-[#0e0d14]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-400">
                Turn it up
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Latest releases<span className="text-fuchsia-400">.</span>
              </h2>
              <p className="mt-4 text-gray-400">
                Your next favorite track might be right here.
              </p>
            </div>

            <Link
              href="/music"
              className="w-fit text-sm font-bold text-fuchsia-300 transition hover:text-white"
            >
              Explore all music <span className="ml-2">↗</span>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {releases.map((release) => (
              <Link
                href="/music"
                key={release.number}
                className="group rounded-3xl border border-white/10 bg-[#15141c] p-4 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40"
              >
                <div
                  className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${release.color}`}
                >
                  <div className="absolute left-5 top-5 text-xs font-bold tracking-widest text-white/70">
                    MUSICWAVE / {release.number}
                  </div>

                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm transition duration-500 group-hover:scale-110 sm:h-36 sm:w-36">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/20 sm:h-28 sm:w-28">
                      <span className="text-4xl text-white sm:text-5xl">
                        ♫
                      </span>
                    </div>
                  </div>

                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-black transition group-hover:bg-fuchsia-500 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="px-2 pb-2 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
                    {release.number} / FEATURED RELEASE
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{release.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{release.artist}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#21102b] via-[#15101e] to-[#101018] px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">
                More than a music label
              </p>
              <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Great music deserves a bigger stage.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-gray-300">
                From artist development to production and promotion, MusicWave
                helps creative talent turn ideas into lasting impact.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex w-fit items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-fuchsia-300"
            >
              Discover MusicWave <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>





      {/* Redesigned Footer */}
      <footer className="border-t bg-gray-800 rounded-3xl border-white/10 bg-[#07070a]">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-10 lg:px-12">
          {/* Footer Top */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
            {/* Logo and Description */}
            <div>
              <Link
                href="/"
                className="mb-5 inline-flex items-center gap-3"
                aria-label="MusicWave home"
              >
                <img
                  src="/musicwave.svg"
                  alt="MusicWave logo"
                  className="h-12 w-auto max-w-[180px] object-contain"
                />
              </Link>

              <p className="max-w-xs text-sm leading-7 text-gray-400">
                Discover new sounds, celebrate original artists, and experience
                music that moves you. This is where the next wave begins.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold transition hover:border-fuchsia-400 hover:bg-fuchsia-600"
                >
                  IG
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold transition hover:border-fuchsia-400 hover:bg-fuchsia-600"
                >
                  YT
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold transition hover:border-fuchsia-400 hover:bg-fuchsia-600"
                >
                  f
                </a>

                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold transition hover:border-fuchsia-400 hover:bg-fuchsia-600"
                >
                  ♪
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
                Explore
              </h3>

              <ul className="space-y-4">
                {exploreLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition hover:pl-1 hover:text-fuchsia-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>

              <ul className="space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition hover:pl-1 hover:text-fuchsia-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">
                Stay in the Loop
              </h3>

              <p className="mb-5 text-sm leading-6 text-gray-400">
                Get new releases, artist stories, and MusicWave updates in your
                inbox.
              </p>

              <form onSubmit={handleNewsletter} className="space-y-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-fuchsia-400"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-fuchsia-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-fuchsia-500"
                >
                  Subscribe <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="my-10 border-t bg:text-fuchsia-400 border-white/10" />

          {/* Footer Bottom */}
          <div className="flex flex-col gap-5 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
           <p>
              © 2026 MusicWave. All rights reserved.
            </p> 

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/privacy"
                className="transition hover:text-fuchsia-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-fuchsia-300"
              >
                Terms of Service
              </Link>

              <Link
                href="/contact"
                className="transition hover:text-fuchsia-300"
              >
                Help & Support
              </Link>

              <a
                href="#top"
                className="transition hover:text-fuchsia-300"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}