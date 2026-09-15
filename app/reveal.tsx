'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Variant = 'up' | 'left' | 'right' | 'scale';

export function Reveal({
  children,
  className = '',
  delay = 0,
  id,
  variant = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} id={id} className={`reveal dir-${variant} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function CountUp({ value, prefix = '', suffix = '', duration = 1100 }: { value: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(value * eased));
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

export function PawTrail() {
  const paws = Array.from({ length: 6 });
  return (
    <div className="paw-trail" aria-hidden="true">
      {paws.map((_, i) => (
        <span key={i} className="paw" style={{ animationDelay: `${i * 0.28}s` }}>
          🐾
        </span>
      ))}
    </div>
  );
}

export function GrowthArrows({ count = 3 }: { count?: number }) {
  const arrows = Array.from({ length: count });
  return (
    <div className="growth-arrows" aria-hidden="true">
      {arrows.map((_, i) => (
        <span key={i} className="growth-arrow" style={{ left: `${18 + i * 30}%`, animationDelay: `${i * 0.85}s` }}>
          ↑
        </span>
      ))}
    </div>
  );
}

type Toast = { icon: string; title: string; sub: string };

export function NotificationCycle({ messages, className = '' }: { messages: Toast[]; className?: string }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    let holdTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      setShow(true);
      holdTimer = setTimeout(() => {
        setShow(false);
        hideTimer = setTimeout(() => setIndex((i) => (i + 1) % messages.length), 500);
      }, 2700);
    };
    const startDelay = setTimeout(cycle, 700);
    const interval = setInterval(cycle, 3900);
    return () => {
      clearTimeout(startDelay);
      clearInterval(interval);
      clearTimeout(holdTimer);
      clearTimeout(hideTimer);
    };
  }, [messages.length]);
  const m = messages[index];
  return (
    <div className={`toast ${show ? 'toast-in' : 'toast-out'} ${className}`} aria-hidden="true">
      <span className="toast-icon">{m.icon}</span>
      <span className="toast-text">
        <b>{m.title}</b>
        <small>{m.sub}</small>
      </span>
    </div>
  );
}

export function DogBall() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('bounce');
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="dogball-scene" aria-hidden="true">
      <div ref={ref} className="dogball" />
      <div className="dogball-shadow" />
    </div>
  );
}
