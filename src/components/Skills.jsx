import { motion } from "framer-motion";

import {
  Code2,
  Package,
  TerminalSquare,
  Wrench,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| IMAGE STRUCTURE
|--------------------------------------------------------------------------
|
| Later add your actual SVG/PNG/WebP logos inside:
|
| public/
| └── tech/
|     ├── php.svg
|     ├── laravel.svg
|     ├── mysql.svg
|     ├── javascript.svg
|     ├── react.svg
|     ├── python.svg
|     ├── django.svg
|     ├── flask.svg
|     ├── html.svg
|     ├── css.svg
|     ├── bootstrap.svg
|     ├── rest-api.svg
|     ├── git.svg
|     ├── github.svg
|     ├── postman.svg
|     ├── vscode.svg
|     ├── vite.svg
|     ├── npm.svg
|     ├── terminal.svg
|     └── vercel.svg
|
*/

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
    name: "Node JS",
    image: "/tech/node-js.png",
    fallback: "Node",
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
    name: "Tailwind",
    image: "/tech/tailwind.png",
    fallback: "TW",
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
    name: "REST APIs",
    image: "/tech/rest-api.png",
    fallback: "API",
  },
];

const developmentTools = [
  {
    name: "Git",
    image: "/tech/git.png",
    fallback: "GIT",
  },
  {
    name: "GitHub",
    image: "/tech/github.png",
    fallback: "GH",
  },
  {
    name: "Postman",
    image: "/tech/postman.png",
    fallback: "PM",
  },
  {
    name: "VS Code",
    image: "/tech/vs-code.png",
    fallback: "VS",
  },
  {
    name: "Docker",
    image: "/tech/docker.png",
    fallback: "Docker",
  },
  {
    name: "npm",
    image: "/tech/npm.png",
    fallback: "npm",
  },
  {
    name: "MySql Workbench",
    image: "/tech/mysql-workbench.png",
    fallback: ">_",
  },
  {
    name: "Figma",
    image: "/tech/figma.png",
    fallback: "Figma",
  },
];

const revealContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const revealItem = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="skills-heading"
    >
      {/* Background */}

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-48 top-24 size-[520px] rounded-full bg-accent/[0.055] blur-[170px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-10 size-[520px] rounded-full bg-cyan/[0.045] blur-[170px]"
        aria-hidden="true"
      />

      <div className="site-container relative">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
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
          className="mx-auto max-w-5xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border-strong" />

            <span className="font-code text-[9px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-[10px]">
              Skills & Tools
            </span>

            <span className="h-px w-8 bg-border-strong" />
          </div>

          <h2
            id="skills-heading"
            className="mt-5 font-heading text-[clamp(2.8rem,6.4vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.06em] text-text-primary"
          >
            TECHNOLOGIES{" "}

            <span className="text-gradient-blue">
              I WORK WITH.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-text-secondary sm:text-base sm:leading-8">
            A practical technology stack shaped by real application
            development, backend architecture and complete feature delivery.
          </p>
        </motion.div>

        {/* =====================================================
            SKILLS / TOOLS PANELS
        ====================================================== */}

        <div className="mt-14 grid gap-5 xl:grid-cols-2">

          {/* =================================================
              LEFT — TECHNOLOGIES
          ================================================== */}

          <TechnologyPanel
            title="Technologies"
            description="Languages, frameworks, databases and application technologies."
            label="Build"
            icon={Code2}
            items={technologies}
            accent="blue"
          />

          {/* =================================================
              RIGHT — TOOLS
          ================================================== */}

          <TechnologyPanel
            title="Development Tools"
            description="Tools I use while developing, testing, debugging and deploying."
            label="Ship"
            icon={Wrench}
            items={developmentTools}
            accent="green"
          />

        </div>

        {/* =====================================================
            BOTTOM SUMMARY
        ====================================================== */}

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
          className="mt-5 overflow-hidden rounded-2xl border border-border bg-surface/70 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-4">

              <div className="relative flex size-9 items-center justify-center rounded-full border border-success/25 bg-success/5">
                <span className="size-2 rounded-full bg-success" />

                <span className="absolute size-2 animate-ping rounded-full bg-success opacity-25" />
              </div>

              <div>
                <p className="font-heading text-sm font-semibold text-text-primary">
                  Practical stack. Real-world development.
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  Technologies selected by actual project requirements.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">
              <span className="font-code text-[8px] uppercase tracking-[0.16em] text-text-muted">
                Continuously learning
              </span>

              <div
                className="flex items-center gap-1.5"
                aria-hidden="true"
              >
                <span className="size-1.5 rounded-full bg-accent" />
                <span className="size-1.5 rounded-full bg-accent/60" />
                <span className="size-1.5 rounded-full bg-accent/30" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* =========================================================
   LARGE TECHNOLOGY PANEL
========================================================= */

function TechnologyPanel({
  title,
  description,
  label,
  icon: Icon,
  items,
  accent,
}) {
  const greenAccent = accent === "green";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "group relative overflow-hidden rounded-[28px] border bg-surface/80 backdrop-blur-xl",
        greenAccent
          ? "border-cyan/20"
          : "border-accent/25",
      ].join(" ")}
    >
      {/* Glow */}

      <div
        className={[
          "pointer-events-none absolute -right-24 -top-24 size-64 rounded-full blur-[100px]",
          greenAccent
            ? "bg-success/[0.07]"
            : "bg-accent/[0.09]",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Header */}

      <div className="relative flex flex-col gap-5 border-b border-border px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex items-center gap-4">

          <div
            className={[
              "flex size-14 shrink-0 items-center justify-center rounded-2xl border",
              greenAccent
                ? "border-success/25 bg-success/5 text-success"
                : "border-accent/25 bg-accent-soft text-accent",
            ].join(" ")}
          >
            <Icon
              size={24}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary">
              {title}
            </h3>

            <p className="mt-1 max-w-lg text-sm leading-6 text-text-secondary">
              {description}
            </p>
          </div>

        </div>

        <div
          className={[
            "inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2",
            greenAccent
              ? "border-success/25 bg-success/5"
              : "border-accent/25 bg-accent-soft",
          ].join(" ")}
        >
          <span
            className={[
              "size-1.5 rounded-full",
              greenAccent
                ? "bg-success"
                : "bg-accent",
            ].join(" ")}
          />

          <span
            className={[
              "font-code text-[8px] font-semibold uppercase tracking-[0.14em]",
              greenAccent
                ? "text-success"
                : "text-accent",
            ].join(" ")}
          >
            {label}
          </span>
        </div>
      </div>

      {/* Technology grid */}

      <motion.div
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="relative grid grid-cols-2 gap-x-3 gap-y-7 p-5 sm:grid-cols-3 sm:p-7 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4"
      >
        {items.map((item) => (
          <TechnologyLogo
            key={item.name}
            item={item}
            greenAccent={greenAccent}
          />
        ))}
      </motion.div>

    </motion.article>
  );
}

