'use client';

import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { Shield, FileCheck, UserCheck, AlertCircle, Eye, Lock, Users, Headphones } from 'lucide-react';

interface ComplianceItem {
  title: string;
  description: string;
}

interface ComplianceProps {
  title: string;
  subtitle: string;
  items: ComplianceItem[];
}

const icons = [FileCheck, Shield, UserCheck, AlertCircle, Eye, Lock, Users, Headphones];

export function Compliance({ title, subtitle, items }: ComplianceProps) {
  return (
    <Section id="compliance" className="relative">
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
          <p className="text-lg text-[var(--muted)]">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, idx) => {
            const Icon = icons[idx] || Shield;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 group hover:border-[var(--gold)] transition-all"
              >
                <Icon className="h-8 w-8 text-[var(--gold)] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--fg)]">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {['Bank-grade standards', 'Transparent terms', 'Consumer-first policies'].map((badge, idx) => (
            <div
              key={idx}
              className="glass-card px-6 py-3 rounded-full border-[var(--gold)]/30"
            >
              <span className="text-sm font-semibold text-[var(--gold)]">{badge}</span>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
