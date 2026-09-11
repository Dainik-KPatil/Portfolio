import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  Mail,
  UserRound,
  Wrench,
} from "lucide-react";

const navigationItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: UserRound,
  },
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Wrench,
  },
  {
    id: "work",
    label: "Work",
    icon: FolderKanban,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frameId = null;

    const calculateActiveSection = () => {
      const viewportPoint = window.innerHeight * 0.45;

      const availableSections = navigationItems
        .map((item) => {
          const element = document.getElementById(item.id);

          if (!element) {
            return null;
          }

          const rect = element.getBoundingClientRect();

          const isVisible =
            rect.bottom > 0 &&
            rect.top < window.innerHeight;

          if (!isVisible) {
            return null;
          }

          const sectionPoint =
            rect.top +
            Math.min(rect.height / 2, window.innerHeight / 2);

          return {
            id: item.id,
            distance: Math.abs(sectionPoint - viewportPoint),
          };
        })
        .filter(Boolean);

      if (window.scrollY <= 80) {
        setActiveSection("home");
        return;
      }

      if (availableSections.length === 0) {
        return;
      }

      const closest = availableSections.reduce(
        (previous, current) =>
          current.distance < previous.distance
            ? current
            : previous,
      );

      setActiveSection(closest.id);
    };

    const requestCalculation = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        calculateActiveSection();
        frameId = null;
      });
    };

    calculateActiveSection();

    window.addEventListener("scroll", requestCalculation, {
      passive: true,
    });

    window.addEventListener("resize", requestCalculation);

    return () => {
      window.removeEventListener(
        "scroll",
        requestCalculation,
      );

      window.removeEventListener(
        "resize",
        requestCalculation,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();

    const target =
      document.getElementById(sectionId);

    if (!target) {
      return;
    }

    setActiveSection(sectionId);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `#${sectionId}`,
    );
  };

  return (
    <nav
      aria-label="Portfolio navigation"
      className="floating-navigation fixed left-1/2 z-[60] w-[calc(100%-20px)] max-w-[720px] -translate-x-1/2 sm:w-auto"
    >
      <div className="glass-panel rounded-[24px] p-1.5">
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.id,
                  )
                }
                aria-label={`Go to ${item.label}`}
                aria-current={
                  isActive ? "location" : undefined
                }
                className={[
                  "relative flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-[18px] px-2 transition-colors duration-200 sm:flex-none sm:justify-start sm:px-4",
                  isActive
                    ? "text-accent"
                    : "text-text-muted hover:text-text-primary",
                ].join(" ")}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-navigation-pill"
                    transition={{
                      type: "spring",
                      stiffness: 430,
                      damping: 34,
                    }}
                    className="absolute inset-0 rounded-[18px] border border-accent/20 bg-accent-soft"
                    aria-hidden="true"
                  />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Icon
                    size={18}
                    strokeWidth={
                      isActive ? 2.15 : 1.7
                    }
                    aria-hidden="true"
                  />

                  <span
                    className={[
                      "hidden whitespace-nowrap text-[11px] font-medium sm:block",
                      isActive
                        ? "text-accent"
                        : "text-text-secondary",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>

                  <span className="sr-only sm:hidden">
                    {item.label}
                  </span>
                </span>

                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-px w-5 -translate-x-1/2 bg-accent sm:hidden"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;