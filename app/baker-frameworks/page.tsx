'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const frameworks = [
  { id: 'hobby-job-enterprise', num: '01', label: 'Hobby / Job / Enterprise' },
  { id: 'stopwatch', num: '02', label: 'The Stopwatch Test' },
  { id: 'what-youre-selling', num: '03', label: "What You're Selling" },
  { id: 'leverage', num: '04', label: '7 Sources of Leverage' },
  { id: 'expert-traits', num: '05', label: 'The 7 Expert Traits' },
  { id: 'power-formula', num: '06', label: 'The Power Formula' },
  { id: 'stages', num: '07', label: 'Initial → Mature Stages' },
  { id: 'cf-connection', num: '→', label: 'The CF Connection' },
];

export default function BakerFrameworksPage() {
  const [activeSection, setActiveSection] = useState('hobby-job-enterprise');

  useEffect(() => {
    const handleScroll = () => {
      const sections = frameworks.map(f => document.getElementById(f.id)).filter(Boolean);
      let current = 'hobby-job-enterprise';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--grey-950)]">
      <div className="grain-overlay" />
      <Navigation />

      <div className="pt-24 flex max-w-[1200px] mx-auto px-6 lg:px-8 gap-12">

        {/* Sticky sidebar nav */}
        <aside className="hidden lg:flex flex-col gap-6 w-64 shrink-0">
          <div className="sticky top-28">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--grey-600)] mb-4 font-mono">
              Frameworks
            </div>
            <nav className="flex flex-col gap-1">
              {frameworks.map(f => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    activeSection === f.id
                      ? 'text-[var(--brand-gold)] bg-[var(--brand-gold)]/10'
                      : 'text-[var(--grey-400)] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`font-mono text-[10px] shrink-0 ${activeSection === f.id ? 'text-[var(--brand-gold)]/70' : 'text-[var(--grey-600)]'}`}>
                    {f.num}
                  </span>
                  {f.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 p-4 rounded-xl bg-[var(--brand-gold)]/8 border border-[var(--brand-gold)]/20">
              <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-2 font-mono">
                Free Diagnostic
              </div>
              <div className="text-sm text-white mb-3 leading-snug">
                Run the Baker Audit on your practice
              </div>
              <a
                href="mailto:max@cognitivefingerprint.ai?subject=Baker Positioning Audit"
                className="text-xs text-[var(--brand-gold)] hover:underline"
              >
                Request it →
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 pb-32 max-w-2xl">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 pb-12 border-b border-[var(--grey-800)]"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-xs font-semibold tracking-wide uppercase mb-6 font-mono">
              <BookOpen size={12} />
              Reference · Expert Practice Design
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-5 leading-tight">
              The Baker Frameworks —<br />
              <span className="text-gold-gradient italic">and what to do with them</span>
            </h1>
            <p className="text-lg text-[var(--grey-400)] leading-relaxed max-w-xl">
              David C. Baker has advised expert-led firms for 30+ years. His two books contain
              the clearest thinking available on positioning, leverage, and what separates a job
              from a business. This is the distilled reference.
            </p>
            <div className="flex gap-6 mt-6 text-sm text-[var(--grey-600)]">
              <span>Source: both Baker books, pages 1–80</span>
              <span>·</span>
              <span>For coaches, consultants, practitioners</span>
              <span>·</span>
              <span>Updated Feb 2026</span>
            </div>
          </motion.div>

          {/* Framework 01 */}
          <section id="hobby-job-enterprise" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 01 — The Core Diagnostic</div>
            <h2 className="font-display text-3xl text-white mb-4">Hobby / Job / Enterprise</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Every expert practice fits one of three categories. Almost nobody is honest about which one they are in.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[var(--grey-800)] mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--grey-800)]">
                    <th className="text-left px-4 py-3 text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--grey-600)]">Category</th>
                    <th className="text-left px-4 py-3 text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--grey-600)]">What It Is</th>
                    <th className="text-left px-4 py-3 text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--grey-600)]">The Hidden Trap</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      cat: 'Hobby',
                      what: 'Costs more than it makes. Subtract unbilled hours, certifications, admin, equipment from revenue — you are underwater.',
                      trap: 'You are paying for the privilege of calling yourself a practitioner. Enthusiasm is funding the gap.'
                    },
                    {
                      cat: 'Job',
                      what: 'You trade time for predictable income. The ceiling is your body and your calendar.',
                      trap: 'One injury, one burnout, one bad month = zero revenue. You carry all the risk of entrepreneurship with none of the upside.'
                    },
                    {
                      cat: 'Enterprise',
                      what: 'A separate entity generating profit beyond your labor. Something earns when you do not show up.',
                      trap: 'Rare. Most people have a Job with an LLC, a logo, and a website they call an enterprise.'
                    }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[var(--grey-800)]/50 hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-4 font-semibold text-white whitespace-nowrap align-top">{row.cat}</td>
                      <td className="px-4 py-4 text-[var(--grey-400)] align-top leading-relaxed">{row.what}</td>
                      <td className="px-4 py-4 text-[var(--grey-400)] align-top leading-relaxed">{row.trap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <blockquote className="border-l-3 border-[var(--brand-gold)] pl-5 py-1 my-6 bg-[var(--grey-900)] rounded-r-lg pr-5">
              <p className="font-display text-lg italic text-white leading-relaxed">
                "You may have realized that, although you may think you have an enterprise, you really have a job."
              </p>
            </blockquote>

            <div className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl p-6">
              <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">The Honest Test</div>
              <p className="text-white font-medium mb-2">If you disappeared for three months, does anything keep generating income?</p>
              <p className="text-[var(--grey-400)] text-sm">If the answer is nothing — that is not a failure. But it is a fact. And facts are where good decisions start.</p>
            </div>
          </section>

          {/* Framework 02 */}
          <section id="stopwatch" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 02 — Irreplaceability</div>
            <h2 className="font-display text-3xl text-white mb-4">The Stopwatch Test</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-4">
              Start a timer the moment a client fires you or moves on. Stop it when they have found a comparable replacement and moved forward without you.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl p-5">
                <div className="text-xs font-mono text-[var(--grey-600)] uppercase tracking-wide mb-2">Fast — days or weeks</div>
                <div className="text-white font-medium">You had a job, not a position.</div>
                <div className="text-[var(--grey-400)] text-sm mt-1">You were one of many available options.</div>
              </div>
              <div className="bg-[var(--grey-900)] border border-[var(--brand-gold)]/30 rounded-xl p-5">
                <div className="text-xs font-mono text-[var(--brand-gold)] uppercase tracking-wide mb-2">Slow or impossible</div>
                <div className="text-white font-medium">You have genuine expertise.</div>
                <div className="text-[var(--grey-400)] text-sm mt-1">Your departure creates a gap that cannot be easily filled.</div>
              </div>
            </div>
            <blockquote className="border-l-3 border-[var(--brand-gold)] pl-5 py-1 my-6 bg-[var(--grey-900)] rounded-r-lg pr-5">
              <p className="font-display text-lg italic text-white leading-relaxed">
                "If it is easy to find a replacement for your expertise, you have no control — or power, or choice — when you withhold it."
              </p>
            </blockquote>
            <p className="text-[var(--grey-400)] leading-relaxed">
              The chain: <strong className="text-white">narrow positioning → similar clients → pattern recognition → genuine expertise → irreplaceability → pricing power.</strong> Remove the first link and nothing else follows.
            </p>
          </section>

          {/* Framework 03 */}
          <section id="what-youre-selling" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 03 — What You Are Actually Delivering</div>
            <h2 className="font-display text-3xl text-white mb-4">What You&apos;re Actually Selling</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Not deliverables. Not hours. Three things — each with a specific origin:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { what: 'Objectivity', from: 'From externality', body: "You are not inside their jar. They cannot read their own label. You can. The value is not that you are smarter — it is that you are outside." },
                { what: 'Knowledge', from: 'From focus', body: "Positioning creates a fixed boundary. Inside that boundary, you have seen this before. You know what is wrong and how to fix it. Generalists cannot offer this." },
                { what: 'Perception', from: 'From self-awareness', body: "You are only a reliable observer once you have calibrated your own biases. If your gauges always read high, know that before you read the room." }
              ].map((card, i) => (
                <div key={i} className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl p-5 hover:border-[var(--grey-700)] transition-colors">
                  <div className="font-display text-xl text-white mb-1">{card.what}</div>
                  <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-[var(--brand-gold)] mb-3">{card.from}</div>
                  <div className="text-sm text-[var(--grey-400)] leading-relaxed">{card.body}</div>
                </div>
              ))}
            </div>
            <blockquote className="border-l-3 border-[var(--brand-gold)] pl-5 py-1 my-6 bg-[var(--grey-900)] rounded-r-lg pr-5">
              <p className="font-display text-lg italic text-white leading-relaxed">
                "Experts are not order takers because they understand that the client probably knows what they want, but that they don&apos;t know what they should want."
              </p>
            </blockquote>
            <p className="text-[var(--grey-400)] leading-relaxed">
              <strong className="text-white">The Liberating Force vs. The Occupying Force.</strong> Clients pay a premium for episodic presence — the fresh arrival who sees clearly what they have stopped being able to see. The longer you stay, the more you become part of the problem.
            </p>
          </section>

          {/* Framework 04 */}
          <section id="leverage" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 04 — Sustainable Leverage</div>
            <h2 className="font-display text-3xl text-white mb-4">7 Sources of Leverage</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Leverage is what allows you to tell a client the hard truth, hold your fee, and walk away from bad-fit work.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { n: '01', title: 'Positioning', body: "When you have worked with 40 firms exactly like theirs, you can finish their sentences in the first conversation. That immediate comprehension signals that they cannot walk away from someone who understands their world at that depth." },
                { n: '02', title: 'Excess Opportunity', body: "When you have two prospects for one opening, you choose the better client. When you have one, you compromise. Excess opportunity removes the urgency that forces bad deals." },
                { n: '03', title: 'Calibrated Caring', body: "You must care slightly less about winning the engagement than the prospect wants you to take them on. Detachment from outcome is a structural advantage." },
                { n: '04', title: 'Black-Box Models', body: "Proprietary frameworks and diagnostic tools only you can run. They silence argument, establish authority, and give you repeatable, defensible recommendations. The best advisors build one every 3–4 years." },
                { n: '05', title: 'Confidential Data', body: "Unassailable, proprietary data that only you have access to or can interpret. The data carries authority precisely because it cannot be questioned in the room." },
                { n: '06', title: 'Prepayment', body: "Baker requires full prepayment from every client without exception. If payment is outstanding, you will soften the hard truths you need to deliver. Prepayment preserves objectivity." },
                { n: '07', title: 'Flexible Scope', body: "Scope is controlled by you, not the client. Clients will always expand what they assume is included. Flexible scope means you choose when to do more." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="font-mono text-[11px] text-[var(--brand-gold)]/70 font-semibold mt-1 shrink-0 w-6">{item.n}</div>
                  <div>
                    <div className="text-white font-semibold mb-1">{item.title}</div>
                    <div className="text-sm text-[var(--grey-400)] leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Framework 05 */}
          <section id="expert-traits" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 05 — Expert vs. Order-Taker</div>
            <h2 className="font-display text-3xl text-white mb-4">The 7 Expert Traits</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">Seven observable traits that separate an expert from an order-taker:</p>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Clear Point of View', desc: "A defensible perspective on relevant topics. Not borrowed. Not vague. Yours — built through research, articulation, and testing against pushback." },
                { name: 'Concision', desc: "They say it short. Length is not depth. Long answers often signal uncertainty. Experts know the answer and deliver it clearly." },
                { name: 'Believability', desc: "They have earned the right to say what they are saying. Track record, visible experience, and the absence of hedging all signal credibility." },
                { name: 'Depth', desc: "They have gone below the surface. They understand the nuance, the exception cases, the second-order effects others miss." },
                { name: 'Confidence', desc: "They hold their position under pressure. When a client pushes back, they do not immediately fold. Their stance does not depend on approval." },
                { name: 'Firm Principles', desc: "There are things they will not do, regardless of the money. These non-negotiables are visible, not just claimed." },
                { name: 'HOW Matters', desc: "They do not just produce outcomes — they have a repeatable methodology. The process is part of what they sell. Without a distinctive how, you are delivering results someone else could have produced." }
              ].map((trait, i) => (
                <li key={i} className="flex gap-4 p-4 bg-[var(--grey-900)]/60 border border-[var(--grey-800)] rounded-xl hover:border-[var(--grey-700)] transition-colors">
                  <span className="font-mono text-[11px] text-[var(--brand-gold)]/70 font-semibold shrink-0 w-4 mt-0.5">{i + 1}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{trait.name}</div>
                    <div className="text-sm text-[var(--grey-400)] leading-relaxed">{trait.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Framework 06 */}
          <section id="power-formula" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 06 — Pricing &amp; Sales Power</div>
            <h2 className="font-display text-3xl text-white mb-4">The Power Formula</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">From Blair Enns, featured by Baker:</p>
            <div className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-2xl p-8 text-center mb-6">
              <div className="font-display text-5xl text-white mb-4">
                P = <span className="text-[var(--brand-gold)]">d</span>b / <span className="text-[var(--grey-400)]">D</span>
              </div>
              <div className="text-sm text-[var(--grey-400)] leading-relaxed space-y-1">
                <p><span className="text-[var(--brand-gold)] font-semibold">d</span>b = <em>desirability</em> — how much they want you</p>
                <p><span className="text-[var(--grey-400)] font-semibold">D</span> = <em>Desire</em> — how much you want the work</p>
              </div>
              <p className="text-white font-medium mt-4">Power increases when their desire to work with you exceeds your desire to take them on.</p>
            </div>
            <blockquote className="border-l-3 border-[var(--brand-gold)] pl-5 py-1 my-6 bg-[var(--grey-900)] rounded-r-lg pr-5">
              <p className="font-display text-lg italic text-white leading-relaxed">
                "No middle ground: free to prospects — or high fees to clients."
              </p>
            </blockquote>
            <p className="text-[var(--grey-400)] leading-relaxed">
              Publish your best thinking for free. The more insight you give away publicly, the less you need to invest in any individual sale. Prospects arrive pre-convinced.
            </p>
          </section>

          {/* Framework 07 */}
          <section id="stages" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Framework 07 — Practice Evolution</div>
            <h2 className="font-display text-3xl text-white mb-4">Initial → Developing → Mature</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Where is your practice in its evolution? Honest placement tells you what to change next.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[var(--grey-800)] mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--grey-800)]">
                    {['Dimension', 'Initial', 'Developing', 'Mature'].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-[10px] font-mono tracking-[0.15em] uppercase text-[var(--grey-600)]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['References', 'Many offered proactively', 'A few, when asked', 'Rarely — reputation speaks'],
                    ['Speaking', 'Panels, any slot', 'Breakout sessions', 'Keynotes'],
                    ['Productization', 'Fully custom every time', 'Mixed custom + packaged', 'Fully productized methodology'],
                    ['Billing', 'Hourly, underpriced', 'Fully compensated', 'Value-based'],
                    ['Deliverables', 'Hundreds of pages', 'Fewer, succinct pages', 'Client takes notes'],
                    ['Client fit', 'Take what comes', 'Selective', 'Curated; prospects qualify themselves'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[var(--grey-800)]/50 hover:bg-white/[0.02] transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-4 align-top leading-relaxed ${j === 0 ? 'font-semibold text-white whitespace-nowrap' : 'text-[var(--grey-400)]'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <blockquote className="border-l-3 border-[var(--brand-gold)] pl-5 py-1 my-6 bg-[var(--grey-900)] rounded-r-lg pr-5">
              <p className="font-display text-lg italic text-white leading-relaxed">
                "If your deliverable reports are still as long as they were in the beginning, you are either copying/pasting drivel or wasting time hiding behind length instead of depth."
              </p>
            </blockquote>
          </section>

          {/* CF Connection */}
          <section id="cf-connection" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">The Connection</div>
            <h2 className="font-display text-3xl text-white mb-4">Baker Diagnoses the Need.<br />CF Delivers the Answer.</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-8">
              Baker is precise about <em>what</em> an expert needs: a methodology, a point of view, irreplaceability, proprietary IP.
              What he does not address is how most experts actually get there — because the methodology they need is already inside them, invisible even to themselves.
              That is the gap Cognitive Fingerprint closes.
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  baker: "You cannot read your own label. Objectivity comes from being outside the jar.",
                  cf: "CF is the structured external observer. The extraction surfaces what the expert has been running intuitively — the methodology they could not see because they were inside it."
                },
                {
                  baker: "Build black-box models. Proprietary IP is the #4 source of leverage.",
                  cf: "The CF output is the black-box model. It converts invisible pattern recognition into a named, structured, defensible methodology that only you have."
                },
                {
                  baker: "The Stopwatch Test: irreplaceability is what creates leverage. Are you replaceable in days or months?",
                  cf: "Experts without an articulated methodology are replaceable. CF moves you from the first category to the second."
                },
                {
                  baker: "Expertise develops through many similar engagements over time.",
                  cf: "Expertise already exists — it just has not been articulated. CF accelerates the extraction. The patterns are already there from years of practice; they have never been named."
                }
              ].map((row, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_20px_1fr] gap-3 items-center">
                  <div className="bg-[var(--brand-gold)]/6 border border-[var(--brand-gold)]/15 rounded-xl p-4">
                    <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-[var(--brand-gold)] mb-2">Baker</div>
                    <div className="text-sm text-[var(--grey-400)] leading-relaxed">{row.baker}</div>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-[var(--grey-700)] text-sm">→</div>
                  <div className="bg-blue-500/6 border border-blue-500/15 rounded-xl p-4">
                    <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-blue-400 mb-2">CF</div>
                    <div className="text-sm text-[var(--grey-400)] leading-relaxed">{row.cf}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-2xl p-8 md:p-10 text-center">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Free Diagnostic</div>
            <h2 className="font-display text-3xl text-white mb-4">Run the Baker Audit on Your Practice</h2>
            <p className="text-[var(--grey-400)] leading-relaxed max-w-md mx-auto mb-6">
              A structured assessment running Baker&apos;s full positioning diagnostic against your current practice — Stopwatch Test, Hobby/Job/Enterprise classification, confidence behaviors, stage mapping, and CF readiness score.
            </p>
            <a
              href="mailto:max@cognitivefingerprint.ai?subject=Baker Positioning Audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-xl hover:bg-[var(--brand-gold-light)] transition-colors"
            >
              Request the Audit
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-[var(--grey-800)] text-xs text-[var(--grey-600)] leading-relaxed">
            Frameworks sourced from <em>The Business of Expertise</em> (2017) and <em>Secret Tradecraft of Elite Advisors</em> (2022) by David C. Baker. P = db/D formula credited to Blair Enns.
            Maintained by{' '}
            <Link href="/" className="text-[var(--grey-400)] hover:text-white transition-colors underline underline-offset-2">
              Max Bernstein
            </Link>.
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
