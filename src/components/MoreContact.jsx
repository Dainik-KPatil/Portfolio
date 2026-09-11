import { motion } from "framer-motion";

import {
  ArrowUpRight,
  FileText,
  Star,
  Mail,
  Send,
} from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    description: "Repositories, experiments and development work.",
    href: "https://github.com/dainikpatil-dev",
    icon: Star,
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Professional profile and career updates.",
    href: "https://www.linkedin.com/in/dainik-patil-119083294/",
    icon: Star,
    external: true,
  },
  {
    label: "Email",
    description: "For opportunities, projects and technical discussions.",
    href: "mailto:dainikpatil1533@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Resume",
    description: "View my professional experience and technical background.",
    href: "/resume.pdf",
    icon: FileText,
    external: true,
  },
];

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

function MoreContact() {
  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -left-56 top-20 size-[560px] rounded-full bg-accent/[0.055] blur-[170px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-0 size-[520px] rounded-full bg-cyan/[0.05] blur-[160px]"
        aria-hidden="true"
      />

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
      />

      <div className="site-container relative">
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-end"
        >
          <div>
            <p className="section-eyebrow">
              More / Contact
            </p>

            <h2
              id="contact-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              HAVE A PROJECT
              <br />

              <span className="section-heading-muted">
                OR OPPORTUNITY?
              </span>

              <br />

              <span className="text-gradient-blue">
                LET'S BUILD SOMETHING USEFUL.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="section-copy max-w-xl">
              I’m open to development opportunities, technical collaborations
              and meaningful projects where strong backend thinking and clean
              implementation matter.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 xl:grid-cols-[minmax(0,1.18fr)_minmax(330px,0.82fr)]">
          {/* LINKS */}

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
              amount: 0.18,
            }}
            transition={{
              duration: 0.55,
            }}
            className="overflow-hidden rounded-[28px] border border-border bg-surface"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-success" />

                <span className="technical-label">
                  Available channels
                </span>
              </div>

              <span className="font-code text-[8px] uppercase tracking-[0.13em] text-text-muted">
                Connect
              </span>
            </div>

            <div>
              {contactLinks.map((link, index) => (
                <ContactLink
                  key={link.label}
                  link={link}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* CONTACT UI */}

          <motion.aside
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
              amount: 0.18,
            }}
            transition={{
              duration: 0.55,
              delay: 0.06,
            }}
            className="glass-panel overflow-hidden rounded-[28px]"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#ff6b6b]" />
                <span className="size-2 rounded-full bg-warm" />
                <span className="size-2 rounded-full bg-success" />
              </div>

              <span className="technical-label">
                contact.request
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="technical-label">
                    Preferred action
                  </p>

                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-text-primary">
                    Start with a conversation.
                  </h3>
                </div>

                <Send
                  size={19}
                  strokeWidth={1.8}
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-7 rounded-2xl border border-border bg-background/55 p-4">
                <p className="font-code text-[8px] uppercase tracking-[0.13em] text-text-muted">
                  developer.status
                </p>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-30" />
                      <span className="relative inline-flex size-2 rounded-full bg-success" />
                    </span>

                    <span className="text-sm font-medium text-text-primary">
                      Open to opportunities
                    </span>
                  </div>

                  <span className="font-code text-[8px] uppercase tracking-[0.1em] text-success">
                    Active
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <ContactState
                  number="01"
                  label="Discuss"
                  value="Requirement"
                />

                <ContactState
                  number="02"
                  label="Understand"
                  value="Scope"
                />

                <ContactState
                  number="03"
                  label="Build"
                  value="Solution"
                  active
                />
              </div>

              <a
                href="mailto:your-email@example.com"
                className="primary-button group mt-7 w-full"
              >
                Send Email

                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.aside>
        </div>

        {/* SMALL CLOSING STRIP */}

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
            PHP / Laravel / Full Stack
          </span>

          <p className="text-sm text-text-secondary">
            Backend-first thinking with complete feature delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  link,
  index,
}) {
  const Icon = link.icon;

  const externalProps = link.external
    ? {
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <motion.a
      href={link.href}
      {...externalProps}
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
      className="group grid min-h-[145px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 border-b border-border px-5 py-6 transition-colors duration-200 last:border-b-0 hover:bg-surface-hover sm:px-7"
    >
      <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-surface-alt text-text-muted transition-all duration-200 group-hover:border-accent/25 group-hover:bg-accent-soft group-hover:text-accent">
        <Icon
          size={19}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="font-code text-[8px] text-text-muted">
            0{index + 1}
          </span>

          <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-text-primary sm:text-2xl">
            {link.label}
          </h3>
        </div>

        <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
          {link.description}
        </p>
      </div>

      <ArrowUpRight
        size={18}
        className="text-text-muted transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
        aria-hidden="true"
      />
    </motion.a>
  );
}

function ContactState({
  number,
  label,
  value,
  active = false,
}) {
  return (
    <div
      className={[
        "flex items-center justify-between gap-5 rounded-xl border px-4 py-3",
        active
          ? "border-accent/25 bg-accent-soft"
          : "border-border bg-surface-alt/50",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
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

        <span className="text-sm text-text-secondary">
          {label}
        </span>
      </div>

      <span
        className={[
          "font-code text-[8px] uppercase tracking-[0.11em]",
          active
            ? "text-accent"
            : "text-text-primary",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

export default MoreContact;