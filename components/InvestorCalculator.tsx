'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [value, spring, display]);

  return <span>{displayValue}</span>;
}

function AnimatedPercent({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) => current.toFixed(1));

  const [displayValue, setDisplayValue] = useState('0.0');

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [value, spring, display]);

  return <span>{displayValue}</span>;
}

const MONTHLY_PER_SHOP = 7500;
const TAKE_RATE_PROXY = 0.25;
const VAR_EXPENSES_PROXY = 0.106;

export function InvestorCalculator() {
  const [numShops, setNumShops] = useState(50);

  const annualFundedVolume = numShops * MONTHLY_PER_SHOP * 12;
  const grossRevenue = annualFundedVolume * TAKE_RATE_PROXY;
  const variableExpenses = annualFundedVolume * VAR_EXPENSES_PROXY;
  const netProfit = grossRevenue - variableExpenses;
  const netMargin = annualFundedVolume > 0 ? (netProfit / annualFundedVolume) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8 space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold mb-2 text-[var(--fg)]">Revenue Model</h3>
        <p className="text-sm text-[var(--muted)]">Explore platform economics based on merchant network size</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="shops" className="text-[var(--fg)]">Number of Shops</Label>
            <span className="text-[var(--gold)] font-semibold">{numShops}</span>
          </div>
          <Slider
            id="shops"
            min={10}
            max={500}
            step={10}
            value={[numShops]}
            onValueChange={(v) => setNumShops(v[0])}
            className="cursor-pointer"
            aria-label="Number of merchant shops"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-[var(--line)] space-y-4" aria-live="polite">
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted)]">Annual Funded Volume</span>
          <span className="text-2xl font-bold text-[var(--gold)]">
            $<AnimatedNumber value={annualFundedVolume} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted)]">Gross Revenue</span>
          <span className="text-xl font-semibold text-[var(--gold)]">
            $<AnimatedNumber value={grossRevenue} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted)]">Net Profit</span>
          <span className="text-xl font-semibold text-[var(--gold)]">
            $<AnimatedNumber value={netProfit} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted)]">Net Margin</span>
          <span className="text-xl font-semibold text-[var(--gold)]">
            <AnimatedPercent value={netMargin} />%
          </span>
        </div>
        <p className="text-xs text-[var(--muted)] pt-2">
          Net margin shown as % of funded volume. Gross revenue: 25% take rate (8% merchant fee + 2% origination + 15% APR proxy). Variable expenses: 10.6% (6% cost of capital + 3.6% expected credit loss + 1% servicing).
        </p>
      </div>
    </motion.div>
  );
}
