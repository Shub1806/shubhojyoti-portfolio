'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'places', label: 'Places' },
  { id: 'education', label: 'Education' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionNav() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.5, 1] }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed right-8 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ul className="space-y-3">
        {SECTIONS.map(({ id, label }) => {
          const on = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center justify-end gap-2.5"
                aria-current={on ? 'true' : undefined}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest transition-opacity ${
                    on ? 'text-accent opacity-100' : 'text-muted opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {label}
                </span>
                <span
                  className="block h-px transition-all"
                  style={{
                    width: on ? 28 : 14,
                    background: on ? 'var(--accent)' : 'var(--rule)',
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
