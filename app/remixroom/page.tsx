"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  subscribeToRemixRoomWithState,
  type SubscribeState,
} from "./actions";
import { HERO_IMAGE, PROMPTS, type Prompt } from "./data";

const initialState: SubscribeState = { ok: false };

const whatThisIs = [
  "Prompts you can run anywhere",
  "A process for finding your unique angle",
  "Yours to keep, with no account anywhere",
];

const whatThisIsNot = ["A course", "A chatbot", "Another subscription"];

const methodLedger = [
  {
    code: "RMX",
    range: "01-04",
    name: "Structural reverse engineer",
    line: "Bring a reference and a rough thought. Leave with the moves under the surface.",
  },
  {
    code: "CLD",
    range: "05-09",
    name: "Interview then render",
    line: "Answer three questions. The prompt builds the piece after the material has a pulse.",
  },
];

function GateButton({ revealed }: { revealed: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || revealed}
      className="font-body text-[15px] font-medium text-[var(--brand-gold)] transition-opacity duration-200 disabled:cursor-default disabled:opacity-45"
    >
      {pending ? "Opening" : "Open"}
    </button>
  );
}

function InlineGate({
  state,
  formAction,
}: {
  state: SubscribeState;
  formAction: (formData: FormData) => void;
}) {
  const revealed = state.ok;

  return (
    <form
      action={formAction}
      className="mt-8 font-body text-[20px] leading-relaxed text-[#F0EDE6]"
    >
      <span>Drop your email. The nine prompts open below.</span>{" "}
      {revealed ? (
        <span className="inline-flex items-baseline gap-2 transition-opacity duration-[400ms]">
          <span aria-hidden="true">✓</span>
          <span>{state.email}</span>
        </span>
      ) : (
        <span className="inline-flex flex-wrap items-baseline gap-x-4 gap-y-3">
          <label className="sr-only" htmlFor="remix-email">
            Email
          </label>
          <input
            id="remix-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="w-[min(100%,260px)] border-0 border-b border-[#F0EDE6]/25 bg-transparent px-0 py-1 font-body text-[17px] text-[#F0EDE6] outline-none transition-colors duration-200 placeholder:text-[#8a8a96] focus:border-[#F0EDE6]/70"
          />
          <GateButton revealed={revealed} />
        </span>
      )}
      {!revealed && state.error ? (
        <p className="mt-3 font-body text-[14px] text-[#F0EDE6]/70">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}

function IndexRow({ prompt }: { prompt: Prompt }) {
  const packLabel =
    prompt.pack === "remix"
      ? "structural reverse engineer"
      : "interview then render";

  return (
    <div className="group border-t border-[#F0EDE6]/[0.08] py-6 transition-colors duration-200 hover:border-[#F0EDE6]/[0.18] md:py-8">
      <div className="grid gap-3 md:grid-cols-[72px_1fr_220px] md:items-baseline">
        <span className="font-mono text-[13px] text-[#F0EDE6] transition-colors duration-200 group-hover:text-[var(--brand-gold)]">
          {prompt.number}
        </span>
        <span className="font-display text-[36px] font-normal leading-none text-[#F0EDE6] transition-[translate] duration-200 group-hover:translate-x-1 md:text-[48px]">
          {prompt.title}
        </span>
        <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#8a8a96]">
          {packLabel}
        </span>
      </div>
      <p className="mt-4 max-w-[640px] font-body text-[16px] leading-relaxed text-[#8a8a96] md:ml-[72px]">
        {prompt.promise}
      </p>
    </div>
  );
}

function PromptSpread({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);
  const [outlined, setOutlined] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setOutlined(true);
    window.setTimeout(() => setOutlined(false), 300);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article className="border-y border-[#F0EDE6]/[0.08] py-12 md:py-16">
      <div className="mx-auto mb-10 max-w-[720px] md:mb-14">
        <img
          src={prompt.imageUrl}
          alt=""
          loading="lazy"
          className="block h-auto w-full select-none"
          draggable={false}
        />
      </div>
      <div className="grid gap-6 md:grid-cols-[96px_1fr]">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8a8a96]">
          <span className="block text-[#F0EDE6]">{prompt.number}</span>
          <span className="mt-3 block">{prompt.pack}</span>
        </div>
        <div>
          <h3 className="font-display text-[clamp(32px,5vw,56px)] font-normal leading-none text-[#F0EDE6]">
            {prompt.title}
          </h3>
          <p className="mt-5 max-w-[640px] font-body text-[17px] leading-relaxed text-[#8a8a96]">
            {prompt.promise}
          </p>
          <pre
            className={`mt-10 overflow-x-auto whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-[#F0EDE6] outline-offset-8 transition-[outline-color] duration-300 ${
              outlined ? "outline outline-1 outline-[#F0EDE6]" : "outline outline-1 outline-transparent"
            }`}
          >
            {prompt.prompt}
          </pre>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-body text-[14px] text-[#8a8a96]">
            <button
              type="button"
              onClick={copyPrompt}
              className="transition-colors duration-200 hover:text-[#F0EDE6] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#F0EDE6]"
            >
              {copied ? "Copied." : "Copy"}
            </button>
            <a
              href={prompt.chatgptUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-[#F0EDE6] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#F0EDE6]"
            >
              Run in ChatGPT
            </a>
            <a
              href={prompt.claudeUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-[#F0EDE6] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#F0EDE6]"
            >
              Run in Claude
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RemixRoomPage() {
  const [state, formAction] = useActionState(
    subscribeToRemixRoomWithState,
    initialState,
  );
  // Dev bypass: auto-unlock on localhost so Max can preview the full page
  // without submitting. Prod (cognitivefingerprint.ai) keeps the gate live.
  const [devUnlocked, setDevUnlocked] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname;
    const params = new URLSearchParams(window.location.search);
    if (host === "localhost" || host === "127.0.0.1" || params.get("unlocked") === "1") {
      setDevUnlocked(true);
    }
  }, []);
  const revealed = state.ok || devUnlocked;

  return (
    <main className="min-h-[100dvh] bg-[var(--grey-950)] text-[#F0EDE6]">
      <noscript>
        <style>{`
          .remix-volume {
            filter: none !important;
            pointer-events: auto !important;
            user-select: auto !important;
          }
        `}</style>
      </noscript>

      <section className="relative mx-auto flex min-h-[100dvh] max-w-[1120px] flex-col overflow-hidden px-5 pb-[10vh] pt-7 sm:px-10 lg:px-20">
        <div
          className="pointer-events-none absolute right-3 top-[16vh] hidden font-display text-[38vw] font-normal leading-none text-[#F0EDE6]/[0.025] md:block"
          aria-hidden="true"
        >
          09
        </div>
        <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="text-[var(--brand-gold)]">CF™</span>
          <span className="text-[var(--brand-gold)]">FIRST EDITION · 04.2026</span>
        </div>
        <div className="relative mt-10 mb-auto flex w-full items-center justify-center md:mt-14">
          <img
            src={HERO_IMAGE}
            alt=""
            draggable={false}
            className="block h-auto w-full max-w-[900px] select-none"
          />
        </div>
        <div className="relative grid gap-12 md:grid-cols-[1fr_260px] md:items-end">
          <div className="max-w-[760px]">
          <h1 className="font-display text-[clamp(56px,9vw,112px)] font-normal leading-[0.9] text-[#F0EDE6]">
            The Remix Room
          </h1>
          <p className="mt-8 max-w-[640px] font-body text-[20px] leading-relaxed text-[#8a8a96]">
            Nine prompts. Two moves. They interview you before they write
            anything.
          </p>
          <p className="mt-6 max-w-[560px] font-body text-[15px] italic leading-relaxed text-[#8a8a96]">
            The point is to make the reference give you a room to work in.
            Not to sound like it.
          </p>
          </div>
          <div className="border-y border-[#F0EDE6]/[0.08] py-5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#8a8a96]">
            <div className="grid grid-cols-[64px_1fr] gap-5 border-b border-[#F0EDE6]/[0.08] pb-4">
              <span>01-04</span>
              <span>Remix references into structure</span>
            </div>
            <div className="grid grid-cols-[64px_1fr] gap-5 pt-4">
              <span>05-09</span>
              <span>Collide voices into angle</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-10 md:py-20 lg:px-20">
        <div className="grid gap-12 md:grid-cols-[180px_1fr_180px] md:items-start">
          <aside className="border-t border-[#F0EDE6]/[0.08] pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#4a4a54]">
            Working note
            <span className="mt-3 block text-[#8a8a96]">The page is the room. The prompts are the tools.</span>
          </aside>
          <div className="max-w-[640px] space-y-7 font-body text-[20px] leading-relaxed text-[#F0EDE6]">
          <p>
            You paste your draft into ChatGPT. It comes back cleaner, tighter,
            and reading a little like the four posts above it in your feed.
            Do it enough times and you can&apos;t hear yourself in your own
            drafts anymore. Not the model&apos;s fault. The prompt never asked
            you what you actually meant.
          </p>
          <p>
            The Remix Room flips that. Nine prompts that interview you first.
            Three specific questions, answered in your own words, before the
            prompt writes a single line. Your answers are the material. The
            prompt rebuilds them through two colliding voices, or inside the
            structure of a piece you already admire.
          </p>
          <p>
            No account. No install. Paste them into ChatGPT or Claude. What
            comes back sounds like you because it&apos;s made of you.
          </p>
          </div>
          <aside className="hidden border-t border-[#F0EDE6]/[0.08] pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#4a4a54] md:block">
            Field logic
            <span className="mt-3 block text-[#8a8a96]">Reference. Collision. Render. Keep the useful angle.</span>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-10 md:py-20 lg:px-20">
        <div className="grid gap-10 md:grid-cols-[180px_1fr]">
          <aside className="border-t border-[#F0EDE6]/[0.08] pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#4a4a54]">
            A note on what this is
          </aside>
          <div className="max-w-[640px] font-body text-[20px] leading-relaxed text-[#F0EDE6]">
            Nine prompts on one page. You drop your email, they open below.
            Paste them into ChatGPT or Claude, answer the questions, keep the
            output. No app, no login, no dashboard. That&apos;s the whole
            product.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-10 md:py-20 lg:px-20">
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a54]">
              Nine prompts
            </span>
            <h2 className="mt-5 font-display text-[clamp(44px,7vw,86px)] font-normal leading-none text-[#F0EDE6]">
              The Index
            </h2>
          </div>
          <div className="border-t border-[#F0EDE6]/[0.08] pt-5 font-body text-[16px] leading-relaxed text-[#8a8a96]">
            Four prompts study structure. Five prompts conduct an interview,
            then render the piece. The rows are a table of contents and a set
            of handles.
          </div>
        </div>
        <div className="border-b border-[#F0EDE6]/[0.08]">
          {PROMPTS.map((prompt) => (
            <IndexRow key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-10 md:py-24 lg:px-20">
        <div className="mb-10 md:mb-14">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a54]">
            Two from the library
          </span>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <figure>
            <img
              src="/remixroom/01-ted-talk-upgrader.webp"
              alt=""
              draggable={false}
              className="block h-auto w-full select-none"
            />
            <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a54]">
              01 · Remix
            </figcaption>
            <div className="mt-2 font-display text-[clamp(22px,2.5vw,28px)] leading-tight text-[#F0EDE6]">
              TED Talk Upgrader
            </div>
          </figure>
          <figure>
            <img
              src="/remixroom/08-king-godin.webp"
              alt=""
              draggable={false}
              className="block h-auto w-full select-none"
            />
            <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a4a54]">
              08 · Collide
            </figcaption>
            <div className="mt-2 font-display text-[clamp(22px,2.5vw,28px)] leading-tight text-[#F0EDE6]">
              Stephen King × Seth Godin
            </div>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-10 md:py-20 lg:px-20">
        <div className="grid gap-14 md:grid-cols-[1fr_340px] md:items-start">
        <div className="max-w-[640px]">
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-normal leading-none text-[#F0EDE6]">
            How to use it
          </h2>
          <p className="mt-10 font-body text-[20px] leading-relaxed text-[#F0EDE6]">
            Read the prompt. Paste it into the AI you already use. Answer the
            questions like a real person who has a real topic. Keep what works,
            discard what doesn&apos;t, come back when your question changes.
          </p>
          <InlineGate state={state} formAction={formAction} />
        </div>
        <div className="border-y border-[#F0EDE6]/[0.08] py-6">
          {methodLedger.map((item) => (
            <div
              key={item.code}
              className="grid grid-cols-[72px_1fr] gap-5 border-t border-[#F0EDE6]/[0.08] py-5 first:border-t-0 first:pt-0 last:pb-0"
            >
              <div className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-[#4a4a54]">
                <span className="block">{item.code}</span>
                <span className="mt-2 block">{item.range}</span>
              </div>
              <div>
                <h3 className="font-display text-[28px] font-normal leading-none text-[#F0EDE6]">
                  {item.name}
                </h3>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-[#8a8a96]">
                  {item.line}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section
        className={`remix-volume mx-auto max-w-[1120px] px-5 py-16 transition-[filter] duration-[800ms] sm:px-10 md:py-20 lg:px-20 ${
          revealed
            ? "filter-none"
            : "pointer-events-none select-none blur-[8px]"
        }`}
      >
        <div className="mb-14">
          <h2 className="font-display text-[clamp(32px,5vw,56px)] font-normal leading-none text-[#F0EDE6]">
            The Volume
          </h2>
        </div>
        <div className="space-y-14">
          {PROMPTS.map((prompt) => (
            <PromptSpread key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-[1120px] px-5 py-24 sm:px-10 lg:px-20">
        <div className="max-w-[640px] space-y-6 border-t border-[#F0EDE6]/[0.08] pt-10 font-body text-[17px] leading-relaxed text-[#8a8a96]">
          <p>
            The point is not to sound like the reference. The point is to make
            the reference give you a room to work in.
          </p>
          <p>
            A Cognitive Fingerprint™ release by Max Bernstein. First
            Edition, April 2026.
          </p>
        </div>
      </footer>
    </main>
  );
}
