import { useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Moon,
  Sun,
} from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme ||
      "dark",
  );

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark"
        ? "light"
        : "dark";

    document.documentElement.dataset.theme =
      nextTheme;

    localStorage.setItem(
      "dainik-theme",
      nextTheme,
    );

    const themeColor =
      document.querySelector(
        'meta[name="theme-color"]',
      );

    if (themeColor) {
      themeColor.setAttribute(
        "content",
        nextTheme === "dark"
          ? "#08090D"
          : "#F4F6F8",
      );
    }

    setTheme(nextTheme);
  };

  return (
    <div className="fixed right-3 top-3 z-[70] sm:right-5 sm:top-5 lg:right-7 lg:top-7">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
        }
        title={
          theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
        }
        className="glass-panel group flex size-11 items-center justify-center rounded-full text-text-secondary transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:text-text-primary active:scale-95 sm:size-12"
      >
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          {theme === "dark" ? (
            <motion.span
              key="sun"
              initial={{
                opacity: 0,
                rotate: -35,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 35,
                scale: 0.7,
              }}
              transition={{
                duration: 0.16,
              }}
            >
              <Sun
                size={18}
                strokeWidth={1.9}
                className="text-warm sm:size-5"
                aria-hidden="true"
              />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{
                opacity: 0,
                rotate: 35,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: -35,
                scale: 0.7,
              }}
              transition={{
                duration: 0.16,
              }}
            >
              <Moon
                size={18}
                strokeWidth={1.9}
                className="text-accent sm:size-5"
                aria-hidden="true"
              />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

export default ThemeToggle;