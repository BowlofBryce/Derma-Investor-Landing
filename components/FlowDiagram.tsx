'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { ArrowRight } from 'lucide-react';

export function FlowDiagram() {
  const steps = [
    {
      number: '1',
      title: 'Approval',
      description: 'Customer approved for total authorized amount'
    },
    {
      number: '2',
      title: 'Session Capture',
      description: 'Merchant confirms session completion'
    },
    {
      number: '3',
      title: 'Merchant Payout',
      description: 'T+0/T+1 payment to merchant'
    },
    {
      number: '4',
      title: 'Fixed Repayments',
      description: 'Customer makes scheduled ACH payments'
    },
    {
      number: '5',
      title: 'Re-amortize if early',
      description: 'Adjust loan if customer ends project early'
    }
  ];

  return (
    <Section id="how-it-works" className="bg-[var(--surface)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">How the Money Flows</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Session-aligned funding that protects merchants and customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center border-[var(--gold)]/20 relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F4E3B0] via-[var(--gold)] to-[var(--gold-600)] flex items-center justify-center mb-4 text-2xl font-bold text-[var(--bg)] shadow-lg shadow-[var(--gold)]/20">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[var(--fg)] mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
              </motion.div>

              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 + 0.3 }}
                  className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--surface)] flex items-center justify-center border-2 border-[var(--gold)]">
                    <ArrowRight className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                </motion.div>
              )}

              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 + 0.2 }}
                  className="md:hidden h-12 w-0.5 bg-gradient-to-b from-[var(--gold)] to-[var(--gold-600)] mx-auto my-2 origin-top"
                />
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass-card rounded-2xl p-8 border-[var(--gold)]/30 text-center"
        >
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--gold)] font-semibold">Key Advantage:</span> Unlike traditional BNPL that pays merchants upfront for the full amount, Derma Finance only disburses funds for completed sessions—reducing risk and aligning incentives.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
