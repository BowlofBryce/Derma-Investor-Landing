'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { Plug, CheckSquare, DollarSign, LucideIcon } from 'lucide-react';

interface MerchantStep {
  title: string;
  description: string;
  icon: string;
}

interface MerchantJourneyProps {
  title: string;
  steps: MerchantStep[];
  callout: string;
}

const iconMap: Record<string, LucideIcon> = {
  plug: Plug,
  'check-square': CheckSquare,
  'dollar-sign': DollarSign
};

export function MerchantJourney({ title, steps, callout }: MerchantJourneyProps) {
  return (
    <Section id="merchants" className="bg-[var(--surface)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">{title}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Plug;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-8 text-center group hover:border-[var(--gold)] transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6 group-hover:border-[var(--gold)] transition-colors">
                  <Icon className="h-8 w-8 text-[var(--gold)] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--fg)]">{step.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-6 md:p-8 border-[var(--gold)]/30 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full blur-3xl" />
          <p className="text-lg text-[var(--muted)] text-center leading-relaxed relative z-10">
            <span className="text-[var(--gold)] font-semibold">Dispute Protection:</span> {callout}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
