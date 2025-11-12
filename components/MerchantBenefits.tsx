'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Section } from './Section';
import { Check } from 'lucide-react';
import { MerchantROI } from './MerchantROI';

interface MerchantBenefitsProps {
  title: string;
  benefits: string[];
}

export function MerchantBenefits({ title, benefits }: MerchantBenefitsProps) {
  return (
    <Section id="product" className="relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-lg bg-[var(--gold)]/10 border border-[var(--gold)]/20 group-hover:border-[var(--gold)] transition-colors flex-shrink-0">
                  <Check className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <p className="text-lg text-[var(--fg)] leading-relaxed pt-1">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MerchantROI />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
