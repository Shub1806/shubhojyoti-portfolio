import WorldMap from '@/components/WorldMap';
import ChatWidget from '@/components/ChatWidget';
import SectionNav from '@/components/SectionNav';
import ThemeToggle from '@/components/ThemeToggle';
import {
  profile,
  about,
  experience,
  projects,
  education,
  stack,
  awards,
} from '@/data/profile';

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-rule py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[140px_1fr] lg:gap-12">
        <div>
          <h2 className="eyebrow lg:sticky lg:top-24">{label}</h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-rule px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export default function Page() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto max-w-shell px-6 sm:px-10">
      <SectionNav />
      <ThemeToggle />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="flex min-h-[85vh] flex-col justify-center py-20">
        <p className="eyebrow">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-8 max-w-2xl text-[clamp(1.05rem,2.2vw,1.3rem)] leading-relaxed text-muted">
          {profile.thesis}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={profile.resumeFile}
            download
            className="rounded-sm bg-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-accentContrast transition-colors hover:bg-accentHover"
          >
            Download résumé
          </a>
          <a href={`mailto:${profile.email}`} className="inline-link font-mono text-[13px]">
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-link font-mono text-[13px]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </header>

      {/* ── About ────────────────────────────────────────── */}
      <Section id="about" label="About">
        <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* ── Experience ───────────────────────────────────── */}
      <Section id="work" label="Work">
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={`${job.org}-${job.period}`} className="grid gap-2 sm:grid-cols-[130px_1fr] sm:gap-6">
              <p className="font-mono text-[11px] tracking-wider text-muted sm:pt-1.5">
                {job.period}
              </p>
              <div>
                <h3 className="font-display text-[20px] font-semibold leading-snug">
                  {job.role} ·{' '}
                  {job.href ? (
                    <a href={job.href} target="_blank" rel="noreferrer" className="inline-link">
                      {job.org}
                    </a>
                  ) : (
                    <span className="text-accent">{job.org}</span>
                  )}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                  {job.detail}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Projects ─────────────────────────────────────── */}
      <Section id="projects" label="Projects">
        <div className="space-y-4">
          {featured.map((p) => (
            <article
              key={p.name}
              className="rounded-sm border border-rule bg-[var(--wash)] p-6 transition-colors hover:border-accent sm:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[26px] font-semibold leading-tight">
                  {p.source ? (
                    <a href={p.source} target="_blank" rel="noreferrer" className="inline-link">
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <span className="font-mono text-[11px] text-muted">{p.year}</span>
              </div>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-5 flex gap-5">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-link font-mono text-[12px]">
                    Visit site →
                  </a>
                )}
                {p.source && (
                  <a href={p.source} target="_blank" rel="noreferrer" className="inline-link font-mono text-[12px]">
                    Source →
                  </a>
                )}
              </div>
            </article>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {rest.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-sm border border-rule p-5 transition-colors hover:border-accent"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-[19px] font-semibold leading-tight">
                    {p.source ? (
                      <a href={p.source} target="_blank" rel="noreferrer" className="inline-link">
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <span className="font-mono text-[11px] text-muted">{p.year}</span>
                </div>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="inline-link font-mono text-[12px]">
                      Visit →
                    </a>
                  )}
                  {p.source && (
                    <a href={p.source} target="_blank" rel="noreferrer" className="inline-link font-mono text-[12px]">
                      Source →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Places ───────────────────────────────────────── */}
      <Section id="places" label="Places">
        <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-muted">
          Where the work has happened so far. Hover a pin for the story.
        </p>
        <WorldMap />
      </Section>

      {/* ── Education ────────────────────────────────────── */}
      <Section id="education" label="Education">
        <ol className="space-y-8">
          {education.map((e) => (
            <li key={e.credential} className="grid gap-2 sm:grid-cols-[130px_1fr] sm:gap-6">
              <p className="font-mono text-[11px] tracking-wider text-muted sm:pt-1.5">{e.period}</p>
              <div>
                <h3 className="font-display text-[20px] font-semibold leading-snug">
                  {e.credential}
                </h3>
                <p className="text-[14px] text-accent">{e.org}</p>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{e.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Stack ────────────────────────────────────────── */}
      <Section id="stack" label="Stack">
        <div className="space-y-7">
          {stack.map((group) => (
            <div key={group.group}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {group.group}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Awards ───────────────────────────────────────── */}
      {awards.length > 0 && (
        <Section id="awards" label="Awards">
          <ol className="space-y-6">
            {awards.map((a) => (
              <li key={a.title} className="grid gap-1 sm:grid-cols-[130px_1fr] sm:gap-6">
                <p className="font-mono text-[11px] tracking-wider text-muted sm:pt-1">{a.year}</p>
                <div>
                  <h3 className="font-display text-[18px] font-semibold">
                    {a.href ? (
                      <a href={a.href} target="_blank" rel="noreferrer" className="inline-link">
                        {a.title}
                      </a>
                    ) : (
                      a.title
                    )}
                  </h3>
                  <p className="text-[14px] text-accent">{a.org}</p>
                  <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-muted">{a.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* ── Contact ──────────────────────────────────────── */}
      <Section id="contact" label="Contact">
        <h3 className="max-w-xl font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight">
          Got something you want built? Send it over.
        </h3>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">
          I read everything that lands in my inbox and reply to anything that is not a
          newsletter.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-block rounded-sm bg-accent px-6 py-3 font-mono text-[12px] uppercase tracking-widest text-accentContrast transition-colors hover:bg-accentHover"
        >
          {profile.email}
        </a>
      </Section>

      <footer className="border-t border-rule py-10 font-mono text-[11px] text-muted">
        <p>
          Built with Next.js and Tailwind by {profile.name}. Type set in Fraunces and Instrument
          Sans.
        </p>
      </footer>

      <ChatWidget />
    </main>
  );
}
