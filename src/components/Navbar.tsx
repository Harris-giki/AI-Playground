"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { IconSun, IconMoon } from "./icons";
import { applyFormUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Home", shortLabel: "Home", hover: "HOME" },
  { href: "/details", label: "The Event", shortLabel: "Event", hover: "EVENT" },
  { href: "/tier-1", label: "Tier 1", shortLabel: "Tier 1", hover: "TIER 1" },
  { href: "/shortlist", label: "Shortlist", shortLabel: "Shortlist", hover: "LIST" },
  { href: "/tier-2-3", label: "Tier 2 & 3", shortLabel: "T2 & T3", hover: "FILM" },
  { href: "/film-studio", label: "Film Studio", shortLabel: "Studio", hover: "STUDIO" },
];

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, toggle, themeToggleEnabled } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {themeToggleEnabled ? (
        <button
          onClick={toggle}
          data-hover="THEME"
          className="nav-theme-toggle fixed top-5 right-6 z-[100] w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 glass-edge"
          style={{ color: "var(--ink)" }}
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <IconSun className="w-4 h-4" />
          ) : (
            <IconMoon className="w-4 h-4" />
          )}
        </button>
      ) : null}

      {/* Floating centre pill — true viewport center */}
      <nav className="nav-pill fixed top-4 left-1/2 z-[90] -translate-x-1/2">
        <div className="nav-pill__inner">
          <div className="nav-pill__row hidden lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-hover={link.hover}
                  className={`nav-pill__link${active ? " nav-pill__link--active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="nav-pill__label nav-pill__label--short">
                    {link.shortLabel}
                  </span>
                  <span className="nav-pill__label nav-pill__label--full">
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <a
              href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-hover="APPLY"
              className="nav-pill__cta"
            >
              Apply
            </a>
          </div>

          {/* Mobile / tablet hamburger */}
          <button
            className="nav-pill__menu-btn lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span
              className={`nav-pill__menu-line${mobileOpen ? " nav-pill__menu-line--top" : ""}`}
            />
            <span
              className={`nav-pill__menu-line${mobileOpen ? " nav-pill__menu-line--mid" : ""}`}
            />
            <span
              className={`nav-pill__menu-line${mobileOpen ? " nav-pill__menu-line--bot" : ""}`}
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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <ul
        className={`lg:hidden fixed top-0 w-[300px] h-screen backdrop-blur-xl flex flex-col pt-28 px-6 gap-1.5 transition-all duration-300 z-[45] ${
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
                data-hover={link.hover}
                className={`nav-pill__link nav-pill__link--drawer block px-5 py-3.5 rounded-md${active ? " nav-pill__link--active" : ""}`}
                  aria-current={active ? "page" : undefined}
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
            data-hover="APPLY"
            className="nav-pill__cta nav-pill__cta--drawer block px-5 py-3.5 rounded-md text-center"
          >
            Apply Now
          </a>
        </li>
      </ul>
    </>
  );
}
