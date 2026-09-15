import { motion } from "framer-motion";
import HrmsPreview from "../assets/images/hrms-preview.png";

const technologies = [
  {
    name: "PHP",
    image: "/tech/php.png",
    fallback: "PHP",
  },
  {
    name: "Laravel",
    image: "/tech/laravel.png",
    fallback: "L",
  },
  {
    name: "MySQL",
    image: "/tech/mysql.png",
    fallback: "SQL",
  },
  {
    name: "JavaScript",
    image: "/tech/javascript.png",
    fallback: "JS",
  },
  {
    name: "Bootstrap",
    image: "/tech/bootstrap.png",
    fallback: "B",
  },
  {
    name: "REST API",
    image: "/tech/rest-api.png",
    fallback: "API",
  },
];

const backendFeatures = [
  "Backend business logic",
  "Attendance & biometric processing",
  "Database operations",
  "AJAX & API workflows",
  "Salary-related processing",
  "Validation & debugging",
];

const scopeItems = [
  "User privileges",
  "Data algorithms",
  "Business rules",
  "Attendance",
  "Payroll",
  "Workflow logic",
];

const reveal = {
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
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="experience-heading"
    >
      {/* Background */}

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.1]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-56 top-20 size-[520px] rounded-full bg-accent/[0.045] blur-[170px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-10 size-[480px] rounded-full bg-accent/[0.03] blur-[160px]"
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
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.6fr)] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />

              <span className="section-eyebrow">
                Professional Experience
              </span>
            </div>

            <h2
              id="experience-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              BUILDING
              <br />

              <span className="section-heading-muted">
                REAL BUSINESS
              </span>

              <br />

              <span className="text-gradient-blue">
                SYSTEMS.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="section-copy max-w-xl">
              My current work focuses on building and evolving
              business-critical PHP and Laravel systems where
              application logic, calculations, data and workflows
              must work together reliably.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SINGLE EXPERIENCE GLASS VIEW
        ====================================================== */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="relative mt-14 overflow-hidden rounded-[30px] border border-border bg-surface/70 backdrop-blur-xl"
        >
          {/* Glass accent */}

          <div
            className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-accent/[0.055] blur-[140px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute left-0 top-0 h-px w-[65%] bg-gradient-to-r from-accent via-accent/30 to-transparent"
            aria-hidden="true"
          />

          {/* =================================================
              EXPERIENCE IDENTITY
          ================================================== */}

          <div className="relative flex flex-col gap-5 border-b border-border px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Feb 2025 — Present
              </p>

              <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-heading text-2xl font-bold tracking-[-0.04em] text-text-primary sm:text-3xl">
                  ISBM Group
                </h3>

                <span className="font-code text-[8px] uppercase tracking-[0.12em] text-text-muted">
                  Mumbai
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-text-secondary sm:text-base">
                Web Developer / PHP Laravel Developer
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-25" />

                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>

              <span className="font-code text-[8px] font-semibold uppercase tracking-[0.13em] text-text-muted">
                Current Role
              </span>
            </div>
          </div>

          {/* =================================================
              IMAGE + PROJECT IDENTITY
          ================================================== */}

          <div className="relative grid gap-0 xl:grid-cols-[minmax(0,1.48fr)_minmax(300px,0.72fr)]">

            {/* HRMS Preview */}

            <motion.div
              initial={{
                opacity: 0,
                x: -18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
              }}
              className="relative overflow-hidden border-b border-border xl:border-b-0 xl:border-r"
            >
              <div className="relative aspect-[16/8.7] overflow-hidden bg-background/45">
                <img
                  src={HrmsPreview}
                  alt="HRMS application interface developed as part of my professional work"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.015]"
                />

                {/* image overlay */}

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
                  aria-hidden="true"
                />

                {/* corner project label */}

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/70 px-3 py-2 backdrop-blur-xl sm:bottom-5 sm:left-5">
                  <span className="size-1.5 rounded-full bg-accent" />

                  <span className="font-code text-[7px] font-semibold uppercase tracking-[0.13em] text-text-secondary">
                    Internal Business System
                  </span>
                </div>
              </div>
            </motion.div>

            {/* HRMS identity */}

            <motion.div
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.05,
              }}
              className="relative flex flex-col justify-center px-5 py-7 sm:px-7 lg:px-8"
            >
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Primary System
              </p>

              <h3 className="mt-3 font-heading text-[clamp(2.8rem,5vw,5.4rem)] font-bold leading-none tracking-[-0.06em] text-text-primary">
                HRMS
                <span className="text-accent">.</span>
              </h3>

              <p className="mt-2 text-sm text-text-secondary">
                Human Resource Management System
              </p>

              {/* Transparent technology badges */}

              <div className="mt-7">
                <p className="font-code text-[7px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Built with
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-4">
                  {technologies.map((technology) => (
                    <TechnologyBadge
                      key={technology.name}
                      technology={technology}
                    />
                  ))}
                </div>
              </div>

              {/* Scope */}

              <div className="mt-7 border-t border-border pt-5">
                <p className="font-code text-[7px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  System scope
                </p>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {scopeItems.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 text-xs text-text-secondary"
                    >
                      <span className="size-1 rounded-full bg-accent/70" />

                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <div className="relative border-t border-border px-5 py-7 sm:px-7 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                  The Work
                </p>

                <h4 className="mt-2 font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary">
                  Business logic first.
                </h4>
              </div>

              <p className="max-w-4xl text-sm leading-7 text-text-secondary sm:text-[15px]">
                I built the HRMS around the organisation&apos;s actual
                operational requirements, including calculation-heavy
                processes, interconnected modules and role-based workflows.
                The work involved designing the application architecture,
                structuring the data flow and implementing the complete
                process from input to final business output.
              </p>
            </div>
          </div>

          {/* =================================================
              BACKEND HEAVY FEATURES
          ================================================== */}

          <div className="relative border-t border-border px-5 py-7 sm:px-7 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Development Focus
                </p>

                <h4 className="mt-2 max-w-[200px] font-heading text-xl font-semibold leading-tight tracking-[-0.03em] text-text-primary">
                  Backend-heavy feature development.
                </h4>
              </div>

              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
                {backendFeatures.map((item, index) => (
                  <FeatureItem
                    key={item}
                    index={index}
                    title={item}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM EXPERIENCE META
          ================================================== */}

          <div className="relative flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-8">
            <span className="font-code text-[7px] font-semibold uppercase tracking-[0.15em] text-text-muted">
              Architecture → Logic → Data → Workflow → Delivery
            </span>

            <span className="font-code text-[7px] uppercase tracking-[0.14em] text-text-muted">
              PHP / Laravel / MySQL
            </span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

/* =========================================================
   TECHNOLOGY BADGE
========================================================= */

function TechnologyBadge({
  technology,
}) {
  return (
    <div className="group flex items-center gap-2">
      <div className="flex size-7 items-center justify-center">
        <img
          src={technology.image}
          alt={`${technology.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-7 max-w-7 object-contain transition-transform duration-200 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.style.display = "none";

            const fallback =
              event.currentTarget.nextElementSibling;

            if (fallback) {
              fallback.style.display = "flex";
            }
          }}
        />

        <span
          className="hidden size-7 items-center justify-center font-code text-[8px] font-bold text-accent"
          aria-hidden="true"
        >
          {technology.fallback}
        </span>
      </div>

      <span className="font-code text-[8px] font-medium uppercase tracking-[0.08em] text-text-secondary">
        {technology.name}
      </span>
    </div>
  );
}

/* =========================================================
   FEATURE ITEM
========================================================= */

function FeatureItem({
  index,
  title,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
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
        delay: index * 0.04,
      }}
      className="group flex items-start gap-3"
    >
      <span className="mt-[2px] font-code text-[8px] font-semibold text-accent">
        {String(index + 1).padStart(
          2,
          "0",
        )}
      </span>

      <div>
        <p className="text-sm font-medium leading-6 text-text-primary transition-colors duration-200 group-hover:text-accent">
          {title}
        </p>

        <span className="mt-2 block h-px w-8 bg-border-strong transition-all duration-300 group-hover:w-14 group-hover:bg-accent" />
      </div>
    </motion.div>
  );
}

export default Experience;