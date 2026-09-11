import {
  ArrowUpRight,
  Star,
  Mail,
} from "lucide-react";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: Star,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: Star,
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    icon: Mail,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

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
              Backend-first development focused on real business systems,
              application logic, APIs and complete feature delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:justify-end">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noreferrer" : undefined}
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
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-code text-[8px] uppercase tracking-[0.13em] text-text-muted">
            © {currentYear} Dainik Kishor Patil
          </p>

          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-success" />

            <p className="font-code text-[8px] uppercase tracking-[0.13em] text-text-muted">
              Built with React + Vite
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;