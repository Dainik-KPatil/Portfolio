import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "HRMS",
    description:
      "Human resource, attendance, payroll and employee workflow management.",
  },
  {
    number: "02",
    name: "Insity",
    description:
      "Lead allocation and counsellor workflow application.",
  },
  {
    number: "03",
    name: "Compliance Documents",
    description:
      "Print-document workflow application for the compliance team.",
  },
  {
    number: "04",
    name: "Tudu",
    description:
      "Internal task assignment and work-tracking system.",
  },
  {
    number: "05",
    name: "Web Platforms",
    description:
      "Websites and landing pages for multiple education-focused entities.",
  },
];

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
    name: "Core PHP",
    image: "/tech/php.png",
    fallback: "PHP",
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
    name: "Blade",
    image: "/tech/laravel.png",
    fallback: "BLD",
  },
  {
    name: "Bootstrap",
    image: "/tech/bootstrap.png",
    fallback: "B",
  },
  {
    name: "Tailwind",
    image: "/tech/tailwind.png",
    fallback: "TW",
  },
  {
    name: "REST API",
    image: "/tech/rest-api.png",
    fallback: "API",
  },
  {
    name: "React",
    image: "/tech/react.png",
    fallback: "R",
  },
];

const deploymentTools = [
  "cPanel",
  "WHM",
  "Plesk",
  "Hostinger",
  "Cloud Servers",
];