/* =========================================================
   IMAGE / LOGO ITEM
========================================================= */

function TechnologyLogo({
  item,
  greenAccent,
}) {
  return (
    <motion.div
      variants={revealItem}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group/logo min-w-0 text-center"
    >
      <div
        className={[
          "relative mx-auto flex aspect-square w-full max-w-[122px] items-center justify-center overflow-hidden rounded-2xl border bg-background/55 p-5",
          greenAccent
            ? "border-border hover:border-success/30"
            : "border-border hover:border-accent/35",
          "transition-[border-color,background-color,box-shadow] duration-300 hover:bg-surface-hover",
        ].join(" ")}
      >
        {/* subtle hover glow */}

        <div
          className={[
            "pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover/logo:opacity-100",
            greenAccent
              ? "bg-success/[0.04]"
              : "bg-accent/[0.05]",
          ].join(" ")}
          aria-hidden="true"
        />

        <TechnologyImage
          item={item}
          greenAccent={greenAccent}
        />
      </div>

      <p className="mt-3 truncate font-heading text-sm font-semibold text-text-primary">
        {item.name}
      </p>
    </motion.div>
  );
}

/* =========================================================
   IMAGE WITH FALLBACK
========================================================= */

function TechnologyImage({
  item,
  greenAccent,
}) {
  return (
    <>
      <img
        src={item.image}
        alt={`${item.name} logo`}
        loading="lazy"
        decoding="async"
        className="technology-logo-image relative z-10 max-h-[64px] max-w-[74px] object-contain sm:max-h-[70px] sm:max-w-[82px]"
        onError={(event) => {
          event.currentTarget.style.display = "none";

          const fallback =
            event.currentTarget.nextElementSibling;

          if (fallback) {
            fallback.style.display = "flex";
          }
        }}
      />

      <div
        className={[
          "relative z-10 hidden size-[68px] items-center justify-center rounded-2xl border font-code text-sm font-bold",
          greenAccent
            ? "border-success/20 bg-success/5 text-success"
            : "border-accent/20 bg-accent-soft text-accent",
        ].join(" ")}
        aria-hidden="true"
      >
        {item.fallback}
      </div>
    </>
  );
}

export default Skills;