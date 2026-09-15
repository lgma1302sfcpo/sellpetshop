'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export function Reveal({ children, className = '', delay = 0, id }: { children: ReactNode; className?: string; delay?: number; id?: string }) {
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
    <div ref={ref} id={id} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
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

export function BouncingBall() {
  return (
    <div className="ball-scene" aria-hidden="true">
      <div className="ball" />
      <div className="ball-shadow" />
    </div>
  );
}
