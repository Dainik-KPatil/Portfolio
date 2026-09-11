import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers3,
  ServerCog,
  Workflow,
} from "lucide-react";

const currentRoleHighlights = [
  {
    title: "Business Systems",
    description:
      "HRMS, attendance, payroll, recruitment, lead management and operational workflows.",
    icon: Layers3,
  },
  {
    title: "Backend Development",
    description:
      "Laravel controllers, models, validation, authentication, APIs and business logic.",
    icon: ServerCog,
  },
  {
    title: "Data & Processing",
    description:
      "MySQL, Eloquent, Query Builder, imports, salary-related data and application records.",
    icon: Database,
  },
  {
    title: "Application Delivery",
    description:
      "AJAX workflows, debugging, file handling, PDF generation and feature integration.",
    icon: Workflow,
  },
];

const workflowItems = [
  "Requirement",
  "Data",
  "Logic",
  "Database",
  "Interface",
  "Delivery",
];

const previousExperience = [
  {
    label: "Python / Django",
    description:
      "Built backend foundations through web applications, CRUD workflows, authentication and APIs.",
  },
  {
    label: "Flask / APIs",
    description:
      "Worked with lightweight backend applications, integrations and database-driven development.",
  },
  {
    label: "Scraping / Automation",
    description:
      "Developed practical data extraction and processing workflows using Python.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
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
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="section-shell relative overflow-hidden border-t border-border bg-surface-alt/30"
      aria-labelledby="experience-heading"
    >
      <div
        className="pointer-events-none absolute -left-56 top-20 size-[540px] rounded-full bg-accent/[0.045] blur-[160px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-16 size-[500px] rounded-full bg-cyan/[0.04] blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-container relative">

        {/* Header */}
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.6fr)] lg:items-end"
        >
          <div>
            <p className="section-eyebrow">
              Professional Experience
            </p>

            <h2
              id="experience-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              REAL WORK.
              <br />

              <span className="section-heading-muted">
                REAL SYSTEMS.
              </span>

              <br />

              <span className="text-gradient-blue">
                CONTINUOUS DELIVERY.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            My strongest professional experience is in building and
            maintaining PHP/Laravel applications where backend logic,
            data flow and business workflows have to work together.
          </p>
        </motion.div>

        {/* Current Role */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid gap-5 xl:grid-cols-[minmax(0,1.22fr)_minmax(340px,0.78fr)]"
        >
          <motion.article
            variants={revealVariants}
            className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-6 sm:p-8 lg:p-10"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/[0.06] blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-code text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
                    Feb 2025 — Present
                  </p>

                  <h3 className="mt-4 font-heading text-4xl font-bold tracking-[-0.045em] text-text-primary sm:text-5xl">
                    ISBM Group
                  </h3>

                  <p className="mt-2 text-base font-medium text-text-secondary sm:text-lg">
                    Web Developer / PHP Laravel Developer
                  </p>
                </div>

                <div className="flex size-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent">
                  <Code2
                    size={21}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <p className="mt-7 max-w-3xl text-base leading-8 text-text-secondary sm:text-lg">
                Building and maintaining real-world business
                applications across employee management, attendance,
                payroll, recruitment, lead operations and other
                workflow-driven systems using PHP, Laravel and MySQL.
              </p>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {currentRoleHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-border bg-surface-alt/55 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <Icon
                          size={18}
                          strokeWidth={1.8}
                          className="text-accent"
                          aria-hidden="true"
                        />

                        <span className="size-1.5 rounded-full bg-border-strong transition-colors duration-200 group-hover:bg-cyan" />
                      </div>

                      <h4 className="mt-6 font-heading text-lg font-semibold tracking-[-0.025em] text-text-primary">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.article>

          {/* Live workflow style panel */}
          <motion.aside
            variants={revealVariants}
            className="glass-panel overflow-hidden rounded-[28px]"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#ff6b6b]" />
                <span className="size-2 rounded-full bg-warm" />
                <span className="size-2 rounded-full bg-success" />
              </div>

              <span className="technical-label">
                work.flow
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="technical-label">
                    How the work moves
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold text-text-primary">
                    From requirement to working feature.
                  </h3>
                </div>

                <GitBranch
                  size={19}
                  className="shrink-0 text-cyan"
                  aria-hidden="true"
                />
              </div>

              <div className="relative mt-7">
                <div
                  className="absolute bottom-4 left-[15px] top-4 w-px bg-border"
                  aria-hidden="true"
                />

                <div className="space-y-3">
                  {workflowItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 12,
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
                        delay: index * 0.06,
                      }}
                      className="relative flex items-center gap-3"
                    >
                      <span
                        className={[
                          "relative z-10 flex size-8 items-center justify-center rounded-full border font-code text-[8px]",
                          index === 2 || index === 3
                            ? "border-accent/35 bg-accent-soft text-accent"
                            : "border-border bg-surface text-text-muted",
                        ].join(" ")}
                      >
                        0{index + 1}
                      </span>

                      <div className="flex min-h-11 flex-1 items-center justify-between rounded-xl border border-border bg-surface-alt/55 px-3.5">
                        <span className="font-code text-[9px] uppercase tracking-[0.1em] text-text-secondary">
                          {item}
                        </span>

                        <ArrowDownRight
                          size={12}
                          className="text-text-muted"
                          aria-hidden="true"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-border bg-background/55 p-4">
                <p className="font-code text-[9px] leading-6 text-text-secondary">
                  <span className="text-accent">
                    requirement
                  </span>
                  {" → "}
                  <span className="text-text-primary">
                    implementation
                  </span>
                  {" → "}
                  <span className="text-cyan">
                    debugging
                  </span>
                  {" → "}
                  <span className="text-success">
                    delivery
                  </span>
                </p>
              </div>
            </div>
          </motion.aside>
        </motion.div>

        {/* Earlier experience */}
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
          className="mt-8 grid gap-5 lg:grid-cols-[minmax(260px,0.5fr)_minmax(0,1.5fr)]"
        >
          <div className="rounded-2xl border border-border bg-background/40 p-6 sm:p-7">
            <p className="technical-label">
              Earlier Foundation
            </p>

            <h3 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.035em] text-text-primary">
              Python / Django
            </h3>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              My earlier backend experience helped build the foundation
              I now apply continuously in Laravel-based business systems.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Braces
                size={15}
                className="text-accent"
                aria-hidden="true"
              />

              <span className="font-code text-[9px] uppercase tracking-[0.12em] text-text-muted">
                Backend foundation
              </span>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {previousExperience.map((item, index) => (
              <motion.article
                key={item.label}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group rounded-2xl border border-border bg-surface p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-code text-[8px] text-text-muted">
                    0{index + 1}
                  </span>

                  <FileCode2
                    size={16}
                    className="text-text-muted transition-colors duration-200 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mt-7 font-heading text-lg font-semibold text-text-primary">
                  {item.label}
                </h4>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-8 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="technical-label">
            Current direction
          </span>

          <p className="max-w-3xl text-sm leading-6 text-text-secondary sm:text-right">
            PHP and Laravel are now the centre of my professional
            development work, supported by a broader backend foundation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;