const growthItems = [
  {
    number: "01",
    title: "Web Fundamentals",
    description:
      "Stronger understanding of complete browser-to-backend application behaviour.",
  },
  {
    number: "02",
    title: "Clean Architecture",
    description:
      "Better separation of responsibilities across controllers, models and application logic.",
  },
  {
    number: "03",
    title: "Data Segregation",
    description:
      "Structuring application data clearly across entities, relationships and workflows.",
  },
  {
    number: "04",
    title: "Application Flow",
    description:
      "Designing predictable flow from requirement and input through processing and output.",
  },
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
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-52 top-24 size-[520px] rounded-full bg-accent/[0.045] blur-[170px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-16 size-[500px] rounded-full bg-accent/[0.03] blur-[170px]"
        aria-hidden="true"
      />

      <div className="site-container relative">

        {/* =====================================================
            SECTION HEADER
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.62fr)] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="section-eyebrow">
                Professional Experience
              </span>
            </div>

            <h2
              id="experience-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              BUILDING SYSTEMS
              <br />

              <span className="section-heading-muted">
                THAT RUN THE
              </span>

              <br />

              <span className="text-gradient-blue">
                BUSINESS.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            My current professional work is centred around developing,
            maintaining and evolving practical business applications with
            strong backend logic, structured data and clearly defined
            application flow.
          </p>
        </motion.div>

        {/* =====================================================
            EXPERIENCE GLASS
        ====================================================== */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative mt-14 overflow-hidden rounded-[30px] border border-border bg-surface/72 backdrop-blur-xl"
        >
          {/* red top accent */}

          <div
            className="pointer-events-none absolute left-0 top-0 z-20 h-px w-[72%] bg-gradient-to-r from-accent via-accent/35 to-transparent"
            aria-hidden="true"
          />

          {/* ambient glow */}

          <div
            className="pointer-events-none absolute -right-20 -top-32 size-[420px] rounded-full bg-accent/[0.055] blur-[150px]"
            aria-hidden="true"
          />

          {/* =================================================
              ROLE HEADER
          ================================================== */}

          <div className="relative flex flex-col gap-5 border-b border-border px-5 py-6 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.2em] text-accent">
                Feb 2025 — Present
              </p>

              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-heading text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl">
                  ISBM Group
                </h3>

                <span className="font-code text-[7px] uppercase tracking-[0.16em] text-text-muted">
                  Mumbai
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-text-secondary sm:text-base">
                Web Developer / PHP Laravel Developer
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-30" />

                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>

              <span className="font-code text-[7px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Current Role
              </span>
            </div>
          </div>

          {/* =================================================
              MAIN EXPERIENCE VIEW
          ================================================== */}

          <div className="relative grid xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]">

            {/* =================================================
                LEFT — WHAT I BUILD
            ================================================== */}

            <div className="border-b border-border px-5 py-7 sm:px-7 lg:px-8 xl:border-b-0 xl:border-r">

              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Systems I&apos;ve Worked On
                  </p>

                  <h4 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary sm:text-3xl">
                    From internal operations
                    <br />
                    to public-facing platforms.
                  </h4>
                </div>

                <span className="hidden font-code text-[8px] uppercase tracking-[0.12em] text-text-muted sm:block">
                  05 Systems
                </span>
              </div>

              <div className="mt-8">
                {projects.map((project, index) => (
                  <ProjectRow
                    key={project.name}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

            </div>

            {/* =================================================
                RIGHT — STACK
            ================================================== */}

            <div className="px-5 py-7 sm:px-7 lg:px-8">

              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Working Stack
              </p>

              <h4 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary">
                Technologies I use
                <br />
                in production.
              </h4>

              <p className="mt-3 max-w-md text-sm leading-6 text-text-secondary">
                Backend-focused development with frontend utilities selected
                according to the requirements of each system.
              </p>

              {/* Technology logos */}

              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
                {technologies.map((technology) => (
                  <TechnologyItem
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </div>

              {/* deployment */}

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-code text-[7px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                  Deployment & Hosting
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3">
                  {deploymentTools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary"
                    >
                      <span className="size-1 rounded-full bg-accent" />

                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              WHAT THE WORK INVOLVES
          ================================================== */}

          <div className="relative border-t border-border px-5 py-7 sm:px-7 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                  What The Work Involves
                </p>

                <h4 className="mt-2 font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary">
                  End-to-end feature thinking.
                </h4>
              </div>

              <p className="max-w-4xl text-sm leading-7 text-text-secondary sm:text-[15px]">
                The work goes beyond creating screens. It involves
                understanding organisational requirements, designing the data
                structure, implementing business rules, building calculations,
                defining privileges, connecting modules and maintaining the
                complete flow until the feature reaches production.
              </p>
            </div>
          </div>

          {/* =================================================
              PROFESSIONAL GROWTH
          ================================================== */}

          <div className="relative border-t border-border px-5 py-7 sm:px-7 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Professional Growth
                </p>

                <h4 className="mt-2 max-w-[200px] font-heading text-xl font-semibold leading-tight tracking-[-0.03em] text-text-primary">
                  What this experience strengthened.
                </h4>
              </div>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {growthItems.map((item) => (
                  <GrowthItem
                    key={item.number}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              FINAL EXPERIENCE STRIP
          ================================================== */}

          <div className="relative border-t border-border bg-background/20 px-5 py-5 sm:px-7 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <FlowStep value="Requirement" />

                <FlowArrow />

                <FlowStep value="Architecture" />

                <FlowArrow />

                <FlowStep value="Data" />

                <FlowArrow />

                <FlowStep value="Logic" />

                <FlowArrow />

                <FlowStep value="Interface" />

                <FlowArrow />

                <FlowStep value="Deployment" active />
              </div>

              <span className="font-code text-[7px] uppercase tracking-[0.14em] text-text-muted">
                PHP / Laravel / MySQL / REST APIs
              </span>

            </div>
          </div>

        </motion.article>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT ROW
========================================================= */

function ProjectRow({
  project,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
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
        delay: index * 0.045,
      }}
      className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-4 border-t border-border py-4 first:border-t-0 first:pt-0"
    >
      <span className="font-code text-[8px] font-semibold text-accent">
        {project.number}
      </span>

      <div>
        <h5 className="font-heading text-sm font-semibold text-text-primary sm:text-base">
          {project.name}
        </h5>

        <p className="mt-1 text-xs leading-5 text-text-secondary sm:text-[13px]">
          {project.description}
        </p>
      </div>

      <span className="text-sm text-text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
        →
      </span>
    </motion.div>
  );
}

/* =========================================================
   TECHNOLOGY
========================================================= */

function TechnologyItem({
  technology,
}) {
  return (
    <div className="group flex items-center gap-3">
      <div className="flex size-9 shrink-0 items-center justify-center">
        <img
          src={technology.image}
          alt={`${technology.name} logo`}
          loading="lazy"
          decoding="async"
          className="max-h-8 max-w-8 object-contain transition-transform duration-200 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.style.display =
              "none";

            const fallback =
              event.currentTarget.nextElementSibling;

            if (fallback) {
              fallback.style.display =
                "flex";
            }
          }}
        />

        <span
          className="hidden size-8 items-center justify-center font-code text-[8px] font-bold text-accent"
          aria-hidden="true"
        >
          {technology.fallback}
        </span>
      </div>

      <span className="font-code text-[8px] font-medium uppercase tracking-[0.08em] text-text-secondary transition-colors duration-200 group-hover:text-text-primary">
        {technology.name}
      </span>
    </div>
  );
}

/* =========================================================
   GROWTH ITEM
========================================================= */

function GrowthItem({
  item,
}) {
  return (
    <div className="group">
      <div className="flex items-center gap-3">
        <span className="font-code text-[8px] font-semibold text-accent">
          {item.number}
        </span>

        <span className="h-px w-7 bg-border-strong transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
      </div>

      <h5 className="mt-3 font-heading text-base font-semibold text-text-primary">
        {item.title}
      </h5>

      <p className="mt-2 max-w-md text-xs leading-5 text-text-secondary sm:text-[13px]">
        {item.description}
      </p>
    </div>
  );
}

/* =========================================================
   FLOW
========================================================= */

function FlowStep({
  value,
  active = false,
}) {
  return (
    <span
      className={[
        "font-code text-[7px] font-semibold uppercase tracking-[0.13em]",
        active
          ? "text-accent"
          : "text-text-secondary",
      ].join(" ")}
    >
      {value}
    </span>
  );
}

function FlowArrow() {
  return (
    <span
      className="text-[9px] text-text-muted"
      aria-hidden="true"
    >
      →
    </span>
  );
}

export default Experience;