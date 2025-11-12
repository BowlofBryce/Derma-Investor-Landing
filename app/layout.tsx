import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Derma Finance | Tattoo Now. Pay Over Sessions.',
  description: 'The first BNPL purpose-built for multi-session services. Approve once, capture each visit only after it happens. Lower risk, higher completion, transparent terms.',
  keywords: ['BNPL', 'Buy Now Pay Later', 'tattoo financing', 'multi-session financing', 'merchant financing'],
  openGraph: {
    title: 'Derma Finance | Tattoo Now. Pay Over Sessions.',
    description: 'The first BNPL purpose-built for multi-session services. Approve once, capture each visit only after it happens.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Derma Finance | Tattoo Now. Pay Over Sessions.',
    description: 'The first BNPL purpose-built for multi-session services.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--gold)] focus:text-[var(--bg)] focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
