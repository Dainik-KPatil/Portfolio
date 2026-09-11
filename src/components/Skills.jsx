import { motion } from "framer-motion";

import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Network,
  ServerCog,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";

const coreStack = [
  {
    name: "PHP",
    type: "Core Backend",
    icon: Braces,
    accent: "blue",
  },
  {
    name: "Laravel",
    type: "Framework",
    icon: ServerCog,
    accent: "blue",
  },
  {
    name: "MySQL",
    type: "Database",
    icon: Database,
    accent: "cyan",
  },
  {
    name: "REST APIs",
    type: "Integration",
    icon: Network,
    accent: "cyan",
  },
];

const frontendStack = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Bootstrap",
];

const backendStack = [
  "Django",
  "Flask",
];

const tools = [
  "Git",
  "GitHub",
  "Postman",
  "AJAX",
  "JSON",
  "Vite",
];

const workflow = [
  "Write",
  "Test",
  "Debug",
  "Commit",
  "Deliver",
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

function Skills() {
  return (
    <section
      id="skills"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="skills-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-28 size-[500px] rounded-full bg-accent/[0.04] blur-[150px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-44 bottom-24 size-[460px] rounded-full bg-cyan/[0.04] blur-[150px]"
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
              Skills & Tools
            </p>

            <h2
              id="skills-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              BUILT AROUND
              <br />

              <span className="section-heading-muted">
                BACKEND DEPTH.
              </span>

              <br />

              <span className="text-gradient-blue">
                SUPPORTED BY FULL STACK.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            My strongest daily stack is PHP, Laravel and MySQL,
            supported by frontend technologies, APIs and development
            tools used across real business applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]"
        >
          {/* Core stack */}
          <motion.div
            variants={revealVariants}
            className="rounded-[28px] border border-border bg-surface p-5 sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="technical-label">
                  Core stack
                </p>

                <h3 className="mt-2 font-heading text-2xl font-semibold text-text-primary sm:text-3xl">
                  Technologies I work with most.
                </h3>
              </div>

              <Code2
                size={20}
                className="shrink-0 text-accent"
                aria-hidden="true"
              />
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {coreStack.map((item) => (
                <CoreTechnologyCard
                  key={item.name}
                  item={item}
                />
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <SkillGroup
                title="Frontend"
                items={frontendStack}
                icon={Globe2}
              />

              <SkillGroup
                title="Backend Foundation"
                items={backendStack}
                icon={ServerCog}
              />
            </div>
          </motion.div>

          {/* Toolchain panel */}
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
                toolchain.runtime
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="technical-label">
                    Development tools
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-semibold text-text-primary">
                    The stack around the code.
                  </h3>
                </div>

                <Wrench
                  size={18}
                  className="text-cyan"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
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
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    className="group rounded-xl border border-border bg-surface-alt/60 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-code text-[8px] text-text-muted">
                        0{index + 1}
                      </span>

                      <Terminal
                        size={14}
                        className="text-text-muted transition-colors duration-200 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-6 font-heading text-base font-semibold text-text-primary">
                      {tool}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <p className="technical-label">
                  Workflow
                </p>

                <div className="mt-4 space-y-2.5">
                  {workflow.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={[
                          "flex size-7 shrink-0 items-center justify-center rounded-full border font-code text-[7px]",
                          index === 2
                            ? "border-accent/30 bg-accent-soft text-accent"
                            : "border-border bg-surface text-text-muted",
                        ].join(" ")}
                      >
                        0{index + 1}
                      </span>

                      <div className="flex min-h-10 flex-1 items-center justify-between rounded-xl border border-border bg-surface-alt/50 px-3">
                        <span className="font-code text-[8px] uppercase tracking-[0.1em] text-text-secondary">
                          {step}
                        </span>

                        <GitBranch
                          size={12}
                          className="text-text-muted"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>

        {/* Bottom visual strip */}
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
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-6 grid gap-3 md:grid-cols-3"
        >
          <CapabilityStrip
            label="Application Layer"
            value="Laravel / PHP"
            icon={ServerCog}
          />

          <CapabilityStrip
            label="Data Layer"
            value="MySQL / Eloquent"
            icon={Database}
            accent
          />

          <CapabilityStrip
            label="Interface Layer"
            value="JavaScript / React"
            icon={Workflow}
          />
        </motion.div>
      </div>
    </section>
  );
}

function CoreTechnologyCard({ item }) {
  const Icon = item.icon;

  const isCyan = item.accent === "cyan";

  return (
    <motion.article
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className={[
        "group relative min-h-[220px] overflow-hidden rounded-2xl border p-5 sm:p-6",
        isCyan
          ? "border-cyan/20 bg-cyan-soft"
          : "border-accent/20 bg-accent-soft",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute -right-14 -top-14 size-40 rounded-full blur-3xl",
          isCyan
            ? "bg-cyan/[0.09]"
            : "bg-accent/[0.09]",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="font-code text-[8px] uppercase tracking-[0.12em] text-text-muted">
            {item.type}
          </span>

          <div
            className={[
              "flex size-10 items-center justify-center rounded-xl border",
              isCyan
                ? "border-cyan/20 text-cyan"
                : "border-accent/20 text-accent",
            ].join(" ")}
          >
            <Icon
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-auto pt-10">
          <p
            className={[
              "font-heading text-3xl font-bold tracking-[-0.04em]",
              isCyan
                ? "text-cyan"
                : "text-accent",
            ].join(" ")}
          >
            {item.name}
          </p>

          <div className="mt-4 h-px w-full bg-border">
            <div
              className={[
                "h-px w-2/3 transition-all duration-300 group-hover:w-full",
                isCyan
                  ? "bg-cyan"
                  : "bg-accent",
              ].join(" ")}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SkillGroup({
  title,
  items,
  icon: Icon,
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-alt/50 p-5">
      <div className="flex items-center justify-between">
        <p className="technical-label">
          {title}
        </p>

        <Icon
          size={16}
          className="text-text-muted"
          aria-hidden="true"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-surface px-3 py-2 font-code text-[8px] uppercase tracking-[0.1em] text-text-secondary transition-colors duration-200 hover:border-border-strong hover:text-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CapabilityStrip({
  label,
  value,
  icon: Icon,
  accent = false,
}) {
  return (
    <div
      className={[
        "flex min-h-[110px] items-center justify-between gap-5 rounded-2xl border p-5",
        accent
          ? "border-accent/20 bg-accent-soft"
          : "border-border bg-surface",
      ].join(" ")}
    >
      <div>
        <p className="technical-label">
          {label}
        </p>

        <p
          className={[
            "mt-2 font-heading text-xl font-semibold",
            accent
              ? "text-accent"
              : "text-text-primary",
          ].join(" ")}
        >
          {value}
        </p>
      </div>

      <Icon
        size={20}
        className={
          accent
            ? "text-accent"
            : "text-text-muted"
        }
        aria-hidden="true"
      />
    </div>
  );
}

export default Skills;