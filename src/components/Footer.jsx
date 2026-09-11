import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import profile from "../data/profile.js";

const footerLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: Mail,
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Mail,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
];

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background pb-28 pt-10 sm:pb-32 sm:pt-12 lg:pb-28">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <a
              href="#home"
              aria-label="Back to homepage"
              className="group inline-flex items-end gap-1"
            >
              <span className="font-heading text-3xl font-bold tracking-[-0.045em] text-text-primary sm:text-4xl">
                DAINIK
              </span>

              <span className="mb-1 text-2xl font-bold text-accent">
                .
              </span>
            </a>

            <p className="mt-3 font-code text-[9px] font-medium uppercase tracking-[0.16em] text-text-muted sm:text-[10px]">
              PHP • Laravel • Full Stack Developer
            </p>

            <p className="mt-5 max-w-lg text-sm leading-6 text-text-secondary">
              {profile.footerSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={
                    link.external
                      ? `Open ${link.label} in a new tab`
                      : `Contact ${profile.name} by email`
                  }
                  className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:text-accent"
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span className="font-code text-[8px] font-semibold uppercase tracking-[0.11em]">
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={12}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-code text-[8px] uppercase tracking-[0.13em] text-text-muted">
            © {currentYear} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;