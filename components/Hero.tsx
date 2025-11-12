'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from './Container';
import { AnimatedBackground } from './AnimatedBackground';
import { TattooCarousel } from './TattooCarousel';
import { ContactDialog } from './ContactDialog';

interface HeroProps {
  headline: string;
  subhead: string;
  primaryCTA: string;
}

export function Hero({ headline, subhead, primaryCTA }: HeroProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatedBackground />
        <TattooCarousel />

        <div className="relative z-10 w-full">
          <div className="glass-card-fullwidth backdrop-blur-xl border-t border-b border-gray-700/30 shadow-2xl py-20 md:py-28">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                  <div className="leading-[1.1] mb-4">
                    {headline.split('.')[0]}.
                  </div>
                  <div className="text-gradient-gold leading-[1.1] inline-block">
                    {headline.split('.')[1]?.trim()}
                  </div>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-[var(--muted)] mb-10 leading-relaxed max-w-3xl mt-8"
                >
                  {subhead}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button
                    size="lg"
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-[var(--gold)] text-[var(--bg)] hover:bg-[var(--gold-600)] hover:scale-105 transition-all text-base px-8 focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
                  >
                    {primaryCTA}
                  </Button>
                </motion.div>
              </motion.div>
            </Container>
          </div>
        </div>
      </section>

      <ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
