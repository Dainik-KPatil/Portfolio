import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Braces,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  Workflow,
} from "lucide-react";

import profilePlaceholder from "../assets/images/profile-placeholder.svg";

const professionalSnapshot = [
  {
    label: "Primary Focus",
    value: "Backend Development",
  },
  {
    label: "Current Stack",
    value: "PHP / Laravel",
  },
  {
    label: "Development",
    value: "Business Systems",
  },
  {
    label: "Foundation",
    value: "Python / Django",
  },
];

const identityStack = [
  {
    name: "PHP",
    type: "Core",
  },
  {
    name: "Laravel",
    type: "Framework",
  },
  {
    name: "MySQL",
    type: "Database",
  },
  {
    name: "REST APIs",
    type: "Integration",
  },
  {
    name: "JavaScript",
    type: "Frontend",
  },
  {
    name: "React",
    type: "Interface",
  },
];

const focusAreas = [
  {
    label: "Business Logic",
    icon: Workflow,
  },
  {
    label: "Application Flow",
    icon: GitBranch,
  },
  {
    label: "Database Design",
    icon: Database,
  },
  {
    label: "Backend APIs",
    icon: ServerCog,
  },
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
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section
      id="about"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute -right-44 top-40 size-[500px] rounded-full bg-cyan/[0.045] blur-[150px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-56 bottom-0 size-[520px] rounded-full bg-accent/[0.045] blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-container relative">

        {/* =====================================================
            HEADER
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
          className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.55fr)] lg:items-end"
        >
          <div>
            <p className="section-eyebrow">
              About / Professional Identity
            </p>

            <h2
              id="about-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              I DON'T JUST
              <br />

              <span className="section-heading-muted">
                WRITE CODE.
              </span>

              <br />

              <span className="text-gradient-blue">
                I CONNECT SYSTEMS.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="section-copy max-w-xl">
              My work sits between real business requirements,
              application architecture and working software.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN EDITORIAL LAYOUT
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid gap-5 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.1fr)_minmax(280px,0.72fr)]"
        >

          {/* LEFT */}

          <motion.div
            variants={revealVariants}
            className="flex flex-col gap-5"
          >

            <div className="surface-card p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="technical-label">
                  Developer profile
                </p>

                <Braces
                  size={17}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 font-heading text-3xl font-semibold tracking-[-0.04em] text-text-primary">
                Dainik Kishor Patil
              </h3>

              <p className="mt-2 font-code text-[10px] uppercase tracking-[0.15em] text-accent">
                Full Stack Developer
              </p>

              <p className="mt-6 text-sm leading-7 text-text-secondary sm:text-base">
                Backend-focused developer with professional
                experience building and maintaining real-world
                applications using PHP, Laravel, MySQL and
                JavaScript.
              </p>

              <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
                I work extensively with business logic, database
                operations, APIs, data processing, authentication,
                workflows and feature debugging.
              </p>

              <a
                href="#experience"
                className="group mt-7 inline-flex items-center gap-2 font-code text-[9px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors duration-200 hover:text-accent"
              >
                Professional Experience

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.label}
                    className="interactive-card min-h-[125px] p-4"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="text-accent"
                      aria-hidden="true"
                    />

                    <p className="mt-6 font-heading text-sm font-semibold leading-5 text-text-primary">
                      {area.label}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

          {/* IMAGE */}

          <motion.div
            variants={revealVariants}
            className="group relative min-h-[560px] overflow-hidden rounded-[28px] border border-border bg-surface lg:min-h-[680px]"
          >
            <img
              src={profilePlaceholder}
              alt="Placeholder for Dainik Kishor Patil profile"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="glass-panel rounded-2xl p-4">

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="technical-label">
                      Current direction
                    </p>

                    <p className="mt-1 font-heading text-lg font-semibold text-text-primary">
                      Real-world business applications.
                    </p>
                  </div>

                  <Layers3
                    size={20}
                    className="shrink-0 text-cyan"
                    aria-hidden="true"
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={revealVariants}
            className="flex flex-col gap-5"
          >

            <div className="surface-card p-6 sm:p-7">
              <p className="technical-label">
                Snapshot
              </p>

              <div className="mt-5">
                {professionalSnapshot.map(
                  (item, index) => (
                    <SnapshotRow
                      key={item.label}
                      item={item}
                      index={index}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-7">

              <div
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan/[0.08] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative">

                <p className="font-code text-[9px] font-semibold uppercase tracking-[0.17em] text-accent">
                  Development mindset
                </p>

                <p className="mt-5 font-heading text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-text-primary">
                  Understand the requirement.
                  <br />
                  Design the flow.
                  <br />
                  Build the logic.
                  <br />
                  Deliver the feature.
                </p>

              </div>
            </div>

          </motion.div>

        </motion.div>

        {/* =====================================================
            PROFESSIONAL IDENTITY STRIP
        ====================================================== */}

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
            amount: 0.45,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface"
        >

          <div className="flex flex-col border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-accent" />

              <span className="technical-label">
                Professional Identity
              </span>
            </div>

            <span className="mt-2 font-code text-[8px] uppercase tracking-[0.14em] text-text-muted sm:mt-0">
              Core → Interface
            </span>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {identityStack.map(
              (technology, index) => (
                <IdentityItem
                  key={technology.name}
                  technology={technology}
                  index={index}
                />
              ),
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

function SnapshotRow({
  item,
  index,
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-border py-4 first:pt-0 last:border-b-0 last:pb-0">

      <div className="flex items-center gap-3">

        <span className="font-code text-[8px] text-text-muted">
          0{index + 1}
        </span>

        <span className="text-sm text-text-secondary">
          {item.label}
        </span>

      </div>

      <span className="text-right font-heading text-sm font-semibold text-text-primary">
        {item.value}
      </span>

    </div>
  );
}

function IdentityItem({
  technology,
  index,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className={[
        "group relative min-h-[132px] border-border p-5 transition-colors duration-200 hover:bg-surface-hover",
        index < 5
          ? "border-b xl:border-b-0 xl:border-r"
          : "",
        index % 2 === 0
          ? "sm:border-r lg:border-r"
          : "",
      ].join(" ")}
    >

      <div className="flex items-start justify-between gap-4">

        <span className="font-code text-[8px] uppercase tracking-[0.13em] text-text-muted">
          {technology.type}
        </span>

        <span className="size-1.5 rounded-full bg-border-strong transition-colors duration-200 group-hover:bg-accent" />

      </div>

      <p className="mt-7 font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary transition-colors duration-200 group-hover:text-accent">
        {technology.name}
      </p>

    </motion.div>
  );
}

export default About;