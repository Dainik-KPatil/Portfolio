import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  TerminalSquare,
} from "lucide-react";

const flowSteps = [
  {
    label: "Request",
    icon: CircleDot,
  },
  {
    label: "Route",
    icon: GitBranch,
  },
  {
    label: "Controller",
    icon: ServerCog,
  },
  {
    label: "Business Logic",
    icon: Layers3,
  },
  {
    label: "Database",
    icon: Database,
  },
  {
    label: "Response",
    icon: Check,
  },
];

const heroHighlights = [
  "PHP",
  "Laravel",
  "MySQL",
  "REST APIs",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="site-container relative z-10">
        <div className="grid min-h-screen items-center gap-14 pb-32 pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,0.8fr)] lg:gap-16 lg:pb-28 lg:pt-16 xl:gap-24">

          {/* =====================================================
              LEFT
          ====================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              variants={revealVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-3.5 py-2 backdrop-blur-xl"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-35" />

                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>

              <span className="font-code text-[9px] font-semibold uppercase tracking-[0.17em] text-text-secondary sm:text-[10px]">
                Available for opportunities
              </span>
            </motion.div>

            <motion.div
              variants={revealVariants}
              className="mt-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-accent" />

              <p className="font-code text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
                PHP / Laravel / Full Stack
              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={revealVariants}
              className="mt-6 max-w-[950px] font-heading text-[clamp(3.8rem,8.6vw,8.8rem)] font-bold leading-[0.78] tracking-[-0.075em]"
            >
              <span className="block text-text-primary">
                I BUILD
              </span>

              <span className="block text-text-primary">
                SYSTEMS THAT
              </span>

              <span className="block text-gradient-blue">
                ACTUALLY WORK.
              </span>
            </motion.h1>

            <motion.p
              variants={revealVariants}
              className="mt-8 max-w-[670px] text-pretty text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
            >
              Backend-focused Full Stack Developer building real
              business applications, APIs, data workflows and
              production features with PHP, Laravel and MySQL.
            </motion.p>

            <motion.div
              variants={revealVariants}
              className="mt-9 flex flex-col gap-3 xs:flex-row"
            >
              <a
                href="#work"
                className="primary-button group"
              >
                View Selected Work

                <ArrowDownRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-button group"
              >
                Resume

                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              variants={revealVariants}
              className="mt-11 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5"
            >
              {heroHighlights.map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />

                    <span className="font-code text-[9px] font-medium uppercase tracking-[0.12em] text-text-secondary sm:text-[10px]">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT LIVE VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[590px] lg:mx-0 lg:ml-auto"
          >
            <LiveDeveloperPanel />

            <motion.div
              initial={{
                opacity: 0,
                x: 18,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.8,
              }}
              className="glass-panel absolute -bottom-5 right-5 hidden rounded-2xl px-4 py-3 sm:block xl:-right-8"
            >
              <p className="technical-label">
                Approach
              </p>

              <p className="mt-1 font-heading text-sm font-semibold text-text-primary">
                Logic before complexity.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="site-container">
          <div className="flex items-center justify-between border-t border-border py-5">
            <span className="technical-label">
              Dainik Kishor Patil
            </span>

            <a
              href="#about"
              className="group flex items-center gap-2 font-code text-[9px] uppercase tracking-[0.15em] text-text-muted transition-colors duration-200 hover:text-accent"
            >
              Explore portfolio

              <ArrowDownRight
                size={13}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="hero-visual-image absolute inset-0 opacity-100" />

      <div className="technical-grid absolute inset-0 opacity-[0.35]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_srgb,var(--background)_92%,transparent)_38%,color-mix(in_srgb,var(--background)_55%,transparent)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-background to-transparent" />

      <div className="absolute -left-32 top-[18%] size-[460px] rounded-full bg-accent/[0.08] blur-[130px]" />

      <div className="absolute right-[4%] top-[18%] size-[380px] rounded-full bg-cyan/[0.07] blur-[120px]" />
    </div>
  );
}

/* =========================================================
   LIVE DEVELOPER PANEL
========================================================= */

function LiveDeveloperPanel() {
  const [activeStep, setActiveStep] =
    useState(0);

  const [requestCount, setRequestCount] =
    useState(1);

  useEffect(() => {
    const interval = window.setInterval(
      () => {
        setActiveStep((current) => {
          if (
            current ===
            flowSteps.length - 1
          ) {
            setRequestCount(
              (count) => count + 1,
            );

            return 0;
          }

          return current + 1;
        });
      },
      950,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const currentStep =
    flowSteps[activeStep];

  return (
    <div className="relative">
      <div
        className="absolute -inset-px rounded-[29px] bg-gradient-to-br from-accent/30 via-cyan/10 to-transparent opacity-70"
        aria-hidden="true"
      />

      <div className="glass-panel relative overflow-hidden rounded-[28px]">

        {/* Window header */}

        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#FF6B6B]" />
            <span className="size-2 rounded-full bg-warm" />
            <span className="size-2 rounded-full bg-success" />
          </div>

          <div className="flex items-center gap-2">
            <Code2
              size={13}
              className="text-accent"
              aria-hidden="true"
            />

            <span className="font-code text-[8px] uppercase tracking-[0.15em] text-text-muted sm:text-[9px]">
              developer.runtime
            </span>
          </div>
        </div>

        {/* Endpoint */}

        <div className="border-b border-border bg-surface-alt/40 px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">

            <div className="flex min-w-0 items-center gap-3">
              <span className="rounded-md bg-success/10 px-2 py-1 font-code text-[8px] font-semibold text-success">
                POST
              </span>

              <span className="truncate font-code text-[9px] text-text-secondary sm:text-[10px]">
                /api/business/workflow
              </span>
            </div>

            <span className="font-code text-[8px] text-text-muted">
              req_{String(
                requestCount,
              ).padStart(3, "0")}
            </span>

          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_170px]">

          {/* Pipeline */}

          <div className="p-5 sm:p-6">

            <div className="flex items-center justify-between">
              <div>
                <p className="technical-label">
                  Request pipeline
                </p>

                <h2 className="mt-2 font-heading text-lg font-semibold text-text-primary">
                  Live backend lifecycle
                </h2>
              </div>

              <TerminalSquare
                size={18}
                strokeWidth={1.7}
                className="text-accent"
                aria-hidden="true"
              />
            </div>

            <div className="relative mt-7">

              <div
                className="absolute bottom-5 left-[15px] top-5 w-px bg-border"
                aria-hidden="true"
              />

              <div className="space-y-2.5">
                {flowSteps.map(
                  (step, index) => (
                    <PipelineStep
                      key={step.label}
                      step={step}
                      index={index}
                      activeStep={
                        activeStep
                      }
                    />
                  ),
                )}
              </div>

            </div>

          </div>

          {/* Status UI */}

          <div className="border-t border-border bg-surface-alt/35 p-5 md:border-l md:border-t-0">

            <p className="technical-label">
              Runtime
            </p>

            <div className="mt-5 space-y-5">

              <RuntimeMetric
                label="Status"
                value={
                  activeStep ===
                  flowSteps.length - 1
                    ? "200 OK"
                    : "PROCESS"
                }
                success={
                  activeStep ===
                  flowSteps.length - 1
                }
              />

              <RuntimeMetric
                label="Layer"
                value={
                  currentStep.label
                }
              />

              <RuntimeMetric
                label="Stack"
                value="Laravel"
              />

            </div>

            <div className="mt-7 border-t border-border pt-5">

              <p className="technical-label">
                Progress
              </p>

              <div className="mt-3 h-1 overflow-hidden rounded-full bg-border">
                <motion.div
                  animate={{
                    width: `${
                      ((activeStep + 1) /
                        flowSteps.length) *
                      100
                    }%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                />
              </div>

              <p className="mt-3 font-code text-[8px] text-text-muted">
                {activeStep + 1}/
                {flowSteps.length}
              </p>

            </div>

          </div>

        </div>

        {/* Console */}

        <div className="border-t border-border bg-background/60 px-5 py-4 sm:px-6">

          <div className="flex items-center gap-2">

            <span className="font-code text-[9px] text-accent">
              &gt;
            </span>

            <AnimatePresence mode="wait">
              <motion.p
                key={
                  currentStep.label
                }
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="font-code text-[8px] text-text-secondary sm:text-[9px]"
              >
                processing{" "}
                {currentStep.label.toLowerCase()}
                ...
              </motion.p>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}

function PipelineStep({
  step,
  index,
  activeStep,
}) {
  const Icon = step.icon;

  const completed =
    index < activeStep;

  const active =
    index === activeStep;

  return (
    <motion.div
      animate={{
        x: active ? 3 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative flex items-center gap-3"
    >
      <motion.div
        animate={{
          scale: active
            ? 1.08
            : 1,
        }}
        className={[
          "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
          active
            ? "border-accent/50 bg-accent-soft text-accent blue-glow"
            : completed
              ? "border-success/30 bg-success/5 text-success"
              : "border-border bg-surface text-text-muted",
        ].join(" ")}
      >
        <Icon
          size={13}
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </motion.div>

      <div
        className={[
          "flex min-h-10 flex-1 items-center justify-between rounded-xl border px-3 transition-all duration-300",
          active
            ? "border-accent/25 bg-accent-soft"
            : "border-border/80 bg-surface/60",
        ].join(" ")}
      >
        <span
          className={[
            "font-code text-[8px] uppercase tracking-[0.1em] sm:text-[9px]",
            active
              ? "text-text-primary"
              : completed
                ? "text-text-secondary"
                : "text-text-muted",
          ].join(" ")}
        >
          {step.label}
        </span>

        <span className="font-code text-[7px] text-text-muted">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

function RuntimeMetric({
  label,
  value,
  success = false,
}) {
  return (
    <div>
      <p className="font-code text-[7px] uppercase tracking-[0.13em] text-text-muted">
        {label}
      </p>

      <p
        className={[
          "mt-1.5 truncate font-code text-[9px] font-medium",
          success
            ? "text-success"
            : "text-text-primary",
        ].join(" ")}
      >
        {value}
      </p>
    </div>
  );
}

export default Hero;