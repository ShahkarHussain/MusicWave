
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "./cn";

type MenuProps = {
  children: ReactNode;
  setActive: (item: string | null) => void;
  className?: string;
};

type MenuItemProps = {
  children?: ReactNode;
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
};

export function Menu({ children, setActive, className }: MenuProps) {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/95 p-2 shadow-xl backdrop-blur-xl",
        className
      )}
    >
      {children}
    </nav>
  );
}

export function MenuItem({
  children,
  setActive,
  active,
  item,
}: MenuItemProps) {
  const isActive = active === item;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(item)}
    >
      <button
        type="button"
        onFocus={() => setActive(item)}
        onClick={() => setActive(isActive ? null : item)}
        aria-expanded={isActive}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-500 text-white"
            : "text-slate-200 hover:bg-white/10 hover:text-white"
        )}
      >
        {item}
      </button>

      <AnimatePresence>
        {isActive && children && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 mt-3 min-w-56 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HoveredLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function ProductItem({
  title,
  href,
  src,
  description,
}: {
  title: string;
  href: string;
  src: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex gap-3 rounded-xl p-2 transition hover:bg-slate-50"
    >
      <img
        src={src}
        alt={title}
        className="h-14 w-14 rounded-lg object-cover"
      />

      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>
    </Link>
  );
}
