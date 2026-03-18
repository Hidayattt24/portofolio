"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Award,
  Briefcase,
  Mail,
  Trophy,
  MessageSquareQuote,
  Menu,
  X,
} from "lucide-react";

const allNavItems = [
  { name: "Home",         path: "/home",         icon: Home },
  { name: "About",        path: "/about",         icon: User },
  { name: "Experience",   path: "/experience",    icon: Award },
  { name: "Projects",     path: "/projects",      icon: Briefcase },
  { name: "Achievements", path: "/achievements",  icon: Trophy },
  { name: "Collabs & Reviews", path: "/collabs-reviews",  icon: MessageSquareQuote },
  { name: "Contact",      path: "/contact",       icon: Mail },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Full-menu overlay ─────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu panel — slides up from the floating bar */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm
                         bg-[var(--card-bg)] border-[3px] border-[var(--card-border)]
                         rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)]
                         p-4 z-50 md:hidden"
            >
              {/* Title */}
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3 px-1">
                Navigation
              </p>

              {/* Grid of all nav items */}
              <div className="grid grid-cols-2 gap-2">
                {allNavItems.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3
                          rounded-2xl border-2 border-[var(--card-border)]
                          transition-all duration-200 w-full
                          ${
                            isActive
                              ? "bg-[var(--button-primary-bg)] text-white shadow-md border-transparent"
                              : "bg-white text-[var(--text-primary)] hover:shadow-[var(--shadow-sm)]"
                          }
                        `}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="text-sm font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="menuActive"
                            className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Floating bottom bar ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", damping: 22 }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <div
          className="flex items-center gap-1 px-3 py-2.5
                     bg-[var(--card-bg)] border-[3px] border-[var(--card-border)]
                     rounded-full shadow-[var(--shadow-lg)]"
        >
          {/* Active page pill — show current page name */}
          <ActivePagePill pathname={pathname} />

          {/* Divider */}
          <div className="w-px h-6 bg-[var(--card-border)] mx-1" />

          {/* Hamburger button */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
              transition-all duration-200
              ${
                open
                  ? "bg-[var(--button-primary-bg)] text-white"
                  : "bg-[var(--card-border)]/30 text-[var(--text-primary)] hover:bg-[var(--card-border)]/60"
              }
            `}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
            <span>{open ? "Close" : "Menu"}</span>
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

/* ── Helper: shows an icon + name of the currently active page ─────── */
function ActivePagePill({ pathname }: { pathname: string }) {
  const current = allNavItems.find((item) => item.path === pathname);
  if (!current) return null;
  const Icon = current.icon;

  return (
    <Link href={current.path}>
      <motion.div
        key={current.path}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full
                   bg-[var(--button-primary-bg)] text-white text-sm font-semibold"
      >
        <Icon className="w-4 h-4" />
        <span>{current.name}</span>
      </motion.div>
    </Link>
  );
}
