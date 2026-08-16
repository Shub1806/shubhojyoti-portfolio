'use client';

import { useEffect, useRef, useState } from 'react';
import { profile, chatStarters } from '@/data/profile';

type Message = { role: 'user' | 'assistant'; content: string };

const GREETING: Message = {
  role: 'assistant',
  content: `Hi — I answer questions about ${profile.name.split(' ')[0]}'s work. Ask away.`,
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [draft, setDraft] = useState('');
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, pending]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pending) return;

    const next = [...messages, { role: 'user' as const, content: trimmed }];
    setMessages(next);
    setDraft('');
    setPending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: 'assistant',
          content: `That request did not go through. Try again, or email ${profile.email}.`,
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-widest text-accentContrast shadow-lg transition-transform hover:scale-[1.03]"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal" />
        {open ? 'Close' : 'Ask about me'}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-40 flex h-[min(30rem,70vh)] w-[min(23rem,calc(100vw-2.5rem))] flex-col rounded-sm border border-rule bg-paper shadow-2xl">
          <header className="border-b border-rule px-4 py-3">
            <p className="eyebrow">Ask about {profile.name.split(' ')[0]}</p>
            <p className="text-[12px] text-muted">
              Answers come from this site&apos;s content. It can get things wrong.
            </p>
          </header>

          <div ref={scrollRef} className="thin-scroll flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-sm px-3 py-2 text-[14px] leading-relaxed ${
                  m.role === 'user'
                    ? 'ml-auto bg-accent text-accentContrast'
                    : 'border border-rule bg-[var(--wash)]'
                }`}
              >
                {m.content}
              </div>
            ))}

            {pending && (
              <div className="max-w-[85%] rounded-sm border border-rule bg-[var(--wash)] px-3 py-2 font-mono text-[12px] text-muted">
                thinking…
              </div>
            )}

            {messages.length === 1 && !pending && (
              <div className="flex flex-wrap gap-2 pt-1">
                {chatStarters.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-rule px-3 py-1 text-[12px] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-rule p-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(draft)}
              placeholder="Type a question"
              aria-label="Type a question"
              className="min-w-0 flex-1 bg-transparent px-1 text-[14px] outline-none placeholder:text-muted"
            />
            <button
              onClick={() => send(draft)}
              disabled={pending || !draft.trim()}
              className="rounded-sm bg-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accentContrast disabled:opacity-40"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
