import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BadgeCheck,
  Database,
  Fingerprint,
  KeyRound,
  Network,
  UsersRound,
  WalletCards,
  Workflow,
} from "lucide-react";

import hrmsPlaceholder from "../assets/images/hrms-placeholder.svg";

const technologies = [
  "PHP",
  "Laravel",
  "MySQL",
  "AJAX",
  "REST APIs",
];

const modules = [
  {
    label: "Employees",
    icon: UsersRound,
  },
  {
    label: "Attendance",
    icon: Fingerprint,
  },
  {
    label: "Leave",
    icon: BadgeCheck,
  },
  {
    label: "Payroll",
    icon: WalletCards,
  },
  {
    label: "Data",
    icon: Database,
  },
  {
    label: "Access",
    icon: KeyRound,
  },
];

const workAreas = [
  "Backend business logic",
  "Attendance & biometric processing",
  "Database operations",
  "AJAX & API workflows",
  "Salary-related processing",
  "Validation & debugging",
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

function SelectedWork() {
  return (
    <section
      id="work"
      className="section-shell relative overflow-hidden border-t border-border bg-surface-alt/30"
      aria-labelledby="work-heading"
    >
      <div
        className="pointer-events-none absolute -left-48 top-32 size-[520px] rounded-full bg-accent/[0.045] blur-[160px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-48 bottom-20 size-[520px] rounded-full bg-cyan/[0.04] blur-[150px]"
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.6fr)] lg:items-end"
        >
          <div>
            <p className="section-eyebrow">
              Selected Work
            </p>

            <h2
              id="work-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              ONE SYSTEM.
              <br />

              <span className="section-heading-muted">
                MANY CONNECTED
              </span>

              <br />

              <span className="text-gradient-blue">
                BUSINESS FLOWS.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            HRMS is the strongest example of my current work because
            it combines backend development, data processing,
            business logic, APIs and interconnected operational
            workflows.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14"
        >
          <motion.article
            variants={revealVariants}
            className="overflow-hidden rounded-[30px] border border-border bg-surface"
          >
            <div className="grid gap-8 border-b border-border p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:p-10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-code text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
                    01 / Flagship System
                  </span>

                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: 40,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="h-px bg-border-strong"
                  />
                </div>

                <h3 className="mt-5 font-heading text-[clamp(3.3rem,7vw,7.2rem)] font-bold leading-[0.82] tracking-[-0.065em] text-text-primary">
                  HRMS
                  <span className="text-accent">.</span>
                </h3>

                <p className="mt-3 font-heading text-lg font-medium text-text-secondary sm:text-2xl">
                  Human Resource Management System
                </p>
              </div>

              <div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-full border border-border bg-surface-alt px-3 py-2 font-code text-[8px] font-medium uppercase tracking-[0.11em] text-text-secondary"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-border bg-background"
              >
                <motion.img
                  whileHover={{
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={hrmsPlaceholder}
                  alt="Portfolio mockup representing the HRMS application interface"
                  className="w-full"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="glass-panel max-w-md rounded-2xl p-4">
                    <p className="technical-label">
                      Portfolio Preview
                    </p>

                    <p className="mt-1 text-sm font-medium text-text-primary">
                      Sanitised application representation
                    </p>
                  </div>

                  <div className="glass-panel hidden rounded-2xl px-4 py-3 sm:block">
                    <p className="font-code text-[8px] uppercase tracking-[0.12em] text-success">
                      Business system / Active
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid border-t border-border xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
              <div className="border-b border-border p-6 sm:p-8 xl:border-b-0 xl:border-r lg:p-10">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="technical-label">
                      What the system covers
                    </p>

                    <h4 className="mt-3 max-w-2xl font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary sm:text-3xl">
                      Connected workflows instead of isolated features.
                    </h4>
                  </div>

                  <Workflow
                    size={21}
                    className="hidden shrink-0 text-cyan sm:block"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-text-secondary sm:text-base">
                  The application handles connected operational areas
                  including employee records, attendance, biometric
                  processing, leave workflows, payroll, salary-related
                  operations and role-based access.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {modules.map((module, index) => {
                    const Icon = module.icon;

                    return (
                      <motion.div
                        key={module.label}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.015,
                        }}
                        className="group rounded-2xl border border-border bg-surface-alt/55 p-4 transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover"
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.8}
                          className="text-accent"
                          aria-hidden="true"
                        />

                        <p className="mt-5 font-heading text-sm font-semibold text-text-primary">
                          {module.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="technical-label">
                      My contribution
                    </p>

                    <h4 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary">
                      Backend-heavy feature development.
                    </h4>
                  </div>

                  <Network
                    size={20}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-7 space-y-3">
                  {workAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{
                        opacity: 0,
                        x: 10,
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
                      whileHover={{
                        x: 4,
                      }}
                      className="flex items-center gap-4 rounded-xl border border-border bg-surface-alt/45 px-4 py-3"
                    >
                      <span className="font-code text-[8px] text-text-muted">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-text-secondary">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-accent/20 bg-accent-soft p-5">
                  <p className="technical-label text-accent">
                    The important part
                  </p>

                  <p className="mt-3 text-sm leading-7 text-text-secondary">
                    The work is not limited to creating screens. It
                    requires understanding how business rules, data,
                    users and connected modules affect each other.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={revealVariants}
            className="mt-5 overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="grid md:grid-cols-5">
              <ProcessItem
                number="01"
                title="Requirement"
              />

              <ProcessItem
                number="02"
                title="Workflow"
              />

              <ProcessItem
                number="03"
                title="Backend"
                active
              />

              <ProcessItem
                number="04"
                title="Database"
              />

              <ProcessItem
                number="05"
                title="Delivery"
              />
            </div>
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="max-w-3xl text-xs leading-5 text-text-muted">
              The visual is a portfolio mockup and does not expose
              actual employee records, confidential business
              information or internal company data.
            </p>

            <a
              href="#architecture"
              className="group inline-flex shrink-0 items-center gap-2 font-code text-[9px] font-semibold uppercase tracking-[0.13em] text-text-primary transition-colors hover:text-accent"
            >
              How I Build

              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessItem({
  number,
  title,
  active = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className={[
        "relative min-h-[115px] border-b border-border p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
        active ? "bg-accent-soft" : "",
      ].join(" ")}
    >
      {active && (
        <motion.span
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
            duration: 0.6,
          }}
          className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      )}

      <span
        className={[
          "font-code text-[8px]",
          active
            ? "text-accent"
            : "text-text-muted",
        ].join(" ")}
      >
        {number}
      </span>

      <p
        className={[
          "mt-6 font-heading text-lg font-semibold",
          active
            ? "text-accent"
            : "text-text-primary",
        ].join(" ")}
      >
        {title}
      </p>
    </motion.div>
  );
}

export default SelectedWork;