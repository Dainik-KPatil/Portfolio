import { motion } from "framer-motion";

import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

const educationDetails = [
  {
    label: "Degree",
    value: "B.Sc. Information Technology",
    icon: GraduationCap,
  },
  {
    label: "University",
    value: "University of Mumbai",
    icon: BookOpen,
  },
  {
    label: "Year",
    value: "2023",
    icon: CalendarDays,
  },
  {
    label: "CGPI",
    value: "8.52",
    icon: Sparkles,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="section-shell relative overflow-hidden border-t border-border bg-surface-alt/30"
      aria-labelledby="education-heading"
    >
      <div
        className="pointer-events-none absolute -left-48 top-20 size-[460px] rounded-full bg-accent/[0.04] blur-[150px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-0 size-[480px] rounded-full bg-cyan/[0.035] blur-[150px]"
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
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.58fr)] lg:items-end"
        >
          <div>
            <p className="section-eyebrow">
              Education
            </p>

            <h2
              id="education-heading"
              className="section-heading mt-5 max-w-4xl"
            >
              BUILT THE
              <br />

              <span className="section-heading-muted">
                FOUNDATION.
              </span>

              <br />

              <span className="text-gradient-blue">
                THEN KEPT BUILDING.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            My academic foundation in Information Technology gave me the base
            for programming, databases, systems and software development that
            later grew through professional experience.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 overflow-hidden rounded-[30px] border border-border bg-surface"
        >
          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="relative border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div
                className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full bg-accent/[0.05] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-code text-[9px] font-semibold uppercase tracking-[0.15em] text-accent">
                    Academic Foundation
                  </span>

                  <span className="h-px w-10 bg-border-strong" />
                </div>

                <h3 className="mt-6 max-w-3xl font-heading text-[clamp(2.7rem,5vw,5.4rem)] font-bold leading-[0.92] tracking-[-0.055em] text-text-primary">
                  B.Sc.
                  <br />
                  Information
                  <br />
                  Technology
                  <span className="text-accent">.</span>
                </h3>

                <div className="mt-8 flex items-center gap-3">
                  <MapPin
                    size={16}
                    className="text-cyan"
                    aria-hidden="true"
                  />

                  <p className="font-code text-[9px] uppercase tracking-[0.12em] text-text-secondary">
                    University of Mumbai
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2">
              {educationDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={[
                      "group min-h-[180px] border-border p-5 sm:p-6 lg:min-h-[210px]",
                      index % 2 === 0
                        ? "border-r"
                        : "",
                      index < 2
                        ? "border-b"
                        : "",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <span className="technical-label">
                        {item.label}
                      </span>

                      <Icon
                        size={16}
                        strokeWidth={1.8}
                        className="text-text-muted transition-colors duration-200 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-10 font-heading text-xl font-semibold leading-tight tracking-[-0.03em] text-text-primary sm:text-2xl">
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="technical-label">
            Education → Experience
          </span>

          <p className="max-w-3xl text-sm leading-6 text-text-secondary sm:text-right">
            Academic learning created the foundation; professional development
            turned it into practical backend and full-stack experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;