import {
  useState,
} from "react";

import { motion } from "framer-motion";
import contactBg from "../assets/images/contact-bg.jpg";

import {
  ArrowUpRight,
  Check,
  FileText,
  Mail,
  Send,
  Star,
} from "lucide-react";

import profile from "../data/profile.js";

const contactLinks = [
  {
    label: "GitHub",
    description:
      "Repositories, experiments and development work.",
    href: profile.github,
    icon: Star,
    external: true,
  },
  {
    label: "LinkedIn",
    description:
      "Professional profile and career updates.",
    href: profile.linkedin,
    icon: Star,
    external: true,
  },
  {
    label: "Email",
    description:
      "Direct contact for opportunities and projects.",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Resume",
    description:
      "Professional experience and technical background.",
    href: profile.resume,
    icon: FileText,
    external: true,
  },
];

const initialForm = {
  name: "",
  email: "",
  message: "",

  /*
  |--------------------------------------------------------------------------
  | Honeypot
  |--------------------------------------------------------------------------
  */

  website: "",
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
      ease: [
        0.22,
        1,
        0.36,
        1,
      ],
    },
  },
};

function MoreContact() {
  const [
    formData,
    setFormData,
  ] = useState(initialForm);

  const [
    formStatus,
    setFormStatus,
  ] = useState("idle");

  const [
    formMessage,
    setFormMessage,
  ] = useState("");

  const handleChange = (
    event,
  ) => {
    const {
      name,
      value,
    } = event.target;

    setFormData(
      (current) => ({
        ...current,

        [name]: value,
      }),
    );

    if (
      formStatus === "error"
    ) {
      setFormStatus("idle");
      setFormMessage("");
    }
  };

  const handleSubmit = async (
    event,
  ) => {
    event.preventDefault();

    if (
      formStatus === "sending"
    ) {
      return;
    }

    setFormStatus(
      "sending",
    );

    setFormMessage("");

    try {
      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify(
                formData,
              ),
          },
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send message.",
        );
      }

      setFormStatus(
        "success",
      );

      setFormMessage(
        result.message ||
          "Message sent successfully.",
      );

      setFormData(
        initialForm,
      );
    } catch (error) {
      setFormStatus(
        "error",
      );

      setFormMessage(
        error.message ||
          "Unable to send message.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-shell relative overflow-hidden border-t border-border"
      aria-labelledby="contact-heading"
    >
      {/* Background visuals */}

      <div
        className="technical-grid pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-56 top-20 size-[560px] rounded-full bg-accent/[0.05] blur-[170px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-52 bottom-0 size-[520px] rounded-full bg-accent/[0.035] blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-container relative">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          variants={
            revealVariants
          }
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.65fr)] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <p className="section-eyebrow">
                Contact
              </p>
            </div>

            <h2
              id="contact-heading"
              className="section-heading mt-5 max-w-5xl"
            >
              HAVE AN IDEA?
              <br />

              <span className="text-gradient-blue">
                LET&apos;S BUILD IT.
              </span>
            </h2>
          </div>

          <p className="section-copy max-w-xl lg:pb-1">
            Open to development opportunities,
            collaborations and interesting
            projects where thoughtful engineering
            can create something useful.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT AREA
        ====================================================== */}

        <div className="mt-14 grid overflow-hidden rounded-[30px] border border-border bg-surface/75 backdrop-blur-xl xl:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)]">

          {/* =================================================
              LEFT — CONTACT LINKS + VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="relative min-h-[520px] overflow-hidden border-b border-border xl:border-b-0 xl:border-r"
          >

            {/* Image / visual background */}

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `
                  linear-gradient(
                    135deg,
                    rgba(8, 9, 13, 0.28) 0%,
                    rgba(8, 9, 13, 0.48) 52%,
                    rgba(8, 9, 13, 0.72) 100%
                  ),
                  url(${contactBg})
                `,
              }}
              aria-hidden="true"
            />

            {/* fallback visual gradient */}

            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(239,68,68,0.16),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(249,115,22,0.08),transparent_34%)]"
              aria-hidden="true"
            />

            {/* grid over image */}

            <div
              className="technical-grid absolute inset-0 opacity-[0.15]"
              aria-hidden="true"
            />

            {/* top glow */}

            <div
              className="absolute left-0 top-0 h-px w-[70%] bg-gradient-to-r from-accent via-accent/35 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 flex h-full flex-col p-5 sm:p-7 lg:p-8">

              {/* Left header */}

              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="font-code text-[8px] font-semibold uppercase tracking-[0.2em] text-white">
                    Available Channels
                  </span>

                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                    Find me online.
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-xl">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-30" />

                    <span className="relative inline-flex size-2 rounded-full bg-success" />
                  </span>

                  <span className="font-code text-[7px] font-semibold uppercase tracking-[0.13em] text-white/65">
                    Available
                  </span>
                </div>
              </div>

              {/* Links */}

              <div className="mt-10 space-y-2">
                {contactLinks.map(
                  (
                    link,
                    index,
                  ) => (
                    <ContactLink
                      key={
                        link.label
                      }
                      link={
                        link
                      }
                      index={
                        index
                      }
                    />
                  ),
                )}
              </div>

              {/* Bottom */}

              <div className="mt-auto pt-8">
                <div className="border-t border-white/10 pt-5">
                  <p className="font-code text-[8px] uppercase tracking-[0.17em] text-white/40">
                    Current status
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="size-2 rounded-full bg-success shadow-[0_0_15px_rgba(34,197,94,0.6)]" />

                    <p className="text-sm font-medium text-white/85">
                      {
                        profile.availability
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.55,
              delay: 0.06,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="relative bg-background/35"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-accent/[0.055] blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative p-5 sm:p-7 lg:p-8 xl:p-10">

              {/* Form header */}

              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-code text-[8px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Send a message
                  </span>

                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-text-primary sm:text-3xl">
                    Start a conversation.
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-text-secondary">
                    Tell me what you&apos;re
                    working on, what you need,
                    or simply introduce yourself.
                  </p>
                </div>

                <div className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent-soft text-accent sm:flex">
                  <Send
                    size={17}
                    strokeWidth={
                      1.8
                    }
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Form */}

              <form
                onSubmit={
                  handleSubmit
                }
                className="mt-8"
              >

                {/* honeypot */}

                <div
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    Website
                  </label>

                  <input
                    id="website"
                    type="text"
                    name="website"
                    value={
                      formData.website
                    }
                    onChange={
                      handleChange
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name / Email */}

                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    id="contact-name"
                    name="name"
                    label="Your Name"
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="name"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    maxLength={
                      100
                    }
                    required
                  />

                  <FormField
                    id="contact-email"
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    maxLength={
                      200
                    }
                    required
                  />
                </div>

                {/* Message */}

                <div className="mt-5">
                  <label
                    htmlFor="contact-message"
                    className="font-code text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted"
                  >
                    Message
                  </label>

                  <div className="group relative mt-2">
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="7"
                      value={
                        formData.message
                      }
                      onChange={
                        handleChange
                      }
                      required
                      minLength={
                        10
                      }
                      maxLength={
                        5000
                      }
                      placeholder="Tell me about the opportunity, project or idea..."
                      className="min-h-[180px] w-full resize-y rounded-2xl border border-border bg-surface/65 px-4 py-4 text-sm leading-7 text-text-primary outline-none transition-all duration-200 placeholder:text-text-muted/60 focus:border-accent/60 focus:bg-surface focus:ring-4 focus:ring-accent/5"
                    />

                    <div className="pointer-events-none absolute bottom-3 right-4 font-code text-[7px] text-text-muted">
                      {
                        formData
                          .message
                          .length
                      }
                      /5000
                    </div>
                  </div>
                </div>

                {/* Response */}

                {formMessage && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 7,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    role={
                      formStatus ===
                      "error"
                        ? "alert"
                        : "status"
                    }
                    className={[
                      "mt-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-6",
                      formStatus ===
                      "success"
                        ? "border-success/20 bg-success/5 text-success"
                        : "border-accent/20 bg-accent-soft text-text-secondary",
                    ].join(
                      " ",
                    )}
                  >
                    {formStatus ===
                      "success" && (
                      <Check
                        size={
                          16
                        }
                        className="mt-1 shrink-0"
                        aria-hidden="true"
                      />
                    )}

                    <span>
                      {
                        formMessage
                      }
                    </span>
                  </motion.div>
                )}

                {/* Submit */}

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-text-muted">
                    Your message is sent
                    directly to my inbox.
                    No account or database
                    is involved.
                  </p>

                  <motion.button
                    type="submit"
                    disabled={
                      formStatus ===
                      "sending"
                    }
                    whileHover={
                      formStatus ===
                      "sending"
                        ? {}
                        : {
                            y: -2,
                          }
                    }
                    whileTap={
                      formStatus ===
                      "sending"
                        ? {}
                        : {
                            scale:
                              0.98,
                          }
                    }
                    className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-accent px-6 font-code text-[9px] font-semibold uppercase tracking-[0.13em] text-white transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formStatus ===
                    "sending" ? (
                      <>
                        <span className="size-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Sending
                      </>
                    ) : formStatus ===
                      "success" ? (
                      <>
                        Sent

                        <Check
                          size={
                            14
                          }
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <>
                        Send Message

                        <ArrowUpRight
                          size={
                            14
                          }
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FOOTER STRIP
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
          className="mt-5 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="technical-label">
            PHP / Laravel /
            Full Stack
          </span>

          <p className="text-sm text-text-secondary">
            Backend-first thinking
            with complete feature
            delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT LINK
========================================================= */

function ContactLink({
  link,
  index,
}) {
  const Icon =
    link.icon;

  const externalProps =
    link.external
      ? {
          target:
            "_blank",

          rel:
            "noopener noreferrer",
        }
      : {};

  return (
    <motion.a
      href={
        link.href
      }
      {...externalProps}
      initial={{
        opacity: 0,
        x: -8,
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
        delay:
          index *
          0.04,
      }}
      whileHover={{
        x: 4,
      }}
      className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 backdrop-blur-md transition-colors duration-200 hover:border-accent/30 hover:bg-black/30"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-200 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
        <Icon
          size={16}
          strokeWidth={
            1.8
          }
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-heading text-sm font-semibold text-white">
          {
            link.label
          }
        </p>

        <p className="mt-0.5 truncate text-[11px] text-white/45">
          {
            link.description
          }
        </p>
      </div>

      <ArrowUpRight
        size={14}
        aria-hidden="true"
        className="shrink-0 text-white/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </motion.a>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  id,
  label,
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={
          id
        }
        className="font-code text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted"
      >
        {
          label
        }
      </label>

      <input
        id={
          id
        }
        {...props}
        className="mt-2 min-h-12 w-full rounded-xl border border-border bg-surface/65 px-4 text-sm text-text-primary outline-none transition-all duration-200 placeholder:text-text-muted/60 focus:border-accent/60 focus:bg-surface focus:ring-4 focus:ring-accent/5"
      />
    </div>
  );
}

export default MoreContact;