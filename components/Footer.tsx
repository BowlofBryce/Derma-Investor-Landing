'use client';

import { Container } from './Container';
import { Sparkles } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  company: string;
  email: string;
  links: FooterLink[];
}

export function Footer({ company, email, links }: FooterProps) {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[var(--gold)]" />
            <span className="text-sm text-[var(--muted)]">{company}</span>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${email}`}
            className="text-sm text-[var(--muted)] hover:text-[var(--gold)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-sm"
          >
            {email}
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--line)]">
          <p className="text-xs text-[var(--muted)] text-center">
            © {new Date().getFullYear()} {company}. Lending products subject to approval and state availability.
          </p>
        </div>
      </Container>
    </footer>
  );
}
