"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { IconSun, IconMoon } from "./icons";
import { applyFormUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/details", label: "The Event" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top-right: Theme toggle */}
      <button
        onClick={toggle}
        className="fixed top-5 right-6 z-[100] w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid var(--border)",
          color: "var(--ink)",
        }}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <IconSun className="w-4 h-4" />
        ) : (
          <IconMoon className="w-4 h-4" />
        )}
      </button>

      {/* Floating centre pill: nav links + Apply Now + mobile hamburger */}
      <nav className="fixed top-4 inset-x-0 z-[90] mx-auto max-w-fit px-4">
        <div
          className="flex items-center gap-1.5 rounded-full px-2 py-2 shadow-lg"
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid var(--border)",
            boxShadow:
              "0 4px 30px rgba(0,0,0,0.18), 0 0 60px rgba(192,132,252,0.08)",
          }}
        >
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-full font-mono text-[12px] uppercase tracking-[0.1em] transition-colors"
                  style={{
                    color: active ? "var(--ink)" : "var(--ink-muted)",
                    background: active ? "var(--bg-card)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 px-4 py-2 rounded-full font-mono text-[12px] uppercase tracking-[0.1em] transition-colors"
              style={{
                color: "var(--accent-glow)",
                border: "1px solid var(--accent-dim)",
              }}
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className="block w-6 h-0.5 rounded transition-all"
              style={{
                background: "var(--ink)",
                transform: mobileOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 rounded transition-all"
              style={{
                background: "var(--ink)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 rounded transition-all"
              style={{
                background: "var(--ink)",
                transform: mobileOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <ul
        className={`md:hidden fixed top-0 w-[300px] h-screen backdrop-blur-xl flex flex-col pt-28 px-6 gap-1.5 transition-all duration-300 z-[45] ${
          mobileOpen ? "right-0" : "-right-full"
        }`}
        style={{
          background: "var(--nav-bg)",
          borderLeft: "1px solid var(--border)",
        }}
      >
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-3.5 rounded-md font-mono text-[13px] uppercase tracking-[0.1em] transition-colors"
                style={{
                  color: active ? "var(--ink)" : "var(--ink-muted)",
                  background: active ? "var(--bg-card)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li className="mt-3">
          <a
            href={applyFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block px-5 py-3.5 rounded-md font-mono text-[13px] uppercase tracking-[0.1em] text-center"
            style={{
              color: "var(--accent-glow)",
              border: "1px solid var(--accent-dim)",
            }}
          >
            Apply Now
          </a>
        </li>
      </ul>
    </>
  );
}
