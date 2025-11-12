'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { UserPlus, Link2, CheckCircle, Calendar, ArrowRight, Repeat, LucideIcon } from 'lucide-react';

interface Step {
  label: string;
  icon: string;
}

interface CustomerJourneyProps {
  title: string;
  steps: Step[];
  callout: string;
}

const iconMap: Record<string, LucideIcon> = {
  'user-plus': UserPlus,
  'link': Link2,
  'check-circle': CheckCircle,
  'calendar': Calendar,
  'arrow-right': ArrowRight,
  'repeat': Repeat
};

export function CustomerJourney({ title, steps, callout }: CustomerJourneyProps) {
  return (
    <Section id="how-it-works" className="relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 relative group hover:border-[var(--gold)] transition-all"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--bg)] font-bold text-sm">
                  {idx + 1}
                </div>
                <Icon className="h-8 w-8 text-[var(--gold)] mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-[var(--fg)] leading-relaxed">{step.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card rounded-2xl p-6 md:p-8 border-[var(--gold)]/30"
        >
          <p className="text-lg text-[var(--muted)] text-center leading-relaxed">
            <span className="text-[var(--gold)] font-semibold">Note:</span> {callout}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
