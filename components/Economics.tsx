'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { TrendingUp, DollarSign } from 'lucide-react';
import { InvestorCalculator } from './InvestorCalculator';

interface EconomicsCard {
  title: string;
  description: string;
}

interface EconomicsProps {
  title: string;
  cards: EconomicsCard[];
}

export function Economics({ title, cards }: EconomicsProps) {
  return (
    <Section id="economics" className="bg-[var(--surface)]">
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
          <p className="text-lg text-[var(--muted)]">Illustrative metrics for investor consideration</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-2xl p-8 group hover:border-[var(--gold)] transition-all"
            >
              <div className="inline-flex p-3 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-6 group-hover:border-[var(--gold)] transition-colors">
                {idx === 0 ? (
                  <TrendingUp className="h-6 w-6 text-[var(--gold)]" />
                ) : (
                  <DollarSign className="h-6 w-6 text-[var(--gold)]" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--fg)]">{card.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <InvestorCalculator />
      </Container>
    </Section>
  );
}
