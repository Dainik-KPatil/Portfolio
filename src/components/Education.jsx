import { motion } from "framer-motion";

const schoolEducation = [
  {
    number: "01",
    level: "SSC",
    subtitle: "Secondary School Certificate",
    score: "79.80",
  },
  {
    number: "02",
    level: "HSC",
    subtitle: "Higher Secondary Certificate",
    score: "69.85",
  },
];

const graduationDetails = [
  {
    label: "Degree",
    value: "B.Sc. IT",
  },
  {
    label: "University",
    value: "University of Mumbai",
  },
  {
    label: "Year",
    value: "2023",
  },
  {
    label: "CGPI",
    value: "8.52",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 22,
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

function Education() {
  return (
    <section
      id="education"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="education-heading"
    >
      {/* Background */}

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-48 top-32 size-[520px] rounded-full bg-accent/[0.045] blur-[170px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-16 size-[480px] rounded-full bg-accent/[0.035] blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

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
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />

              <span className="section-eyebrow">
                Education
              </span>
            </div>

            <h2
              id="education-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              ACADEMIC
              <br />

              <span className="section-heading-muted">
                FOUNDATION.
              </span>

              <br />

              <span className="text-gradient-blue">
                BUILT FOR TECH.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            From foundational academics to Information Technology,
            each stage contributed to the technical base behind my
            professional development journey.
          </p>
        </motion.div>

        {/* =====================================================
            EDUCATION RECORDS
        ====================================================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14"
        >
          {/* =================================================
              ROW 1 — SSC + HSC
          ================================================== */}

          <div className="grid gap-4 lg:grid-cols-2">
            {schoolEducation.map((item, index) => (
              <SchoolRecord
                key={item.level}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              ROW 2 — GRADUATION
          ================================================== */}

          <GraduationRecord />
        </motion.div>

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
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
          className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-5">
            <span className="font-code text-[8px] font-semibold uppercase tracking-[0.22em] text-text-muted">
              Learn
            </span>

            <span className="text-[9px] text-text-muted">
              /
            </span>

            <span className="font-code text-[8px] font-semibold uppercase tracking-[0.22em] text-text-muted">
              Build
            </span>

            <span className="text-[9px] text-text-muted">
              /
            </span>

            <span className="font-code text-[8px] font-semibold uppercase tracking-[0.22em] text-text-muted">
              Grow
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-code text-[8px] uppercase tracking-[0.17em] text-text-muted">
              Education never ends
            </span>

            <span className="h-px w-8 bg-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SSC / HSC RECORD
========================================================= */

function SchoolRecord({
  item,
  index,
}) {
  return (
    <motion.article
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
        duration: 0.45,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="group relative overflow-hidden rounded-[22px] border border-border bg-surface/75 backdrop-blur-xl"
    >
      {/* subtle background accent */}

      <div
        className="pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-accent/[0.045] blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative grid min-h-[145px] grid-cols-[72px_minmax(0,1fr)] sm:grid-cols-[78px_minmax(0,1fr)_210px]">
        {/* Number rail */}

        <div className="relative flex justify-center border-r border-border/70">
          <div className="absolute bottom-0 top-0 left-1/2 w-px -translate-x-1/2 bg-border/80" />

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.35,
              delay: 0.1 + index * 0.06,
            }}
            className="relative z-10 mt-5 flex size-10 items-center justify-center rounded-full border border-accent bg-background font-code text-[11px] font-semibold text-accent shadow-[0_0_20px_rgba(239,68,68,0.08)]"
          >
            {item.number}
          </motion.div>

          <span
            className="absolute bottom-7 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_rgba(239,68,68,0.75)]"
            aria-hidden="true"
          />
        </div>

        {/* Education info */}

        <div className="flex flex-col justify-center px-5 py-6 sm:px-7">
          <span className="font-code text-[8px] font-semibold uppercase tracking-[0.24em] text-text-muted">
            School Education
          </span>

          <h3 className="mt-3 font-heading text-3xl font-bold tracking-[-0.04em] text-text-primary">
            {item.level}
          </h3>

          <p className="mt-1 text-sm text-text-secondary">
            {item.subtitle}
          </p>
        </div>

        {/* Marks */}

        <div className="col-span-2 flex items-center border-t border-border/70 px-5 py-5 sm:col-span-1 sm:border-l sm:border-t-0 sm:px-7">
          <div className="flex w-full items-center gap-5">
            <span
              className="h-12 w-[3px] shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />

            <div>
              <span className="font-code text-[8px] font-semibold uppercase tracking-[0.22em] text-text-muted">
                Marks
              </span>

              <div className="mt-2 flex items-start">
                <span className="font-heading text-[clamp(2rem,3vw,2.9rem)] font-bold leading-none tracking-[-0.045em] text-text-primary">
                  {item.score}
                </span>

                <span className="ml-1 mt-1 font-heading text-xl font-bold text-accent">
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   GRADUATION RECORD
========================================================= */

function GraduationRecord() {
  return (
    <motion.article
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
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="group relative mt-4 overflow-hidden rounded-[22px] border border-border bg-surface/75 backdrop-blur-xl"
    >
      {/* glow */}

      <div
        className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-accent/[0.05] blur-[90px]"
        aria-hidden="true"
      />

      <div className="relative grid lg:grid-cols-[72px_minmax(260px,1.1fr)_minmax(0,1.6fr)]">
        {/* Number rail */}

        <div className="relative hidden min-h-[160px] justify-center border-r border-border/70 lg:flex">
          <div className="absolute bottom-0 top-0 left-1/2 w-px -translate-x-1/2 bg-border/80" />

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.35,
              delay: 0.16,
            }}
            className="relative z-10 mt-5 flex size-10 items-center justify-center rounded-full border border-accent bg-background font-code text-[11px] font-semibold text-accent shadow-[0_0_20px_rgba(239,68,68,0.08)]"
          >
            03
          </motion.div>

          <span
            className="absolute bottom-7 left-1/2 size-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_rgba(239,68,68,0.75)]"
            aria-hidden="true"
          />
        </div>

        {/* Main graduation */}

        <div className="flex flex-col justify-center border-b border-border/70 px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3 lg:hidden">
            <span className="flex size-9 items-center justify-center rounded-full border border-accent bg-background font-code text-[10px] font-semibold text-accent">
              03
            </span>

            <span className="font-code text-[8px] font-semibold uppercase tracking-[0.22em] text-text-muted">
              Graduation
            </span>
          </div>

          <span className="hidden font-code text-[8px] font-semibold uppercase tracking-[0.22em] text-text-muted lg:block">
            Graduation
          </span>

          <h3 className="mt-4 font-heading text-[clamp(1.7rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.04em] text-text-primary">
            B.Sc. Information Technology
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <span
              className="size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />

            <span className="text-sm text-text-secondary">
              University of Mumbai
            </span>
          </div>
        </div>

        {/* Detail row */}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {graduationDetails.map((item, index) => (
            <GraduationDetail
              key={item.label}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   GRADUATION DETAIL
========================================================= */

function GraduationDetail({
  item,
  index,
}) {
  return (
    <motion.div
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
        duration: 0.35,
        delay: 0.12 + index * 0.05,
      }}
      className={[
        "group/detail relative flex min-h-[125px] items-center px-5 py-5 sm:px-6",
        index % 2 === 0
          ? "border-r border-border/70"
          : "",
        index < 2
          ? "border-b border-border/70 xl:border-b-0"
          : "",
        index < 3
          ? "xl:border-r xl:border-border/70"
          : "",
      ].join(" ")}
    >
      <div className="flex items-center gap-4">
        <span
          className="h-11 w-[3px] shrink-0 rounded-full bg-accent"
          aria-hidden="true"
        />

        <div>
          <span className="font-code text-[7px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            {item.label}
          </span>

          <p
            className={[
              "mt-2 font-heading font-semibold leading-tight tracking-[-0.025em] text-text-primary",
              item.label === "University"
                ? "text-sm sm:text-base"
                : item.label === "Degree"
                  ? "text-base sm:text-lg"
                  : "text-xl sm:text-2xl",
            ].join(" ")}
          >
            {item.value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;