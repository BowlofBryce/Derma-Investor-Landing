'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

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
  const display = useTransform(spring, (current) =>
    current.toFixed(1)
  );

  const [displayValue, setDisplayValue] = useState('0.0');

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [value, spring, display]);

  return <span>{displayValue}%</span>;
}

export function MerchantROI() {
  const [baseTicket, setBaseTicket] = useState(1500);
  const [monthlyProjects, setMonthlyProjects] = useState(20);

  const cancellationRateWithout = 0.25;
  const cancellationRateWith = 0.08;

  const withoutFinancing = {
    avgTicket: baseTicket,
    completedProjects: monthlyProjects * (1 - cancellationRateWithout),
    revenue: baseTicket * monthlyProjects * (1 - cancellationRateWithout)
  };

  const withFinancing = {
    avgTicket: baseTicket * 1.35,
    completedProjects: monthlyProjects * (1 - cancellationRateWith),
    revenue: baseTicket * 1.35 * monthlyProjects * (1 - cancellationRateWith)
  };

  const increasePercent = ((withFinancing.revenue - withoutFinancing.revenue) / withoutFinancing.revenue) * 100;
  const revenueIncrease = withFinancing.revenue - withoutFinancing.revenue;

  return (
    <div className="glass-card rounded-2xl p-8 space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-[var(--fg)]">Merchant Revenue Impact</h3>
        <p className="text-sm text-[var(--muted)]">See how financing drives higher completion and larger tickets</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="ticket" className="text-[var(--fg)]">Pre-Derma Ticket Size</Label>
            <span className="text-[var(--gold)] font-semibold">${baseTicket.toLocaleString()}</span>
          </div>
          <Slider
            id="ticket"
            min={500}
            max={3000}
            step={100}
            value={[baseTicket]}
            onValueChange={(v) => setBaseTicket(v[0])}
            className="cursor-pointer"
            aria-label="Pre-Derma ticket size"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label htmlFor="projects" className="text-[var(--fg)]">Monthly Projects</Label>
            <span className="text-[var(--gold)] font-semibold">{monthlyProjects}</span>
          </div>
          <Slider
            id="projects"
            min={5}
            max={50}
            step={5}
            value={[monthlyProjects]}
            onValueChange={(v) => setMonthlyProjects(v[0])}
            className="cursor-pointer"
            aria-label="Monthly projects"
          />
        </div>

      </div>

      <div className="pt-6 border-t border-[var(--line)] space-y-6" aria-live="polite">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-6 border border-[var(--line)]">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-[var(--muted)]" />
              <span className="text-sm font-semibold text-[var(--muted)]">Without Financing</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xs text-[var(--muted)]">Avg Ticket</span>
                <span className="text-sm font-semibold text-[var(--fg)]">
                  ${withoutFinancing.avgTicket.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[var(--muted)]">Completed</span>
                <span className="text-sm font-semibold text-[var(--fg)]">
                  <AnimatedNumber value={withoutFinancing.completedProjects} />
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[var(--line)]">
                <span className="text-xs font-semibold text-[var(--muted)]">Revenue</span>
                <span className="text-lg font-bold text-[var(--fg)]">
                  $<AnimatedNumber value={withoutFinancing.revenue} />
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 border border-[var(--gold)]/40 bg-[var(--gold)]/5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-[var(--gold)]" />
              <span className="text-sm font-semibold text-[var(--gold)]">With Derma Finance</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-xs text-[var(--muted)]">Avg Ticket</span>
                <span className="text-sm font-semibold text-[var(--gold)]">
                  ${Math.round(withFinancing.avgTicket).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[var(--muted)]">Completed</span>
                <span className="text-sm font-semibold text-[var(--gold)]">
                  <AnimatedNumber value={withFinancing.completedProjects} />
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[var(--gold)]/20">
                <span className="text-xs font-semibold text-[var(--muted)]">Revenue</span>
                <span className="text-lg font-bold text-[var(--gold)]">
                  $<AnimatedNumber value={withFinancing.revenue} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 border-2 border-[var(--gold)] bg-gradient-to-br from-[var(--gold)]/10 to-transparent">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0">
                <DollarSign className="h-6 w-6 text-[var(--bg)]" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted)] mb-1">Monthly Revenue Increase</p>
                <p className="text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                  $<AnimatedNumber value={revenueIncrease} />
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm text-[var(--muted)] mb-1">Growth</p>
              <p className="text-2xl font-bold text-[var(--gold)]">
                +<AnimatedPercent value={increasePercent} />
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs text-[var(--muted)]">
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>Financing reduces cancellation from 25% to 8% by removing financial barriers</p>
          </div>
          <div className="flex items-start gap-2">
            <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>Average ticket increases 35% as customers book larger, multi-session packages</p>
          </div>
        </div>
      </div>
    </div>
  );
}
