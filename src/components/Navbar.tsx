"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import {
  Menu,
  MenuItem,
  HoveredLink,
} from "../components/ui/navbar-menu";
import { cn } from "../components/ui/cn";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    cn(
      "rounded-full px-4 py-2 text-sm font-medium transition",
      pathname === href
        ? "bg-fuchsia-500 text-white"
        : "text-gray-200 hover:bg-white/10 hover:text-fuchsia-300"
    );

  const mobileLinkClass = (href: string) =>
    cn(
      "block rounded-xl px-4 py-3 text-sm font-medium transition",
      pathname === href
        ? "bg-fuchsia-500 text-white"
        : "text-gray-200 hover:bg-white/10 hover:text-fuchsia-300"
    );

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 mx-2 mt-2 border border-white/10 bg-[#09090d]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:mx-4 sm:mt-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="flex min-h-12 items-center justify-between gap-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 shrink-0 items-center"
          aria-label="MusicWave home"
        >
          <img
            src="/musicwave.svg"
            alt="MusicWave"
            className="h-12 w-auto max-w-49.5 object-contain sm:h-14 sm:max-w-57.5 lg:h-16 lg:max-w-57.5"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center bg-[#09090d]/95 gap-1 md:flex">
          <Menu
            setActive={setActive}
            className="flex items-center gap-1 border-0 bg-transparent p-0 shadow-none"
          >
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <Link href="/artists" className={linkClass("/artists")}>
              Artists
            </Link>

            <Link href="/music" className={linkClass("/music")}>
              Music
            </Link>

            <MenuItem
              item="Company"
              active={active}
              setActive={setActive}
            >
              <div className="flex min-w-48 flex-col gap-2">
                <HoveredLink href="/about">About Us</HoveredLink>
                <HoveredLink href="/services">Our Services</HoveredLink>
                <HoveredLink href="/careers">Careers</HoveredLink>
              </div>
            </MenuItem>

            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>

            <Link
              href="/join-us"
              className="ml-2 whitespace-nowrap rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
            >
              Join Us ↗
            </Link>
          </Menu>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-fuchsia-400 hover:bg-white/10 md:hidden"
        >
          {mobileOpen ? (
            <X size={24} />
          ) : (
            <MenuIcon size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <nav className="mt-4 border-t border-white/10 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={mobileLinkClass("/")}
            >
              Home
            </Link>

            <Link
              href="/artists"
              onClick={closeMobileMenu}
              className={mobileLinkClass("/artists")}
            >
              Artists
            </Link>

            <Link
              href="/music"
              onClick={closeMobileMenu}
              className={mobileLinkClass("/music")}
            >
              Music
            </Link>

            {/* Company Links */}
            <div className="rounded-xl">
              <button
                type="button"
                onClick={() =>
                  setActive((current) =>
                    current === "mobile-company" ? null : "mobile-company"
                  )
                }
                aria-expanded={active === "mobile-company"}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-fuchsia-300"
              >
                Company
                <span className="text-lg">
                  {active === "mobile-company" ? "−" : "+"}
                </span>
              </button>

              {active === "mobile-company" && (
                <div className="ml-3 flex flex-col gap-1 border-l border-fuchsia-500/40 py-2 pl-3">
                  <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-fuchsia-300"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/services"
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-fuchsia-300"
                  >
                    Our Services
                  </Link>

                  <Link
                    href="/careers"
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-fuchsia-300"
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={mobileLinkClass("/contact")}
            >
              Contact
            </Link>

            <Link
              href="/join-us"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
            >
              Join Us ↗
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}