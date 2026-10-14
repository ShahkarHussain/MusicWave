
"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85",
    label: "THE SOUND OF NOW",
    title: "Feel Every Beat.",
    description: "Discover your next favorite sound.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85",
    label: "LIVE THE MUSIC",
    title: "Own the Moment.",
    description: "Experience the energy of live music.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
    label: "NEW SOUNDS. NEW STORIES.",
    title: "Find Your Rhythm.",
    description: "Explore sounds that move you.",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative w-full">
      <div className="absolute -inset-5 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#17151f] shadow-2xl shadow-purple-950/40 sm:h-[480px]">
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

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

            <div
              className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-700 sm:p-8 ${
                active === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
                {slide.label}
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                {slide.title}
              </h2>

              <p className="mt-2 text-sm text-gray-300 sm:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl backdrop-blur transition hover:bg-fuchsia-500"
        >
          &#8592;
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl backdrop-blur transition hover:bg-fuchsia-500"
        >
          &#8594;
        </button>

        <div className="absolute bottom-4 right-6 z-20 flex gap-2 sm:bottom-6 sm:right-8">
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
                  : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute -right-3 top-8 z-20 rounded-2xl border border-white/10 bg-[#18151f]/90 p-4 shadow-xl backdrop-blur sm:-right-5">
        <span className="text-2xl text-fuchsia-400">♫</span>
        <p className="mt-1 text-xs text-gray-400">Now playing</p>
        <p className="text-sm font-semibold">Your next obsession</p>
      </div>
    </div>
  );
}
