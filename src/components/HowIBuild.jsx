import { motion } from "framer-motion";

import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Network,
  ServerCog,
  TerminalSquare,
} from "lucide-react";

const architectureSteps = [
  {
    number: "01",
    title: "Client",
    icon: Network,
  },
  {
    number: "02",
    title: "Route",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Controller",
    icon: ServerCog,
  },
  {
    number: "04",
    title: "Validation",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Business Logic",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Eloquent",
    icon: Braces,
  },
  {
    number: "07",
    title: "MySQL",
    icon: Database,
  },
  {
    number: "08",
    title: "Response",
    icon: ArrowRight,
  },
];

const journeySteps = [
  {
    year: "EARLY",
    title: "Python / Django",
    description:
      "Backend fundamentals, APIs, database-driven applications and application architecture.",
  },
  {
    year: "FOUNDATION",
    title: "Backend Thinking",
    description:
      "Understanding request flow, data models, authentication and reusable application logic.",
  },
  {
    year: "CURRENT",
    title: "PHP / Laravel",
    description:
      "Continuous professional development through real business applications and production workflows.",
  },
  {
    year: "TODAY",
    title: "Business Systems",
    description:
      "Building connected workflows involving data, APIs, roles, processing and operational logic.",
  },
];

const philosophySteps = [
  "Understand the requirement",
  "Map the data flow",
  "Design the structure",
  "Write business logic",
  "Connect interface and API",
  "Test and debug",
  "Deliver the feature",
];

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(7px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function HowIBuild() {
  return (
    <section
      id="architecture"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="architecture-heading"
    >
      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.26]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
          }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.6fr)] lg:items-end"
        >
          <div>
            <p className="section-eyebrow">
              How I Build
            </p>

            <h2
              id="architecture-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              THINK IN FLOW.
              <br />

              <span className="section-heading-muted">
                BUILD IN LAYERS.
              </span>

              <br />

              <span className="text-gradient-blue">
                DEBUG WITH CONTEXT.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            My development process is centred on understanding how data moves,
            where business rules belong, and how each layer affects the final
            feature.
          </p>
        </motion.div>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.14,
          }}
          className="mt-14 overflow-hidden rounded-[30px] border border-border bg-surface"
        >
          <div className="flex flex-col gap-5 border-b border-border p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
            <div>
              <p className="technical-label">
                Application Architecture
              </p>

              <h3 className="mt-3 max-w-3xl font-heading text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-4xl">
                What happens behind the screen matters.
              </h3>
            </div>

            <div className="flex items-center gap-2 font-code text-[9px] uppercase tracking-[0.12em] text-text-muted">
              <span className="size-2 rounded-full bg-success" />
              Structured request lifecycle
            </div>
          </div>

          <div className="p-5 sm:p-7 lg:p-9">
            <div className="relative grid gap-3 md:grid-cols-4 xl:grid-cols-8">
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-[5%] right-[5%] top-1/2 hidden h-px origin-left bg-gradient-to-r from-accent/20 via-accent to-cyan/20 xl:block"
                aria-hidden="true"
              />

              {architectureSteps.map((step, index) => {
                const Icon = step.icon;
                const highlight =
                  index === 4 ||
                  index === 5 ||
                  index === 6;

                return (
                  <motion.div
                    key={step.title}
                    initial={{
                      opacity: 0,
                      y: 14,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.015,
                    }}
                    className={[
                      "group relative z-10 min-h-[155px] rounded-2xl border p-4",
                      highlight
                        ? "border-accent/25 bg-accent-soft"
                        : "border-border bg-surface-alt/95",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={[
                          "font-code text-[8px]",
                          highlight
                            ? "text-accent"
                            : "text-text-muted",
                        ].join(" ")}
                      >
                        {step.number}
                      </span>

                      <Icon
                        size={16}
                        strokeWidth={1.8}
                        className={
                          highlight
                            ? "text-accent"
                            : "text-text-muted"
                        }
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-8 font-heading text-base font-semibold text-text-primary">
                      {step.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background/60 p-4 sm:p-5">
              <p className="font-code text-[9px] leading-6 text-text-secondary sm:text-[10px]">
                <span className="text-accent">
                  request
                </span>

                {" → "}

                route

                {" → "}

                controller

                {" → "}

                validation

                {" → "}

                <span className="text-cyan">
                  business logic
                </span>

                {" → "}

                eloquent

                {" → "}

                mysql

                {" → "}

                <span className="text-success">
                  response
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="overflow-hidden rounded-[28px] border border-border bg-surface"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5 sm:px-7">
              <div>
                <p className="technical-label">
                  Career Journey
                </p>

                <h3 className="mt-2 font-heading text-2xl font-semibold text-text-primary">
                  From foundation to production.
                </h3>
              </div>

              <GitBranch
                size={19}
                className="text-cyan"
                aria-hidden="true"
              />
            </div>

            <div className="p-6 sm:p-7">
              <div className="relative">
                <motion.div
                  initial={{
                    scaleY: 0,
                  }}
                  whileInView={{
                    scaleY: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-8 left-[18px] top-8 w-px origin-top bg-gradient-to-b from-accent via-cyan to-border"
                  aria-hidden="true"
                />

                <div className="space-y-3">
                  {journeySteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.07,
                      }}
                      className="relative grid grid-cols-[38px_minmax(0,1fr)] gap-4"
                    >
                      <div
                        className={[
                          "relative z-10 flex size-9 items-center justify-center rounded-full border font-code text-[7px]",
                          index >= 2
                            ? "border-accent/30 bg-accent-soft text-accent"
                            : "border-border bg-surface text-text-muted",
                        ].join(" ")}
                      >
                        0{index + 1}
                      </div>

                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        className="rounded-2xl border border-border bg-surface-alt/50 p-4"
                      >
                        <span className="font-code text-[8px] uppercase tracking-[0.12em] text-text-muted">
                          {step.year}
                        </span>

                        <h4 className="mt-2 font-heading text-lg font-semibold text-text-primary">
                          {step.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-text-secondary">
                          {step.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="glass-panel overflow-hidden rounded-[28px]"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#ff6b6b]" />
                <span className="size-2 rounded-full bg-warm" />
                <span className="size-2 rounded-full bg-success" />
              </div>

              <span className="technical-label">
                development.philosophy
              </span>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_230px]">
              <div className="border-b border-border p-5 sm:p-6 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="technical-label">
                      Generic Laravel Example
                    </p>

                    <h3 className="mt-2 font-heading text-xl font-semibold text-text-primary">
                      Keep the flow readable.
                    </h3>
                  </div>

                  <TerminalSquare
                    size={18}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>

                <CodePreview />
              </div>

              <div className="bg-surface-alt/30 p-5 sm:p-6">
                <p className="technical-label">
                  My process
                </p>

                <div className="mt-5 space-y-2.5">
                  {philosophySteps.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.04,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className={[
                          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border font-code text-[7px]",
                          index === 3
                            ? "border-accent/30 bg-accent-soft text-accent"
                            : "border-border bg-surface text-text-muted",
                        ].join(" ")}
                      >
                        0{index + 1}
                      </span>

                      <p className="pt-0.5 text-xs leading-5 text-text-secondary">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-5 overflow-hidden rounded-[28px] border border-accent/20 bg-accent-soft"
        >
          <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="p-6 sm:p-8">
              <p className="technical-label text-accent">
                Development Principle
              </p>

              <h3 className="mt-3 max-w-4xl font-heading text-2xl font-semibold leading-[1.15] tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl">
                A feature is not complete when the code runs.
                It is complete when the workflow makes sense.
              </h3>
            </div>

            <div className="border-t border-accent/15 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <div className="flex items-center gap-3">
                <Code2
                  size={19}
                  className="text-accent"
                  aria-hidden="true"
                />

                <span className="font-code text-[9px] uppercase tracking-[0.13em] text-text-secondary">
                  Logic → Flow → Delivery
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CodePreview() {
  const lines = [
    {
      number: "01",
      content: "public function store(Request $request)",
      type: "primary",
    },
    {
      number: "02",
      content: "{",
      type: "muted",
    },
    {
      number: "03",
      content: "  $validated = $request->validate([",
      type: "normal",
    },
    {
      number: "04",
      content: "    'employee' => 'required',",
      type: "accent",
    },
    {
      number: "05",
      content: "    'date' => 'required|date',",
      type: "accent",
    },
    {
      number: "06",
      content: "  ]);",
      type: "normal",
    },
    {
      number: "07",
      content: "",
      type: "normal",
    },
    {
      number: "08",
      content: "  // business logic",
      type: "comment",
    },
    {
      number: "09",
      content: "",
      type: "normal",
    },
    {
      number: "10",
      content: "  return response()->json([",
      type: "normal",
    },
    {
      number: "11",
      content: "    'status' => true,",
      type: "success",
    },
    {
      number: "12",
      content: "  ]);",
      type: "normal",
    },
    {
      number: "13",
      content: "}",
      type: "muted",
    },
  ];

  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="mt-6 overflow-hidden rounded-2xl border border-border bg-background/65"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <Braces
            size={13}
            className="text-accent"
            aria-hidden="true"
          />

          <span className="font-code text-[8px] text-text-muted">
            ExampleController.php
          </span>
        </div>

        <span className="font-code text-[7px] uppercase tracking-[0.12em] text-success">
          PHP
        </span>
      </div>

      <div className="overflow-x-auto px-4 py-4">
        <pre className="min-w-[520px]">
          {lines.map((line, index) => (
            <motion.div
              key={`${line.number}-${line.content}`}
              initial={{
                opacity: 0,
                x: -6,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.22,
                delay: index * 0.025,
              }}
              className="grid grid-cols-[30px_minmax(0,1fr)] font-code text-[9px] leading-6"
            >
              <span className="select-none text-text-muted/50">
                {line.number}
              </span>

              <code className={getCodeColour(line.type)}>
                {line.content || " "}
              </code>
            </motion.div>
          ))}
        </pre>
      </div>
    </motion.div>
  );
}

function getCodeColour(type) {
  if (type === "primary") {
    return "text-cyan";
  }

  if (type === "accent") {
    return "text-accent";
  }

  if (type === "success") {
    return "text-success";
  }

  if (type === "comment") {
    return "text-text-muted";
  }

  if (type === "muted") {
    return "text-text-secondary";
  }

  return "text-text-primary";
}

export default HowIBuild;