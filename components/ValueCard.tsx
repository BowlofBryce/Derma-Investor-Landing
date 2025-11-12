'use client';

import { motion } from 'framer-motion';
import { LucideIcon, Layers, ShieldCheck, TrendingDown, Zap } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  'shield-check': ShieldCheck,
  'trending-down': TrendingDown,
  zap: Zap
};

export function ValueCard({ title, description, icon, index }: ValueCardProps) {
  const Icon = iconMap[icon] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, borderColor: 'var(--gold)' }}
      className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--gold)]/10 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 group-hover:border-[var(--gold)] transition-colors">
          <Icon className="h-6 w-6 text-[var(--gold)] group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-[var(--fg)]">{title}</h3>
          <p className="text-[var(--muted)] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
