'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { ContactDialog } from './ContactDialog';

interface FinalCTAProps {
  headline: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export function FinalCTA({ headline, primaryCTA, secondaryCTA }: FinalCTAProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--gold)]/5 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center border-[var(--gold)]/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--gold)]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gradient-gold">{headline}</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsDialogOpen(true)}
                className="bg-[var(--gold)] text-[var(--bg)] hover:bg-[var(--gold-600)] hover:scale-105 transition-all text-base px-8 group"
              >
                {primaryCTA}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-[var(--fg)] border border-[var(--line)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all text-base px-8"
              >
                <Calendar className="mr-2 h-4 w-4" />
                {secondaryCTA}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>

      <ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
