'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const sections = [
  { id: 'replaceability', num: '01', label: 'Replaceability' },
  { id: 'outside-in-sale', num: '02', label: 'What He Actually Sells' },
  { id: 'leverage-stack', num: '03', label: 'The Leverage Stack' },
  { id: 'expert-traits', num: '04', label: 'The Seven Expert Traits' },
  { id: 'evolution', num: '05', label: 'Initial → Mature' },
  { id: 'cf-bridge', num: '→', label: 'Where CF Picks Up' },
];

export default function BakerFrameworksPage() {
  const [activeSection, setActiveSection] = useState('replaceability');

  useEffect(() => {
    const handleScroll = () => {
      const els = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      let current = 'replaceability';
      els.forEach(el => {
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = el.id;
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
              Source Material
            </div>
            <nav className="flex flex-col gap-1">
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    activeSection === s.id
                      ? 'text-[var(--brand-gold)] bg-[var(--brand-gold)]/10'
                      : 'text-[var(--grey-400)] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`font-mono text-[10px] shrink-0 ${activeSection === s.id ? 'text-[var(--brand-gold)]/70' : 'text-[var(--grey-600)]'}`}>
                    {s.num}
                  </span>
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 pb-20 max-w-2xl">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 pb-12 border-b border-[var(--grey-800)]"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--grey-900)] border border-[var(--grey-700)] text-[var(--brand-gold)] text-xs font-semibold tracking-wide uppercase mb-6 font-mono">
              <BookOpen size={12} />
              Source Material · The Expert&apos;s Expert
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-5 leading-tight">
              David Baker —<br />
              <span className="text-gold-gradient italic">the consultant every consultant quietly studies</span>
            </h1>
            <p className="text-lg text-[var(--grey-300)] leading-relaxed max-w-xl mb-5">
              If you have read anything serious about positioning, pricing, or productizing expertise in the last decade, you have read Baker. Or you have read someone who read Baker.
            </p>
            <p className="text-base text-[var(--grey-400)] leading-relaxed max-w-xl mb-5">
              He has advised expert-led firms for 30+ years. Two books, both considered canonical. A weekly podcast with Blair Enns where the two of them talk about the business of expertise at a level no one else is matching. Every serious boutique agency I know has dog-eared copies on a shelf somewhere.
            </p>
            <p className="text-base text-[var(--grey-400)] leading-relaxed max-w-xl mb-5">
              This page is not a Cognitive Fingerprint<sup className="text-[0.55em] align-super ml-0.5">™</sup>. Baker is fully conscious of how he operates and has published most of it. What this page is: the five teachings I come back to the most, in the order I come back to them, with the quotes that earned the page space.
            </p>
            <p className="text-base text-[var(--grey-400)] leading-relaxed max-w-xl">
              CF is the extraction engine. Baker is the source text. Both belong on the shelf.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-[var(--grey-600)]">
              <span>Sources: <em>The Business of Expertise</em> (2017) · <em>Secret Tradecraft of Elite Advisors</em> (2022)</span>
            </div>
            <div className="text-sm text-[var(--grey-600)] mt-1">
              Podcast: <a href="https://www.2bobs.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--grey-400)] hover:text-white underline underline-offset-2">2Bobs with David C. Baker and Blair Enns</a>
            </div>
          </motion.div>

          {/* 01 — Replaceability */}
          <section id="replaceability" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Teaching 01 — The Diagnostic Before Everything</div>
            <h2 className="font-display text-3xl text-white mb-4">Hobby, Job, or Enterprise</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Every expert practice fits one of three categories. The dishonesty is with yourself about which one you are in. Baker starts here, every time, because the rest of his advice assumes you have placed yourself correctly.
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
                      what: 'Costs more than it makes. Subtract unbilled hours, certifications, admin, equipment from revenue. You are underwater.',
                      trap: 'You are paying for the privilege of calling yourself a practitioner. Enthusiasm funds the gap.'
                    },
                    {
                      cat: 'Job',
                      what: 'You trade time for predictable income. The ceiling is your body and your calendar.',
                      trap: 'One injury, one burnout, one bad month = zero revenue. All the risk of entrepreneurship with none of the upside.'
                    },
                    {
                      cat: 'Enterprise',
                      what: 'A separate entity generating profit beyond your labor. Something earns when you do not show up.',
                      trap: 'Rare. Usually this is a Job wearing an LLC, a logo, and a website.'
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
                &quot;You may have realized that, although you may think you have an enterprise, you really have a job.&quot;
              </p>
              <footer className="text-[11px] text-[var(--grey-600)] mt-2 not-italic">
                — <em>The Business of Expertise</em>
              </footer>
            </blockquote>

            <h3 className="font-display text-xl text-white mt-10 mb-3">The Stopwatch Test</h3>
            <p className="text-[var(--grey-400)] leading-relaxed mb-5">
              Baker&apos;s follow-up diagnostic. Start a timer the moment a client fires you or moves on. Stop it when they have found a comparable replacement and moved forward without you.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl p-5">
                <div className="text-xs font-mono text-[var(--grey-600)] uppercase tracking-wide mb-2">Fast — days or weeks</div>
                <div className="text-white font-medium">You had a job, not a position.</div>
                <div className="text-[var(--grey-400)] text-sm mt-1">One of many available options.</div>
              </div>
              <div className="bg-[var(--grey-900)] border border-[var(--brand-gold)]/30 rounded-xl p-5">
                <div className="text-xs font-mono text-[var(--brand-gold)] uppercase tracking-wide mb-2">Slow or impossible</div>
                <div className="text-white font-medium">You have genuine expertise.</div>
                <div className="text-[var(--grey-400)] text-sm mt-1">Your departure creates a gap that cannot be easily filled.</div>
              </div>
            </div>

            <blockquote className="border-l-3 border-[var(--brand-gold)] pl-5 py-1 my-6 bg-[var(--grey-900)] rounded-r-lg pr-5">
              <p className="font-display text-lg italic text-white leading-relaxed">
                &quot;If it is easy to find a replacement for your expertise, you have no control, or power, or choice, when you withhold it.&quot;
              </p>
              <footer className="text-[11px] text-[var(--grey-600)] mt-2 not-italic">
                — <em>Secret Tradecraft of Elite Advisors</em>
              </footer>
            </blockquote>

            <div className="bg-[var(--grey-900)] border border-[var(--grey-800)] rounded-xl p-6 mt-6">
              <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">The Honest Test</div>
              <p className="text-white font-medium mb-2">If you disappeared for three months, does anything keep generating income?</p>
              <p className="text-[var(--grey-400)] text-sm">If the answer is nothing, that is not a failure. But it is a fact. And facts are where good decisions start.</p>
            </div>
          </section>

          {/* 02 — What He Actually Sells */}
          <section id="outside-in-sale" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Teaching 02 — The Outside-In Sale</div>
            <h2 className="font-display text-3xl text-white mb-4">What You Are Actually Selling</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Not deliverables. Not hours. Three things, each with a specific origin, and none of them available to generalists.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { what: 'Objectivity', from: 'From externality', body: 'You are not inside their jar. They cannot read their own label. You can. The value is not that you are smarter. It is that you are outside.' },
                { what: 'Knowledge', from: 'From focus', body: 'Positioning creates a fixed boundary. Inside that boundary, you have seen this before. You know what is wrong and how to fix it. Generalists cannot offer this.' },
                { what: 'Perception', from: 'From self-awareness', body: 'You are only a reliable observer once you have calibrated your own biases. If your gauges always read high, know that before you read the room.' }
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
                &quot;Experts are not order takers because they understand that the client probably knows what they want, but they do not know what they should want.&quot;
              </p>
              <footer className="text-[11px] text-[var(--grey-600)] mt-2 not-italic">
                — <em>The Business of Expertise</em>
              </footer>
            </blockquote>
            <p className="text-[var(--grey-400)] leading-relaxed">
              Baker has a phrase for the deeper mechanism. <strong className="text-white">The Liberating Force vs. The Occupying Force.</strong> Clients pay a premium for episodic presence, the fresh arrival who sees clearly what they have stopped being able to see. The longer you stay inside a client, the more you become part of the problem. Leave on purpose.
            </p>
          </section>

          {/* 03 — The Leverage Stack */}
          <section id="leverage-stack" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Teaching 03 — What Keeps You Honest</div>
            <h2 className="font-display text-3xl text-white mb-4">The Leverage Stack</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Leverage is what lets you tell a client the hard truth, hold your fee, and walk away from bad-fit work. Baker catalogs seven sources. Having all seven is rare. If you have fewer than three, every difficult conversation is tilted against you before you open your mouth.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                { n: '01', title: 'Positioning', body: 'When you have worked with 40 firms exactly like theirs, you can finish their sentences in the first conversation. That immediate comprehension signals they cannot walk away from someone who understands their world at that depth.' },
                { n: '02', title: 'Excess Opportunity', body: 'When you have two prospects for one opening, you choose the better client. When you have one, you compromise. Excess opportunity removes the urgency that forces bad deals.' },
                { n: '03', title: 'Calibrated Caring', body: 'You must care slightly less about winning the engagement than the prospect wants you to take them on. Detachment from outcome is a structural advantage.' },
                { n: '04', title: 'Black-Box Models', body: 'Proprietary frameworks and diagnostic tools only you can run. They silence argument, establish authority, and give you repeatable, defensible recommendations. Baker argues the best advisors build a new one every 3–4 years.' },
                { n: '05', title: 'Confidential Data', body: 'Unassailable, proprietary data only you have access to or can interpret. The data carries authority precisely because it cannot be questioned in the room.' },
                { n: '06', title: 'Prepayment', body: 'Baker requires full prepayment from every client, without exception. If payment is outstanding, you will soften the hard truths you need to deliver. Prepayment preserves objectivity.' },
                { n: '07', title: 'Flexible Scope', body: 'Scope is controlled by you, not the client. Clients will always expand what they assume is included. Flexible scope means you choose when to do more.' }
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

            <h3 className="font-display text-xl text-white mb-3">And the formula behind all of it</h3>
            <p className="text-[var(--grey-400)] leading-relaxed mb-5">
              Credit to Blair Enns, featured by Baker.
            </p>
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
                &quot;No middle ground: free to prospects, or high fees to clients.&quot;
              </p>
              <footer className="text-[11px] text-[var(--grey-600)] mt-2 not-italic">
                — Blair Enns, via Baker
              </footer>
            </blockquote>
            <p className="text-[var(--grey-400)] leading-relaxed">
              Publish your best thinking for free. The more insight you give away publicly, the less you need to invest in any individual sale. Prospects arrive pre-convinced.
            </p>
          </section>

          {/* 04 — The Seven Expert Traits */}
          <section id="expert-traits" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Teaching 04 — Expert vs. Order-Taker</div>
            <h2 className="font-display text-3xl text-white mb-4">The Seven Expert Traits</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Baker&apos;s test for whether someone is actually an expert, or just an order-taker with a higher rate card. Seven observable traits. All seven visible inside the first 90 seconds of a real conversation.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Clear Point of View', desc: 'A defensible perspective on relevant topics. Not borrowed. Not vague. Yours, built through research, articulation, and testing against pushback.' },
                { name: 'Concision', desc: 'They say it short. Length is not depth. Long answers often signal uncertainty. Experts know the answer and deliver it clearly.' },
                { name: 'Believability', desc: 'They have earned the right to say what they are saying. Track record, visible experience, and the absence of hedging all signal credibility.' },
                { name: 'Depth', desc: 'They have gone below the surface. They understand the nuance, the exception cases, the second-order effects others miss.' },
                { name: 'Confidence', desc: 'They hold their position under pressure. When a client pushes back, they do not immediately fold. Their stance does not depend on approval.' },
                { name: 'Firm Principles', desc: 'There are things they will not do, regardless of the money. These non-negotiables are visible, not just claimed.' },
                { name: 'A Distinctive HOW', desc: 'They do not just produce outcomes. They have a repeatable methodology. The process is part of what they sell. Without a distinctive how, you are delivering results someone else could have produced.' }
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

          {/* 05 — Initial → Mature */}
          <section id="evolution" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Teaching 05 — The Maturity Ladder</div>
            <h2 className="font-display text-3xl text-white mb-4">Initial → Developing → Mature</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-6">
              Baker does not ask consultants where they are. He asks them six questions. The answers place them on the ladder. Honest placement tells you what to change next.
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
                &quot;If your deliverable reports are still as long as they were in the beginning, you are either copying and pasting drivel or wasting time hiding behind length instead of depth.&quot;
              </p>
              <footer className="text-[11px] text-[var(--grey-600)] mt-2 not-italic">
                — <em>Secret Tradecraft of Elite Advisors</em>
              </footer>
            </blockquote>
          </section>

          {/* Where CF Picks Up */}
          <section id="cf-bridge" className="mb-20 scroll-mt-28">
            <div className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--brand-gold)] mb-3">Where CF Picks Up</div>
            <h2 className="font-display text-3xl text-white mb-4">Baker Tells You What to Build.<br />CF Is How You Build It From What You Already Have.</h2>
            <p className="text-[var(--grey-400)] leading-relaxed mb-5">
              Read Baker long enough and a question surfaces he does not answer directly. He tells you to build a proprietary black-box model. He tells you to develop a clear point of view. He tells you to productize your methodology.
            </p>
            <p className="text-[var(--grey-400)] leading-relaxed mb-5">
              From what?
            </p>
            <p className="text-[var(--grey-400)] leading-relaxed mb-5">
              Baker assumes the raw material is already inside you. He is right. It is. The problem is the expert cannot see it. Decades of client work, thousands of calls, hundreds of judgment calls that shaped how you actually operate, all of it invisible to the person running the patterns.
            </p>
            <p className="text-[var(--grey-400)] leading-relaxed mb-5">
              That is what Cognitive Fingerprint<sup className="text-[0.55em] align-super ml-0.5">™</sup> extracts. The unconscious operating system you have been running for years. Named, structured, defensible, yours. Then you go back to Baker&apos;s shelf and his frameworks actually have something to operate on.
            </p>
            <p className="text-[var(--grey-400)] leading-relaxed">
              Read Baker first. Then run CF on yourself.
            </p>
          </section>

          {/* Single CTA */}
          <section className="mb-16">
            <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#1a1612] via-[#141110] to-[#0a0a0b] border border-[var(--brand-gold)]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[var(--brand-gold)] opacity-[0.04] blur-[100px] pointer-events-none" />
              <div className="relative">
                <div className="text-[11px] tracking-[0.14em] uppercase text-[var(--brand-gold)] mb-3">
                  Next step
                </div>
                <div className="font-display text-2xl text-white leading-[1.2] mb-3">
                  Extract your own black-box model
                </div>
                <p className="text-[var(--grey-400)] text-sm leading-relaxed mb-6 max-w-xl">
                  Baker is right that you need proprietary IP. CF is the extraction method that turns 15+ years of pattern recognition into a named methodology only you have. Slots open quarterly.
                </p>
                <Link
                  href="https://calendar.app.google/JDxdGpxuqzmxCB8a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--brand-gold)] text-[var(--grey-950)] font-semibold rounded-lg hover:bg-[var(--brand-gold-light)] transition-colors text-sm"
                >
                  Schedule a call
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-10 pt-6 border-t border-[var(--grey-800)] text-xs text-[var(--grey-600)] leading-relaxed">
            Teachings sourced from <em>The Business of Expertise</em> (2017) and <em>Secret Tradecraft of Elite Advisors</em> (2022) by David C. Baker. P = db/D formula credited to Blair Enns. Maintained by{' '}
            <Link href="/" className="text-[var(--grey-400)] hover:text-white transition-colors underline underline-offset-2">
              Max Bernstein
            </Link>. This is reference material. For the extraction engine that pairs with it, see{' '}
            <Link href="/method" className="text-[var(--grey-400)] hover:text-white transition-colors underline underline-offset-2">
              the CF method
            </Link>.
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
