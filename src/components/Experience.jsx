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

const dezignolicsProjects = [
  {
    number: "01",
    name: "Infinite Mart",
    type: "E-commerce Platform",
    description:
      "Full-stack e-commerce project covering product management, authentication, database relationships and payment gateway integrations.",
    github: "YOUR_INFINITE_MART_GITHUB_LINK",
  },
  {
    number: "02",
    name: "Student Study Portal",
    type: "Django Web Application",
    description:
      "Student-focused learning portal developed while strengthening Django fundamentals, backend workflows and relational database handling.",
    github: "YOUR_STUDENT_PORTAL_GITHUB_LINK",
  },
  {
    number: "03",
    name: "Subscription To-Do",
    type: "Flask Mini Project",
    description:
      "Subscription-based task management project built with Flask while exploring authentication, application flow and database-backed features.",
    github: "YOUR_TODO_GITHUB_LINK",
  },
];

const dezignolicsTechnologies = [
  {
    name: "Python",
    image: "/tech/python.png",
    fallback: "PY",
  },
  {
    name: "Django",
    image: "/tech/django.png",
    fallback: "DJ",
  },
  {
    name: "Flask",
    image: "/tech/flask.png",
    fallback: "FL",
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
    name: "React",
    image: "/tech/react.png",
    fallback: "R",
  },
  {
    name: "HTML",
    image: "/tech/html.png",
    fallback: "HTML",
  },
  {
    name: "CSS",
    image: "/tech/css.png",
    fallback: "CSS",
  },
  {
    name: "Bootstrap",
    image: "/tech/bootstrap.png",
    fallback: "B",
  },
  {
    name: "Redis",
    image: "/tech/redis.png",
    fallback: "RD",
  },
  {
    name: "Git",
    image: "/tech/git.png",
    fallback: "GIT",
  },
];

