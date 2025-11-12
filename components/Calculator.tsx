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

export function Calculator() {
  const [monthlyQuotes, setMonthlyQuotes] = useState(50);
  const [avgTicket, setAvgTicket] = useState(3000);
  const [adoption, setAdoption] = useState(40);

  const fundedVolume = (monthlyQuotes * (adoption / 100) * avgTicket);
  const incrementalRevenue = fundedVolume * 0.15;

  return (
    <div className="glass-card rounded-2xl p-8 space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-[var(--fg)]">Impact Calculator</h3>
        <p className="text-sm text-[var(--muted)]">See how Derma Finance grows your business</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="quotes" className="text-[var(--fg)]">Monthly Quotes</Label>
            <span className="text-[var(--gold)] font-semibold">{monthlyQuotes}</span>
          </div>
          <Slider
            id="quotes"
            min={10}
            max={200}
            step={10}
            value={[monthlyQuotes]}
            onValueChange={(v) => setMonthlyQuotes(v[0])}
            className="cursor-pointer"
            aria-label="Monthly quotes"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="ticket" className="text-[var(--fg)]">Average Ticket</Label>
            <span className="text-[var(--gold)] font-semibold">${avgTicket.toLocaleString()}</span>
          </div>
          <Slider
            id="ticket"
            min={500}
            max={10000}
            step={500}
            value={[avgTicket]}
            onValueChange={(v) => setAvgTicket(v[0])}
            className="cursor-pointer"
            aria-label="Average ticket size"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="adoption" className="text-[var(--fg)]">Adoption Rate</Label>
            <span className="text-[var(--gold)] font-semibold">{adoption}%</span>
          </div>
          <Slider
            id="adoption"
            min={10}
            max={80}
            step={5}
            value={[adoption]}
            onValueChange={(v) => setAdoption(v[0])}
            className="cursor-pointer"
            aria-label="Customer adoption rate"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-[var(--line)] space-y-4" aria-live="polite">
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted)]">Monthly Funded Volume</span>
          <span className="text-2xl font-bold text-[var(--gold)]">
            $<AnimatedNumber value={fundedVolume} />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted)]">Incremental Revenue</span>
          <span className="text-2xl font-bold text-[var(--gold)]">
            $<AnimatedNumber value={incrementalRevenue} />
          </span>
        </div>
        <p className="text-xs text-[var(--muted)] pt-2">
          Assumes 15% incremental revenue from increased conversion and larger tickets
        </p>
      </div>
    </div>
  );
}
