'use client';

import { useState } from 'react';
import { LAND_PATH, WORLD_VIEWBOX } from '@/lib/worldPath';
import { places } from '@/data/profile';

// The projection baked into lib/worldPath.ts is plain equirectangular,
// so placing a coordinate is straight arithmetic.
const W = 1000;
const H = 500;
const toX = (lng: number) => ((lng + 180) / 360) * W;
const toY = (lat: number) => ((90 - lat) / 180) * H;

// A gently bowed line between two pins, so the route reads as travel
// rather than as a chart.
function arc(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
) {
  const x1 = toX(a.lng);
  const y1 = toY(a.lat);
  const x2 = toX(b.lng);
  const y2 = toY(b.lat);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // Push the control point perpendicular to the line, scaled by distance.
  const cx = mx + (dy / (dist || 1)) * dist * 0.16;
  const cy = my - (dx / (dist || 1)) * dist * 0.16;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

export default function WorldMap() {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : places[active];

  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-sm border border-rule bg-[var(--wash)]">
        <svg
          viewBox={WORLD_VIEWBOX}
          className="block h-auto w-full"
          role="img"
          aria-label="World map showing the places listed below"
        >
          <path d={LAND_PATH} fill="var(--map-land)" stroke="var(--map-line)" strokeWidth={0.4} />

          {places.slice(0, -1).map((p, i) => (
            <path
              key={`route-${i}`}
              d={arc(p, places[i + 1])}
              fill="none"
              stroke="var(--signal)"
              strokeWidth={1.1}
              strokeDasharray="4 5"
              opacity={0.4}
            />
          ))}

          {places.map((p, i) => {
            const x = toX(p.lng);
            const y = toY(p.lat);
            const isActive = active === i;
            return (
              <g
                key={p.city}
                tabIndex={0}
                role="button"
                aria-label={`${p.city}, ${p.year}`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                {/* Generous invisible hit area — the visible dot is tiny. */}
                <circle cx={x} cy={y} r={16} fill="transparent" />
                <circle
                  cx={x}
                  cy={y}
                  className="pin-ring"
                  fill="none"
                  stroke="var(--signal)"
                  strokeWidth={1.2}
                  style={{ animationDelay: `${i * 0.6}s` }}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 6 : 4}
                  fill="var(--signal)"
                  stroke="var(--paper)"
                  strokeWidth={1.5}
                  style={{ transition: 'r 0.2s ease' }}
                />
              </g>
            );
          })}
        </svg>

        {current && (
          <div
            className="pointer-events-none absolute z-10 hidden -translate-x-1/2 -translate-y-full sm:block"
            style={{
              left: `${(toX(current.lng) / W) * 100}%`,
              top: `${(toY(current.lat) / H) * 100 - 3}%`,
            }}
          >
            <div className="max-w-[220px] rounded-sm border border-rule bg-paper px-3 py-2 shadow-sm">
              <p className="font-mono text-[10px] tracking-widest text-accent">
                {current.year}
              </p>
              <p className="font-display text-[15px] font-semibold leading-snug">
                {current.city}
              </p>
              <p className="mt-0.5 text-[12px] leading-snug text-muted">{current.note}</p>
            </div>
          </div>
        )}
      </div>

      {/* Always-visible list: the map is the flourish, this is the content. */}
      <ol className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((p, i) => (
          <li
            key={p.city}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="border-t border-rule pt-3 transition-colors"
            style={{ borderTopColor: active === i ? 'var(--signal)' : undefined }}
          >
            <p className="font-mono text-[10px] tracking-widest text-muted">{p.year}</p>
            <p className="font-display text-[16px] font-semibold">{p.city}</p>
            <p className="text-[13px] leading-snug text-muted">{p.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