const internshipLearning = [
  "Django application fundamentals",
  "Flask application development",
  "Authentication & login setup",
  "MySQL database relationships",
  "PayPal Sandbox integration",
  "Stripe Test integration",
  "Razorpay integration",
  "ApexCharts dashboards",
  "Git-based development workflow",
  "Frontend-backend integration",
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
            My experience has grown from learning and implementing Python-based
            web applications to building and maintaining production business
            systems with structured backend logic, data workflows and clearly
            defined application architecture.
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
          className="relative mt-10 overflow-hidden rounded-[30px] border border-border bg-surface/72 backdrop-blur-xl"
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

          <div className="relative flex flex-col gap-4 border-b border-border px-5 py-4 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            {/* LEFT — ROLE IDENTITY */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-heading text-2xl font-bold tracking-[-0.04em] text-text-primary sm:text-3xl">
                  ISBM Group
                </h3>

                <span className="font-code text-[7px] uppercase tracking-[0.16em] text-text-muted">
                  Mumbai
                </span>
              </div>

              <p className="mt-1.5 text-sm font-medium text-text-secondary">
                Web Developer / PHP Laravel Developer
              </p>
            </div>

            {/* RIGHT — TENURE + STATUS */}
            <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Feb 2025 — Present
              </p>

              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-30" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>

                <span className="font-code text-[7px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Currently Working
                </span>
              </div>
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

                  <h4 className="mt-1.5 font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary sm:text-3xl">
                    From internal operations
                    <br />
                    to public-facing platforms.
                  </h4>
                </div>

                <span className="hidden font-code text-[8px] uppercase tracking-[0.12em] text-text-muted sm:block">
                  05 Systems
                </span>
              </div>

              <div className="mt-6">
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

              <h4 className="mt-1.5 font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary">
                Technologies I use
                <br />
                in production.
              </h4>

              <p className="mt-1.5 max-w-md text-sm leading-6 text-text-secondary">
                Backend-focused development with frontend utilities selected
                according to the requirements of each system.
              </p>

              {/* Technology logos */}

              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
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
    WHAT I LEARNED / STRENGTHENED
================================================== */}

          <div className="border-t border-border px-5 py-5 sm:px-7 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                  What I Strengthened
                </p>

                <h4 className="mt-1.5 font-heading text-lg font-semibold tracking-[-0.025em] text-text-primary">
                  Production-focused development.
                </h4>
              </div>

              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Requirement Understanding",
                  "Clean Application Architecture",
                  "Business Logic Development",
                  "Database Design & Relations",
                  "Data Segregation",
                  "User Roles & Privileges",
                  "Complex Calculations",
                  "REST API Integration",
                  "AJAX-based Workflows",
                  "Validation & Debugging",
                  "Module Integration",
                  "Deployment & Server Handling",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3"
                  >
                    <span className="font-code text-[7px] font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-4 bg-border-strong transition-all duration-200 group-hover:w-6 group-hover:bg-accent" />

                    <span className="text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                      {item}
                    </span>
                  </div>
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

        {/* =====================================================
    EXPERIENCE 02 — DEZIGNOLICS
====================================================== */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="relative mt-6 overflow-hidden rounded-[24px] border border-border bg-surface/60 backdrop-blur-xl"
        >
          {/* top accent */}
          <div
            className="pointer-events-none absolute left-0 top-0 z-20 h-px w-[52%] bg-gradient-to-r from-accent via-accent/30 to-transparent"
            aria-hidden="true"
          />

          {/* subtle ambient glow */}
          <div
            className="pointer-events-none absolute -left-24 -top-24 size-[300px] rounded-full bg-accent/[0.035] blur-[120px]"
            aria-hidden="true"
          />

          {/* =================================================
      ROLE HEADER
  ================================================== */}

          <div className="relative flex flex-col gap-4 border-b border-border px-5 py-4 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            {/* LEFT */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-heading text-2xl font-bold tracking-[-0.04em] text-text-primary sm:text-3xl">
                  Dezignolics
                </h3>

                <span className="font-code text-[7px] uppercase tracking-[0.16em] text-text-muted">
                  Thane, India
                </span>
              </div>

              <p className="mt-1.5 text-sm font-medium text-text-secondary">
                Python / Django Developer Intern
                <span className="mx-2 text-text-muted">•</span>
                Flask
              </p>

              <p className="mt-1 font-code text-[7px] uppercase tracking-[0.12em] text-text-muted">
                8-Month Internship + Project Implementation Experience
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex shrink-0 flex-col items-start gap-2 lg:items-end">
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Oct 2023 — Jun 2025
              </p>

              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-text-muted" />

                <span className="font-code text-[7px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Internship & Project Implementation
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
      EXPERIENCE BODY
  ================================================== */}

          <div className="grid xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            {/* =================================================
        LEFT — PROJECT WORK
    ================================================== */}

            <div className="border-b border-border px-5 py-6 sm:px-7 lg:px-8 xl:border-b-0 xl:border-r">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Internship Projects
                  </p>

                  <h4 className="mt-1.5 font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary sm:text-2xl">
                    Learning through
                    <br />
                    real project implementation.
                  </h4>
                </div>

                <span className="hidden font-code text-[8px] uppercase tracking-[0.12em] text-text-muted sm:block">
                  03 Projects
                </span>
              </div>

              <div className="mt-6">
                {dezignolicsProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
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
                      delay: index * 0.05,
                    }}
                    className="group grid grid-cols-[34px_minmax(0,1fr)_auto] gap-4 border-t border-border py-4 first:border-t-0 first:pt-0"
                  >
                    <span className="pt-0.5 font-code text-[8px] font-semibold text-accent">
                      {project.number}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h5 className="font-heading text-sm font-semibold text-text-primary sm:text-base">
                          {project.name}
                        </h5>

                        <span className="font-code text-[7px] uppercase tracking-[0.1em] text-text-muted">
                          {project.type}
                        </span>
                      </div>

                      <p className="mt-1.5 max-w-2xl text-xs leading-5 text-text-secondary sm:text-[13px]">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} project on GitHub`}
                      className="mt-0.5 inline-flex h-7 items-center gap-1.5 font-code text-[7px] font-semibold uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-accent"
                    >
                      GitHub
                      <span
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* =================================================
        RIGHT — TECHNOLOGY STACK
    ================================================== */}

            <div className="px-5 py-6 sm:px-7 lg:px-8">
              <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                Learning Stack
              </p>

              <h4 className="mt-1.5 font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary sm:text-2xl">
                Technologies explored
                <br />
                through implementation.
              </h4>

              <p className="mt-2 max-w-md text-xs leading-5 text-text-secondary sm:text-[13px]">
                This phase focused on building strong web-development fundamentals
                while learning new backend, frontend and database technologies through
                practical projects.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                {dezignolicsTechnologies.map((technology) => (
                  <TechnologyItem
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
      WHAT I LEARNT
  ================================================== */}

          <div className="border-t border-border px-5 py-5 sm:px-7 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
              <div>
                <p className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Learning & Implementation
                </p>

                <h4 className="mt-1.5 font-heading text-lg font-semibold tracking-[-0.025em] text-text-primary">
                  Building the fundamentals.
                </h4>
              </div>

              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {internshipLearning.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3"
                  >
                    <span className="font-code text-[7px] font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-4 bg-border-strong transition-all duration-200 group-hover:w-6 group-hover:bg-accent" />

                    <span className="text-xs font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
      EXPERIENCE SUMMARY
  ================================================== */}

          <div className="border-t border-border bg-background/20 px-5 py-4 sm:px-7 lg:px-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <FlowStep value="Learn" />

                <FlowArrow />

                <FlowStep value="Build" />

                <FlowArrow />

                <FlowStep value="Integrate" />

                <FlowArrow />

                <FlowStep value="Test" />

                <FlowArrow />

                <FlowStep value="Implement" active />
              </div>

              <span className="font-code text-[7px] uppercase tracking-[0.14em] text-text-muted">
                Python / Django / Flask / MySQL / React
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
      className="group grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-4 border-t border-border py-3 first:border-t-0 first:pt-0"
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

      <h5 className="mt-1.5 font-heading text-base font-semibold text-text-primary">
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