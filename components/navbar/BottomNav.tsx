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
  FileCheck,
  MessageSquareQuote,
  Menu,
  X,
} from "lucide-react";

const mainNavItems = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Experience", path: "/experience", icon: Award },
  { name: "Contact", path: "/contact", icon: Mail },
];

const moreNavItems = [
  { name: "About", path: "/about", icon: User },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  // { name: 'Certifications', path: '/certifications', icon: FileCheck },
  { name: "Testimonials", path: "/testimonials", icon: MessageSquareQuote },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* More Menu Overlay */}
      <AnimatePresence>
        {showMore && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMore(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* More Menu */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed bottom-20 left-4 right-4 bg-[var(--card-bg)] rounded-[var(--radius-lg)] border-[3px] border-[var(--card-border)] shadow-[var(--shadow-lg)] p-4 z-50 md:hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {moreNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setShowMore(false)}
                    >
                      <div
                        className={`
                          flex flex-col items-center gap-2 p-4 rounded-[var(--radius-md)] border-[3px] border-[var(--card-border)]
                          transition-all duration-200
                          ${
                            isActive
                              ? "bg-[var(--button-primary-bg)] text-white shadow-[var(--shadow-sm)]"
                              : "bg-white text-[var(--text-primary)] hover:shadow-[var(--shadow-sm)]"
                          }
                        `}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="text-xs font-medium">{item.name}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-0 left-0 right-0 bg-[var(--card-bg)] border-t-[3px] border-[var(--card-border)] shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-40 md:hidden"
      >
        <div className="flex items-center justify-around px-2 py-3 max-w-screen-sm mx-auto">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} className="flex-1">
                <div className="flex flex-col items-center gap-1 relative">
                  {isActive && (
                    <motion.div
                      layoutId="bottomActiveIndicator"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--accent-green)] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <div
                    className={`
                      p-2 rounded-xl transition-all duration-200
                      ${
                        isActive
                          ? "bg-[var(--accent-green)]/10 text-[var(--accent-green)]"
                          : "text-[var(--text-secondary)]"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`
                      text-xs font-medium transition-colors
                      ${
                        isActive
                          ? "text-[var(--accent-green)]"
                          : "text-[var(--text-secondary)]"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}

          {/* More Button */}
          <button onClick={() => setShowMore(!showMore)} className="flex-1">
            <div className="flex flex-col items-center gap-1 relative">
              {showMore && (
                <motion.div
                  layoutId="bottomActiveIndicator"
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-[var(--accent-green)] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div
                className={`
                  p-2 rounded-xl transition-all duration-200
                  ${
                    showMore
                      ? "bg-[var(--accent-green)]/10 text-[var(--accent-green)]"
                      : "text-[var(--text-secondary)]"
                  }
                `}
              >
                {showMore ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
              <span
                className={`
                  text-xs font-medium transition-colors
                  ${
                    showMore
                      ? "text-[var(--accent-green)]"
                      : "text-[var(--text-secondary)]"
                  }
                `}
              >
                {showMore ? "Close" : "More"}
              </span>
            </div>
          </button>
        </div>
      </motion.nav>
    </>
  );
}
