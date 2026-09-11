import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { ArrowUp } from "lucide-react";

const radius = 21;
const circumference =
  2 * Math.PI * radius;

function ScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    let frameId = null;

    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const nextProgress =
        scrollableHeight > 0
          ? Math.min(
              100,
              Math.max(
                0,
                (scrollTop /
                  scrollableHeight) *
                  100,
              ),
            )
          : 0;

      setProgress(nextProgress);

      setIsVisible(scrollTop > 320);
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(
        () => {
          calculateProgress();
          frameId = null;
        },
      );
    };

    calculateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dashOffset =
    circumference -
    (progress / 100) *
      circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label={`Back to top. Page progress ${Math.round(
            progress,
          )}%`}
          title="Back to top"
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.78,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale:
              progress > 95
                ? 1.04
                : 1,
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.78,
          }}
          transition={{
            duration: 0.2,
          }}
          className="scroll-progress-button group fixed right-3 z-[55] flex size-[54px] items-center justify-center rounded-full bg-surface/80 shadow-lg backdrop-blur-xl sm:right-5 sm:size-[58px] lg:right-7"
        >
          <svg
            viewBox="0 0 52 52"
            className="absolute inset-0 size-full -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1.4"
            />

            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{
                transition:
                  "stroke-dashoffset 70ms linear",
                filter:
                  "drop-shadow(0 0 4px rgba(79, 140, 255, 0.9)) drop-shadow(0 0 9px rgba(72, 215, 255, 0.22))",
              }}
            />
          </svg>

          <span className="relative z-10 flex size-9 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-200 group-hover:border-accent/35 group-hover:text-accent group-active:scale-90">
            <ArrowUp
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollProgress;