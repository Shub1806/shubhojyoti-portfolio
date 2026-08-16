import {
  profile,
  about,
  experience,
  projects,
  education,
  stack,
  awards,
  places,
} from '@/data/profile';

// Everything the assistant is allowed to know, assembled from data/profile.ts
// so there is only ever one copy of your details to keep current.
export function buildContext() {
  const lines: string[] = [];

  lines.push(`NAME: ${profile.name}`);
  lines.push(`ROLE: ${profile.role}`);
  lines.push(`BASED IN: ${profile.location}`);
  lines.push(`CONTACT EMAIL: ${profile.email}`);
  lines.push(`SUMMARY: ${profile.thesis}`);
  lines.push(`LINKS: ${profile.socials.map((s) => `${s.label} ${s.href}`).join(', ')}`);

  lines.push('\nABOUT:');
  about.forEach((p) => lines.push(`- ${p}`));

  lines.push('\nEXPERIENCE:');
  experience.forEach((e) =>
    lines.push(`- ${e.period} — ${e.role} at ${e.org}. ${e.detail} Tools: ${e.tools.join(', ')}.`)
  );

  lines.push('\nPROJECTS:');
  projects.forEach((p) =>
    lines.push(
      `- ${p.name} (${p.year}): ${p.blurb} Built with ${p.tools.join(', ')}.` +
        (p.live ? ` Live at ${p.live}.` : '') +
        (p.source ? ` Source at ${p.source}.` : '')
    )
  );

  lines.push('\nEDUCATION:');
  education.forEach((e) =>
    lines.push(`- ${e.period} — ${e.credential}, ${e.org}. ${e.detail}`)
  );

  lines.push('\nTECHNICAL SKILLS:');
  stack.forEach((s) => lines.push(`- ${s.group}: ${s.items.join(', ')}`));

  if (awards.length) {
    lines.push('\nAWARDS:');
    awards.forEach((a) => lines.push(`- ${a.year} — ${a.title}, ${a.org}. ${a.detail}`));
  }

  lines.push('\nPLACES LIVED AND WORKED:');
  places.forEach((p) => lines.push(`- ${p.year} — ${p.city}. ${p.note}`));

  return lines.join('\n');
}
