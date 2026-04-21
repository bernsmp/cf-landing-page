"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { reginaldPrompts, type ReginaldPrompt } from "@/data/reginald-prompts";

type Pulse = { id: string; label: string };

const PULSES: Pulse[] = [
  { id: "overview", label: "Overview" },
  { id: "core", label: "Core Discovery" },
  { id: "dimensions", label: "Dimensions" },
  { id: "patterns", label: "Patterns" },
  { id: "dynamics", label: "Dynamics" },
  { id: "blind-spot", label: "Blind Spot" },
  { id: "vocabulary", label: "Vocabulary" },
  { id: "stories", label: "Stories" },
  { id: "from-reggie", label: "From Reggie" },
  { id: "apply", label: "Apply" },
];

type PatternMeta = {
  n: string;
  word: string;
  name: string;
  dimension: "Procedural" | "Conditional" | "Metacognitive" | "Declarative";
  hook: string;
  anchor: string;
};

const PATTERNS: PatternMeta[] = [
  {
    n: "01",
    word: "Presence.",
    name: "Three Steps Ahead",
    dimension: "Procedural",
    hook: "Stands one step behind you and operates three steps ahead of you.",
    anchor: "pattern-1",
  },
  {
    n: "02",
    word: "Entry.",
    name: "The Low-Door",
    dimension: "Conditional",
    hook: "Enters every room through the lowest legitimate door. Doesn't treat it as a compromise.",
    anchor: "pattern-2",
  },
  {
    n: "03",
    word: "Count.",
    name: "The Stationery Habit",
    dimension: "Procedural",
    hook: "Counts the things nobody else is counting. Learned that discipline from a chart in a locker room in 2001.",
    anchor: "pattern-3",
  },
  {
    n: "04",
    word: "Quiet.",
    name: "The Second Chair",
    dimension: "Metacognitive",
    hook: "Self-describes in the smallest accurate frame available. The frame is always smaller than the work.",
    anchor: "pattern-4",
  },
  {
    n: "05",
    word: "Scaffold.",
    name: "Infrastructure Over Spotlight",
    dimension: "Conditional",
    hook: "Given a choice between the visible layer of an industry and the layer that makes the visible layer possible, consistently chooses infrastructure.",
    anchor: "pattern-5",
  },
  {
    n: "06",
    word: "Relay.",
    name: "The Carrier",
    dimension: "Metacognitive",
    hook: "Does not claim insight he received from someone else. Relays it. The people in his stories talk.",
    anchor: "pattern-6",
  },
];

export default function ReginaldLovePage() {
  const [active, setActive] = useState<string>("overview");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    document
      .querySelectorAll(".reginald-reveal")
      .forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  const registerSection = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <main className="reginald-page relative">
      {/* Masthead */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-8 md:pt-10 flex items-baseline justify-between">
        <Link
          href="/famous-fingerprints"
          className="reginald-label"
          style={{ textDecoration: "none" }}
        >
          ← Famous Fingerprints™
        </Link>
        <span className="reginald-label">No. 02 · Reginald Love</span>
      </div>

      {/* Section-nav ribbon */}
      <nav className="reginald-ribbon mt-8" aria-label="CF sections">
        <div className="reginald-ribbon-track">
          {PULSES.map((pulse) => (
            <a
              key={pulse.id}
              href={`#${pulse.id}`}
              className="reginald-ribbon-pulse"
              data-active={active === pulse.id}
              aria-current={active === pulse.id ? "true" : undefined}
            >
              {pulse.label}
            </a>
          ))}
        </div>
      </nav>

      {/* OVERVIEW — Hero + Pattern Map */}
      <section
        id="overview"
        ref={registerSection("overview")}
        className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-24 md:pt-36 pb-20 md:pb-28"
      >
        {/* Hero fingerprint — ghost behind the headline */}
        <div className="reginald-hero-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/reginald-love/fingerprint.png" alt="" loading="eager" />
        </div>

        <div className="relative z-10 reginald-reveal">
          <span className="reginald-label">The Opening</span>
          <h1 className="reginald-word mt-6">Mailroom.</h1>
        </div>

        <div
          className="reginald-prose reginald-reveal mt-14"
          style={{ ["--rl-reveal-delay" as string]: "160ms", maxWidth: "54ch" }}
        >
          <p>
            The story everyone knows is that Reggie Love was Obama&apos;s body
            man. The story nobody tells is what the body man did{" "}
            <em>before</em> and <em>after</em>.
          </p>
          <p>
            He started in the mailroom of Obama&apos;s Senate office. Not as
            an aide. Not as a staffer. The mailroom. He was twenty-four years
            old. Four years later, he was the person the President-elect would
            borrow a tie from before walking onstage for a debate.
          </p>
          <p style={{ color: "var(--rl-paper-faint)" }}>
            Between the mailroom and the tie, there is a specific cognitive
            pattern at work. We mapped it. Six patterns. One operating system.
          </p>
        </div>

        {/* Pattern Map grid */}
        <div className="mt-20 md:mt-28 reginald-reveal">
          <hr className="reginald-rule" style={{ marginBottom: "2rem" }} />
          <div
            className="flex items-baseline justify-between"
            style={{ marginBottom: "2rem" }}
          >
            <span className="reginald-label">The Patterns · At a Glance</span>
            <span className="reginald-label" style={{ color: "var(--rl-paper-faint)" }}>
              Six signatures
            </span>
          </div>
          <div className="reginald-pattern-grid">
            {PATTERNS.map((p) => (
              <a
                key={p.anchor}
                href={`#${p.anchor}`}
                className="reginald-pattern-card"
              >
                <div className="reginald-pattern-card-top">
                  <span className="reginald-pattern-card-n">{p.n}</span>
                  <span className="reginald-pattern-card-dim">
                    {p.dimension}
                  </span>
                </div>
                <span className="reginald-pattern-card-word">{p.word}</span>
                <span className="reginald-pattern-card-name">{p.name}</span>
                <p className="reginald-pattern-card-hook">{p.hook}</p>
                <span className="reginald-pattern-card-arrow" aria-hidden>
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CORE DISCOVERY */}
      <section
        id="core"
        ref={registerSection("core")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">The Core Discovery</span>
          <h2 className="reginald-word mt-6" style={{ fontSize: "clamp(3.5rem, 2.4rem + 6vw, 8rem)" }}>
            He never claimed the scope he was already doing.
          </h2>
        </div>
        <div
          className="reginald-prose reginald-reveal mt-10"
          style={{ ["--rl-reveal-delay" as string]: "140ms", maxWidth: "56ch" }}
        >
          <p>
            Every public reading of Reggie Love stops at <em>body man.</em>{" "}
            That frame is a lid. Underneath the lid is a specific cognitive
            operating system.
          </p>
          <p>
            He enters through the lowest legitimate door. He earns the next
            seat by operating in the near-future on someone else&apos;s
            behalf. He counts the things nobody else is counting, because he
            learned in a locker room in 2001 what that counting produces. He
            describes himself in the smallest accurate frame available. And
            when he tells a story whose lesson came from someone else, he
            leaves the words in their mouth.
          </p>
          <p style={{ color: "var(--rl-paper-faint)" }}>
            He enters through the mailroom, counts the things no one else is
            counting, and relays the insight intact to whoever needs it next.
            He has never once claimed the scope he was already doing.
          </p>
        </div>

        {/* Stats — discrete grid cells */}
        <div className="mt-16 md:mt-20">
          <hr className="reginald-rule" style={{ marginBottom: "2rem" }} />
          <div className="reginald-label mb-5">The Numbers</div>
          <div className="reginald-stats-grid reginald-reveal">
            <StatCell n="40+" label="Countries managed" />
            <StatCell n="4" label="Years at his side" />
            <StatCell n="18" label="Hour days" />
            <StatCell n="22" label="Lost Saturdays, starting receiver" />
            <StatCell n="1" label="NCAA title, as a walk-on" />
            <StatCell n="30" label="Extra columns, Cameron Indoor" />
            <StatCell n="$14B" label="Under management at RON" />
            <StatCell n="2" label="Milligrams of Nicorette, not 4" />
            <StatCell n="7" label="Sectors of boards" />
            <StatCell n="1" label="Backpack, still in service" />
          </div>
        </div>

        {/* Meet Reggie */}
        <div className="mt-20 md:mt-28">
          <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
            <div className="reginald-reveal">
              <figure className="reginald-headshot">
                <div className="reginald-headshot-art">
                  <div
                    className="reginald-headshot-backdrop"
                    aria-hidden="true"
                  />
                  <div
                    className="reginald-headshot-fingerprint"
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/reginald-love/fingerprint.png" alt="" />
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="reginald-headshot-subject"
                    src="/reginald-love/headshot-cutout.png"
                    alt="Portrait of Reginald Love."
                    loading="lazy"
                  />
                  <span className="reginald-headshot-slate">
                    On the record
                  </span>
                </div>
                <figcaption className="reginald-headshot-caption">
                  <span className="reginald-headshot-name">
                    Reginald Love
                  </span>
                  <span className="reginald-headshot-meta">
                    Senior Advisor · Apollo Global Management
                    <br />
                    Washington, D.C. · Personal archive
                  </span>
                </figcaption>
              </figure>
            </div>
            <div
              className="reginald-reveal"
              style={{ ["--rl-reveal-delay" as string]: "120ms" }}
            >
              <span className="reginald-label">The Aide</span>
              <h3 className="reginald-h-hero mt-4 mb-8">
                The man one step behind the President.
              </h3>
              <div className="reginald-prose">
                <p>
                  Reggie Love is 44 years old. Senior Advisor at Apollo
                  Global Management. Boards: Cox Media Group, Blade Air
                  Mobility, Strata Critical Medical, the Center for
                  Environmental Farming Systems (chair), the National Summer
                  Learning Association, Organizing for Action, Teamworks,
                  the Military Bowl Committee, The New Renaissance.
                </p>
                <p>
                  Before Apollo, seven years as a partner at RON
                  Transatlantic. Before that, a Wharton MBA — Obama wrote
                  his letter of recommendation. Before that, four years at
                  the side of the President of the United States, from the
                  mailroom of the Senate office in 2006 to Special Assistant
                  to the President in 2011.
                </p>
                <p>
                  Before all of that, he captained the Duke basketball team
                  under Coach K — as a senior, after four years of earning
                  the stripe. He had walked onto the team uninvited as a
                  freshman. His first football season that same year went
                  0-11 as a starting wide receiver. By April of his
                  freshman year, his basketball team had won the 2001
                  national championship. He was on the roster as a walk-on,
                  alongside captain Shane Battier.
                </p>
                <p style={{ color: "var(--rl-paper-faint)" }}>
                  He has not run for office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR DIMENSIONS */}
      <section
        id="dimensions"
        ref={registerSection("dimensions")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">The Four Dimensions</span>
          <h2 className="reginald-h-hero mt-4 mb-6">
            The methodology classifies patterns across four dimensions. His
            cluster uneven.
          </h2>
        </div>
        <div
          className="reginald-prose reginald-reveal"
          style={{ maxWidth: "56ch", ["--rl-reveal-delay" as string]: "120ms" }}
        >
          <p>
            Every Cognitive Fingerprint™ maps expertise across four
            dimensions: what you <em>know</em>, how you <em>do it</em>, when
            you <em>choose</em>, and how you <em>think</em>. Reggie&apos;s
            six patterns cluster unevenly, weighted toward procedure and
            metacognition. That uneven cluster is itself a signature.
          </p>
        </div>

        <div className="reginald-dimensions-grid mt-12 md:mt-16">
          <DimensionCard
            n="D1"
            title="Declarative"
            subtitle="What you know"
            count="1"
            body="His declarative layer is real but lighter than most public figures at his level. Frameworks show up in his keynote deck — the Five P's of Leadership (Perspective, Preparation, Persistence, Passion, Patience), a verbatim Audacity of Hope passage on the Constitution — but he deploys them on stage, not in the operating room. Where he actually works, he leads with procedure and stance, not doctrine."
            patterns={["The Five P's of Leadership · supporting"]}
          />
          <DimensionCard
            n="D2"
            title="Procedural"
            subtitle="How you do it"
            count="2"
            body="Where the bag lives. Operating in the near-future on someone else's behalf. Counting the things nobody else is counting."
            patterns={["01 · Presence.", "03 · Count."]}
          />
          <DimensionCard
            n="D3"
            title="Conditional"
            subtitle="When / why you choose"
            count="2"
            body="The two patterns that describe the choices he keeps making at every fork — which door to walk through, which layer of a sector to work in."
            patterns={["02 · Entry.", "05 · Scaffold."]}
          />
          <DimensionCard
            n="D4"
            title="Metacognitive"
            subtitle="How you think"
            count="2"
            body="The beliefs underneath. How he describes himself. How he credits the people who taught him anything. The muscle of staying second-chair."
            patterns={["04 · Quiet.", "06 · Relay."]}
          />
        </div>
      </section>

      {/* PATTERNS — intro + chapters */}
      <section
        id="patterns"
        ref={registerSection("patterns")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-6"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">The Patterns · In Depth</span>
          <h2 className="reginald-h-hero mt-4 mb-4">
            Six chapters. Each opens on the word that holds the pattern.
          </h2>
          <p
            className="reginald-prose"
            style={{ color: "var(--rl-paper-faint)", maxWidth: "52ch" }}
          >
            Evidence, mechanism, and the belief underneath — then the scene
            the pattern lives in.
          </p>
        </div>
      </section>

      {/* PATTERN 1 */}
      <PatternChapter
        id="pattern-1"
        refCb={registerSection("pattern-1")}
        numeral="01"
        word="Presence."
        name="Three Steps Ahead"
        dimension="Procedural"
        artifact={{
          src: "/reginald-love/book-promo.jpg",
          alt: "Reggie Love and Barack Obama working side by side on a private plane during the 2008 campaign.",
          caption: "Campaign plane · One step behind, three steps ahead.",
        }}
      >
        <p>
          He stands one step behind you and operates three steps ahead of
          you.
        </p>
        <p>
          That was the job description in the <em>Power Forward</em>{" "}
          publisher copy, word for word: <em>stay one step behind the
          candidate, but think and act three steps ahead during a typical
          eighteen-hour workday.</em> It reads like marketing. It
          isn&apos;t. It&apos;s a cognitive posture — the physical frame of
          deference, and inside the frame, operating in the
          minute-after-next on the principal&apos;s behalf.
        </p>
        <p>
          By the time Obama reached for a MET-Rx energy bar, it was already
          on the desk. By the time he finished the speech and reached for
          his Nicorette, the specific 2-milligram dose was in Reggie&apos;s
          left pocket, not the 4-milligram. During teleprompter nights,
          Reggie sat next to the teleprompter operator watching scroll
          speed so the text never outran what Obama was actually saying. If
          Obama riffed, Reggie was watching the words on a screen behind
          the words on the stage.
        </p>
        <BeliefLine label="The belief">
          The body behind the principal is an accountant for the next
          minute. The kit in the bag, the dose in the pocket, the scroll
          speed on the teleprompter — all of it lives in a ledger the
          principal never sees. The standing is cover. The work is
          forward.
        </BeliefLine>
      </PatternChapter>

      {/* PATTERN 2 */}
      <PatternChapter
        id="pattern-2"
        refCb={registerSection("pattern-2")}
        numeral="02"
        word="Entry."
        name="The Low-Door"
        dimension="Conditional"
      >
        <p>
          He enters every room through the lowest legitimate door, and does
          not treat it as a compromise.
        </p>
        <p>
          Duke recruited him to play football. He walked onto the basketball
          team uninvited the same fall. His freshman football season went
          0-11. In April of that same academic year, the basketball team cut
          down the nets on a national championship — Reggie a freshman
          walk-on on that roster, alongside captain Shane Battier. He
          wouldn&apos;t wear the captain&apos;s stripe himself for four more
          years. By the time he did, Duke football had handed him a second
          losing season on the order of the first. Two campaigns. Roughly
          twenty-two lost Saturdays. Zero wins to bring into the
          locker-room he kept showing up to uninvited.
        </p>
        <p>
          Four years later, he moved to Washington at twenty-four years
          old, knew no one, and took a job in the mailroom of a junior
          senator from Illinois. Not as an aide. Not as a staffer. The
          mailroom.
        </p>
        <p>
          Post-White House, he took a partnership at RON Transatlantic, then
          stepped his title <em>down</em> to Senior Advisor at Apollo. The
          responsibility scaled up. The letterhead moved the other way. He
          has not, to date, taken the first chair in any room.
        </p>
        <BeliefLine label="The belief">
          The seat you earn is more stable than the seat you are offered.
          You can walk into someone&apos;s mailroom uninvited. You cannot
          walk into someone&apos;s Cabinet that way.
        </BeliefLine>
      </PatternChapter>

      {/* PATTERN 3 */}
      <PatternChapter
        id="pattern-3"
        refCb={registerSection("pattern-3")}
        numeral="03"
        word="Count."
        name="The Stationery Habit"
        dimension="Procedural"
      >
        <p>
          He counts the things nobody else is counting, because he learned
          what that counting produces.
        </p>
        <p>
          In 2001, an eighteen-year-old walked into the Cameron Indoor
          Stadium locker room and saw a chart on the wall. It looked like a
          newspaper box score, except it had about thirty extra columns.
          Dives on the floor. Screens set. Screens that led to a shot for
          someone else. Passes that led to a pass that led to a shot for
          someone else. Deflections.
        </p>
        <Quote attrib="Reggie Love · NC Black Summit, 2024">
          Coach K called them efficiency points. You could be the most
          efficient player and rank highest in efficiency points and never
          take a shot.
        </Quote>
        <p>He has been carrying that chart with him ever since.</p>
        <p>
          In 2006, on the Obama campaign, he pushed the team to stop
          reporting just <em>total dollars raised</em> and start reporting
          the total number of <em>small-dollar donors under $50.</em> In
          2026, every campaign counts small-dollar donors. In 2006, Reggie
          was installing Coach K&apos;s efficiency-points logic on a
          presidential campaign. The kit in his backpack was the same
          discipline in physical form: 2 milligrams of Nicorette, not 4.
          MET-Rx. Purell. Stationery for handwritten notes from the road.
        </p>
        <BeliefLine label="The belief">
          Outcomes are downstream of small repeated units nobody is
          counting. Big numbers are the residue of small numbers.
        </BeliefLine>
      </PatternChapter>

      {/* PATTERN 4 */}
      <PatternChapter
        id="pattern-4"
        refCb={registerSection("pattern-4")}
        numeral="04"
        word="Quiet."
        name="The Second Chair"
        dimension="Metacognitive"
        artifact={{
          src: "/reginald-love/reggie-obama.jpg",
          alt: "Reggie Love and Barack Obama laughing together at a basketball game, both in casual clothing.",
          caption: "Two guys who couldn't catch a cab in New York.",
        }}
      >
        <p>
          He self-describes in the smallest accurate frame available. The
          frame is always smaller than the work.
        </p>
        <p>
          In a 2018 interview, David Meltzer offered Reggie a framing:{" "}
          <em>&ldquo;You&apos;re the sixth man in life.&rdquo;</em> Reggie
          did not push back. He accepted it. That is the quiet tell — the
          man who privately thinks of himself as the sixth man doesn&apos;t
          argue when someone says it out loud.
        </p>
        <p>
          His Apollo title is <em>Senior Advisor,</em> a full rung below
          what the job scope would suggest at a firm managing hundreds of
          billions. His book&apos;s publisher copy calls him{" "}
          <em>a unique witness to history</em> — not an actor in it. Asked
          about running for office, he answered that it was{" "}
          <em>not on the list of things next to do.</em>
        </p>
        <Quote attrib="Reggie Love · NPR, 2015">
          We were kinda the only two guys who knew what it was like not to
          be able to catch a cab in New York.
        </Quote>
        <p>
          That is the one identity-framing line about his proximity to
          Obama he chose to offer, unprompted, on NPR. From all the
          available framings, he chose the one about being unseen together.
        </p>
        <BeliefLine label="The belief">
          The loudest seat is rarely the most powerful one. A title
          advertises. Proximity earns.
        </BeliefLine>
      </PatternChapter>

      {/* PATTERN 5 */}
      <PatternChapter
        id="pattern-5"
        refCb={registerSection("pattern-5")}
        numeral="05"
        word="Scaffold."
        name="Infrastructure Over Spotlight"
        dimension="Conditional"
        artifact={{
          src: "/reginald-love/home-portrait.jpg",
          alt: "Barack Obama speaking to a stadium crowd at the 2008 DNC convention.",
          caption: "DNC 2008 · Reggie is not in the frame. That is the frame.",
        }}
      >
        <p>
          Given a choice between the visible layer of an industry and the
          layer that makes the visible layer possible, he consistently
          chooses infrastructure.
        </p>
        <p>
          Cox Media Group — a broadcast holding, not a Hollywood studio.
          Blade Air Mobility — urban aviation <em>logistics.</em> Strata
          Critical Medical — the infrastructure spine of emergency medical
          transport. Teamworks — the operations software underneath college
          and pro athletics. The Center for Environmental Farming Systems
          at NC State — agricultural <em>research.</em> The National Summer
          Learning Association — achievement-gap infrastructure.
        </p>
        <p>
          No single seat is prestige-defining. The <em>portfolio</em> is a
          machine for making other people&apos;s outputs more possible.
        </p>
        <Quote attrib="Reggie Love · NC Black Summit, 2024">
          The work that you guys are doing is the foundation and the
          bedrock for what allows democracy to continue to grow.
        </Quote>
        <p>
          Foundation. Bedrock. The words he reaches for to praise other
          people are the same words that describe his own career posture.
          He has not run for office. His current venture, Eighty Four
          Productions, is an investment/media/social-impact platform
          backing founders Silicon Valley does not otherwise see.
        </p>
        <BeliefLine label="The belief">
          Power is what you make possible for other people, not what you
          hold yourself. The spotlight is downstream. The infrastructure is
          where outcomes actually get produced.
        </BeliefLine>
      </PatternChapter>

      {/* PATTERN 6 */}
      <PatternChapter
        id="pattern-6"
        refCb={registerSection("pattern-6")}
        numeral="06"
        word="Relay."
        name="The Carrier"
        dimension="Metacognitive"
        artifact={{
          src: "/reginald-love/love-family-potus.jpg",
          alt: "The Love family in the Oval Office with President Barack Obama and Michelle Obama.",
          caption: "The Love family in the Oval Office · Obama insisted.",
        }}
      >
        <p>
          He does not claim insight he received from someone else. He
          relays it.
        </p>
        <p>
          Listen to any of his public tellings and you notice something
          specific: the people in his stories talk. Obama talks. Coach K
          talks. Edith Childs talks. His mother talks. He leaves the words
          in their mouths.
        </p>
        <Quote attrib="Barack Obama · relayed by Reggie Love, 2024">
          You never know how long you have with the people that you love.
          So you should never miss the opportunity to appreciate them. I
          lost my mom at a really young age and I would give nothing more
          than the opportunity.
        </Quote>
        <p>
          Reggie&apos;s only framing line afterward: <em>&ldquo;I&apos;d
          share that message with you because I say never miss an
          opportunity to appreciate and show love to the people that you
          love and the people that love you.&rdquo;</em> The message is
          Obama&apos;s. Reggie is the carrier. Same structure with Edith
          Childs — he stages her as the speaker of <em>fired up, ready to
          go.</em> Same structure with Coach K&apos;s efficiency-points
          board. He doesn&apos;t claim the system. He installs it.
        </p>
        <BeliefLine label="The belief">
          Insight belongs to the person who first said it. You can carry
          a line, repeat it, act on it, hand it to someone who needs it.
          You cannot claim authorship of what you received.
        </BeliefLine>
      </PatternChapter>

      {/* PATTERN DYNAMICS */}
      <section
        id="dynamics"
        ref={registerSection("dynamics")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">Pattern Dynamics</span>
          <h2 className="reginald-h-hero mt-4 mb-4">
            The patterns compound when they fire together.
          </h2>
          <p
            className="reginald-prose"
            style={{ color: "var(--rl-paper-faint)", maxWidth: "56ch" }}
          >
            Two combinations do more work than the patterns do on their
            own. One interference is the shadow side.
          </p>
        </div>

        <div className="reginald-combo-grid mt-12 md:mt-16">
          <ComboCard
            label="Power Combination · 01"
            equation="Presence + Count"
            result="Anticipation Compounding"
            body="The near-future operating posture combined with the small-repeated-unit measurement system produces an effect that isn't visible in any single interaction. Each use is invisible. Every use leaves residue. After a year, the principal's experience is not 'he does X for me' but 'I don't know what things would feel like without him.'"
          />
          <ComboCard
            label="Power Combination · 02"
            equation="Entry + Quiet"
            result="The Un-threatening Upgrade Path"
            body="The decision to enter low combined with the practice of under-describing himself removes every friction a senior person might feel about elevating him. He hasn't asked. He hasn't branded. So when a role opens, the senior person doesn't feel managed — they feel like they discovered something."
          />
        </div>

        <div className="mt-12 md:mt-16">
          <ComboCard
            label="Interference · 01"
            equation="Presence → / Principal Seat"
            result="Operating-on-someone-else's-agenda muscle blocks the muscle for setting his own"
            body="The cost of the near-future operating model is that it requires a principal to be ahead of. When there is no principal, no existing room, no spotlight to scaffold, Reggie's patterns don't have a target. The same cognitive shape that makes him exceptional as a second chair is what makes him defer on a first-chair question."
            variant="interference"
          />
        </div>
      </section>

      {/* BLIND SPOT */}
      <section
        id="blind-spot"
        ref={registerSection("blind-spot")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">The Blind Spot</span>
          <h2 className="reginald-word mt-6">Principal.</h2>
        </div>
        <div
          className="reginald-prose reginald-reveal mt-10"
          style={{ maxWidth: "60ch", ["--rl-reveal-delay" as string]: "140ms" }}
        >
          <p>
            Every pattern above compounds in the second chair. Every
            pattern above degrades in the first chair. That is not a
            two-sided critique. It is a single bind.
          </p>
          <p>
            The muscle that makes him exceptional as the person one step
            behind — the anticipation, the low-door entry, the relay
            posture, the refusal to claim scope he is already doing — is
            the exact muscle that disqualifies him from holding a
            first-chair seat of his own. Strengthening the second-chair
            pattern atrophies the first-chair muscle. Building the
            first-chair muscle degrades the second-chair presence.
          </p>
          <p>
            Obama&apos;s tie does not get lent to someone who arrived in
            the room already convinced he was the one lending it.
          </p>
          <BeliefLine label="The bind">
            He cannot become a first-chair operator without ceasing to be
            the person who made every first-chair he scaffolded better.
            The seat he built a life around and the seat the world would
            now offer him are the same muscle, pulling in opposite
            directions.
          </BeliefLine>
        </div>
      </section>

      {/* VOCABULARY */}
      <section
        id="vocabulary"
        ref={registerSection("vocabulary")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">Signature Vocabulary</span>
          <h2 className="reginald-h-hero mt-4 mb-4">
            The phrases he returns to.
          </h2>
          <p
            className="reginald-prose"
            style={{ color: "var(--rl-paper-faint)", maxWidth: "56ch" }}
          >
            Not slogans. Measurement systems and lines he carries from
            other people&apos;s mouths.
          </p>
        </div>

        <div className="reginald-vocab-grid mt-12 md:mt-16">
          <VocabCard
            phrase="Efficiency points."
            source="From Coach K · Cameron Indoor, 2001"
            body="The thirty-column chart. Dives, screens, deflections. Not points scored. Still his operating measurement at 44."
          />
          <VocabCard
            phrase="Perspective. Preparation. Persistence. Passion. Patience."
            source="From Reggie · self-authored · keynote circuit"
            body="His Five P's of Leadership. The only explicit framework he ever claims authorship of. Lives on stage, not in the operating room."
          />
          <VocabCard
            phrase="Small-dollar donors."
            source="From Reggie · Obama campaign, 2006"
            body="Number of people giving under $50, not the dollar total. Efficiency-points logic installed on a presidential campaign."
          />
          <VocabCard
            phrase="Stay one step behind. Think three steps ahead."
            source="Power Forward publisher copy"
            body="The cognitive posture of the body-man role. The physical frame of deference; inside it, running the minute-after-next."
          />
          <VocabCard
            phrase="The sixth man in life."
            source="From David Meltzer · The Playbook, 2018"
            body="Meltzer offered it. Reggie accepted without correction. The quietest form of self-identification."
          />
          <VocabCard
            phrase="Fired up. Ready to go."
            source="From Edith Childs · Greenwood, SC, 2007"
            body="A seventy-year-old woman who moonlights as a private eye, in a rec center. Reggie credits her by name every time he tells the story."
          />
          <VocabCard
            phrase="The small things matter."
            source="From Reggie · NC Black Summit, 2024"
            body="He names the pattern on himself in public. Rare. Says it four times in a single keynote."
          />
          <VocabCard
            phrase="Foundation. Bedrock."
            source="From Reggie · NC Black Summit, 2024"
            body="What he reaches for when praising other people's work. Also a one-line description of his own career posture."
          />
          <VocabCard
            phrase="You just never know."
            source="From Reggie · POLITICO, 2015"
            body="On why he still carries a backpack years after leaving the White House. The habit outlived the job."
          />
        </div>
      </section>

      {/* STORIES */}
      <section
        id="stories"
        ref={registerSection("stories")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">Scenes from the Record</span>
          <h2 className="reginald-h-hero mt-4 mb-4">
            Three scenes the record returns to.
          </h2>
          <p
            className="reginald-prose"
            style={{ color: "var(--rl-paper-faint)", maxWidth: "56ch" }}
          >
            Inauguration Day, Greenwood, a debate. The moments the patterns
            made visible.
          </p>
        </div>

        <div className="reginald-stories mt-12 md:mt-16">
          <StoryCard
            tag="Inauguration Day · 2009"
            title="The 20-year fight."
            body={
              <>
                <p>
                  Reggie&apos;s first day working in the White House as
                  Personal Aide. Mid-afternoon, Obama walks into
                  Reggie&apos;s office.
                </p>
                <p>
                  <em>Reggie, I don&apos;t think I saw your parents
                  yesterday.</em>
                </p>
                <p>
                  Reggie tells him they came to the inauguration but that
                  he and his mother are in a twenty-year fight about
                  tickets.{" "}
                  <em>I don&apos;t care that you&apos;re mad,</em> Obama
                  says. <em>I&apos;m the leader of the Free World. Bring
                  your parents to the Oval Office.</em>
                </p>
                <p>
                  Reggie waves them in. Obama spends five minutes with his
                  mom and dad. Later, back in Reggie&apos;s office, Obama
                  shuts the door.{" "}
                  <em>You never know how long you have with the people
                  that you love. I lost my mom at a really young age and I
                  would give nothing more than the opportunity.</em>
                </p>
              </>
            }
          />
          <StoryCard
            tag="Greenwood, South Carolina · 2007"
            title="Fired up. Ready to go."
            body={
              <>
                <p>
                  A legislator in Charleston extracts a promise from Obama
                  to visit her hometown. Two weeks later, a cold rainy
                  Tuesday. Two hours from Charleston. Two hours from
                  Columbia. Three hours from Charlotte. Greenwood is far
                  from everywhere.
                </p>
                <p>
                  Obama is in a bad mood. A small group in a rec center.
                  He&apos;s going through the motions. Then someone in the
                  back says <em>fired up.</em> Someone else says{" "}
                  <em>ready to go.</em>
                </p>
                <p>
                  Edith Childs. Seventy years old. Moonlights as a private eye.
                  Church hat. She does this chant in the town.
                </p>
                <p>
                  For the next year and a half of the 2008 campaign, Obama
                  tells the story of Edith Childs. When Reggie tells it
                  now, he still gives her the church hat and the
                  private-eye job and the words. He doesn&apos;t claim he
                  noticed her first.
                </p>
              </>
            }
          />
          <StoryCard
            tag="Before a debate · 2008"
            title="The tie."
            body={
              <>
                <p>
                  Obama borrowed Reggie&apos;s tie before a presidential
                  debate.
                </p>
                <p>
                  That sentence is the job. The person whose job is to be
                  ready for every eventuality, for every day, for four
                  years, has to — some mornings — literally dress the
                  principal.
                </p>
                <p>
                  The tie is on the page because it is the smallest
                  physical object that compresses the whole cognitive
                  operating system. Presence. Count. Quiet. Relay. The
                  person who lent the tie did not ask, later, for credit
                  for the tie.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-10 md:pt-16 pb-24 md:pb-32">
        {/* Echo fingerprint — smaller, lower-right, signature */}
        <div className="reginald-closing-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/reginald-love/fingerprint.png" alt="" loading="lazy" />
        </div>

        <hr className="reginald-rule" style={{ marginBottom: "4rem" }} />
        <div className="relative z-10 reginald-reveal">
          <span className="reginald-label">The Habit</span>
          <h2 className="reginald-word mt-6" style={{ maxWidth: "20ch" }}>
            Backpack.
          </h2>
          <div
            className="reginald-prose mt-10"
            style={{ maxWidth: "52ch" }}
          >
            <p>
              Reggie Love is forty-four years old. He still carries a
              backpack. There is stationery in it.
            </p>
            <p>
              The job ended in 2011. The habit didn&apos;t. The habit was
              never about the job.
            </p>
            <p style={{ color: "var(--rl-paper-faint)" }}>
              Every person who operates at this level has a backpack.
              Something they do that outlived the role it served. Something
              so habitual it stopped registering as a pattern. Reggie&apos;s
              is in his literal bag. Yours is probably less literal. But it
              is there, and it is yours, and it is the thing that would
              show up in your fingerprint whether you wanted it to or not.
            </p>
          </div>
        </div>
      </section>

      {/* FROM REGGIE — Book + personal site */}
      <section
        id="from-reggie"
        ref={registerSection("from-reggie")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">In His Own Voice</span>
          <h2 className="reginald-h-hero mt-4 mb-4">
            This fingerprint was built on Reggie&apos;s own material.
          </h2>
          <p
            className="reginald-prose"
            style={{ color: "var(--rl-paper-faint)", maxWidth: "56ch" }}
          >
            Every scene on this page lives in longer form in his own words.
            Both are worth your time.
          </p>
        </div>

        <div className="reginald-source-grid mt-12 md:mt-16">
          <a
            href="https://amzn.to/48csuzz"
            target="_blank"
            rel="noopener noreferrer"
            className="reginald-source-card reginald-source-card--book reginald-reveal"
          >
            <div className="reginald-source-card-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/reginald-love/power-forward-cover.png"
                alt="Power Forward: My Presidential Education, by Reggie Love"
                loading="lazy"
              />
            </div>
            <div className="reginald-source-card-body">
              <span className="reginald-label" style={{ color: "var(--rl-paper-faint)" }}>
                The memoir · New York Times bestseller
              </span>
              <h3 className="reginald-source-card-title">
                Power Forward: My Presidential Education
              </h3>
              <p className="reginald-source-card-copy">
                Reggie&apos;s own book. The source material this fingerprint
                was built on — the inauguration-day conversation, the
                Greenwood rec center, the tie before the debate, all in his
                voice at the length they deserve.
              </p>
              <span className="reginald-source-card-cta">
                Read on Amazon <span aria-hidden>↗</span>
              </span>
            </div>
          </a>

          <a
            href="https://www.reginaldlove.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="reginald-source-card reginald-reveal"
            style={{ ["--rl-reveal-delay" as string]: "140ms" }}
          >
            <div className="reginald-source-card-media">
              <span className="reginald-source-card-urlbar" aria-hidden="true">
                <span className="reginald-source-card-urlbar-dot" />
                <span className="reginald-source-card-urlbar-dot" />
                <span className="reginald-source-card-urlbar-dot" />
                <span className="reginald-source-card-urlbar-url">
                  reginaldlove.com
                </span>
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/reginald-love/reginaldlove-site.png"
                alt="Homepage of reginaldlove.com"
                loading="lazy"
              />
            </div>
            <div className="reginald-source-card-body">
              <span className="reginald-label" style={{ color: "var(--rl-paper-faint)" }}>
                Personal site · Speaking + media
              </span>
              <h3 className="reginald-source-card-title">
                reginaldlove.com
              </h3>
              <p className="reginald-source-card-copy">
                Where he tells his own story. Speaking engagements, media
                appearances, photo galleries, and how to reach him directly.
              </p>
              <span className="reginald-source-card-cta">
                Visit the site <span aria-hidden>↗</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* APPLY — Prompts */}
      <section
        id="apply"
        ref={registerSection("apply")}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-20 md:pt-28 pb-20 md:pb-28"
      >
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="reginald-reveal">
          <span className="reginald-label">Apply the Patterns</span>
          <h2 className="reginald-h-hero mt-4 mb-4">
            Three prompts built from Reggie&apos;s cognitive architecture.
          </h2>
          <p
            className="reginald-prose"
            style={{ color: "var(--rl-paper-faint)", maxWidth: "56ch" }}
          >
            Paste into Claude or ChatGPT. Each one walks you through
            applying a specific pattern to your own team, role, or story.
          </p>
        </div>

        <div className="reginald-prompts mt-12 md:mt-16">
          {reginaldPrompts.map((p) => (
            <PromptCard key={p.id} prompt={p} />
          ))}
        </div>
      </section>

      {/* TWO WAYS IN */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-24 md:pb-32">
        <hr className="reginald-rule" style={{ marginBottom: "3rem" }} />
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="reginald-reveal">
            <span className="reginald-label">One · See the others</span>
            <h3 className="reginald-h-hero mt-4 mb-5">
              Browse the library.
            </h3>
            <p
              className="reginald-prose"
              style={{ marginBottom: "2rem", maxWidth: "40ch" }}
            >
              Every Famous Fingerprint™ is a different operating system,
              mapped from public material.
            </p>
            <Link
              href="/famous-fingerprints"
              className="reginald-btn reginald-btn-ghost"
            >
              Famous Fingerprints <span aria-hidden>→</span>
            </Link>
          </div>
          <div
            className="reginald-reveal"
            style={{ ["--rl-reveal-delay" as string]: "120ms" }}
          >
            <span className="reginald-label">Two · Map your own</span>
            <h3 className="reginald-h-hero mt-4 mb-5">
              Get your Cognitive Fingerprint™.
            </h3>
            <p
              className="reginald-prose"
              style={{ marginBottom: "2rem", maxWidth: "40ch" }}
            >
              Most people can&apos;t name their own operating system. They
              demonstrate it constantly. Same methodology used here.
              Applied to you. Slots open quarterly.
            </p>
            <Link
              href="/"
              className="reginald-btn reginald-btn-primary"
            >
              Map your own <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Colophon */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pb-12">
        <hr className="reginald-rule" style={{ marginBottom: "1.5rem" }} />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="reginald-label">
            Cognitive Fingerprint™ · Famous Fingerprint No. 02
          </span>
          <span className="reginald-label">
            Compiled from public material · 2026
          </span>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function StatCell({ n, label }: { n: string; label: string }) {
  return (
    <div className="reginald-stat-cell">
      <span className="reginald-stat-cell-n">{n}</span>
      <span className="reginald-stat-cell-label">{label}</span>
    </div>
  );
}

function PatternChapter({
  id,
  refCb,
  numeral,
  word,
  name,
  dimension,
  artifact,
  children,
}: {
  id: string;
  refCb: (el: HTMLElement | null) => void;
  numeral: string;
  word: string;
  name: string;
  dimension: string;
  artifact?: { src: string; alt: string; caption: string; attrib?: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <section
        id={id}
        ref={refCb}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-20"
      >
        <hr className="reginald-rule" style={{ marginBottom: "2.5rem" }} />
        <div className="reginald-reveal">
          <div className="reginald-chapter-meta">
            <span className="reginald-chapter-progress">{numeral} / 06</span>
            <span className="reginald-chapter-dot" />
            <span className="reginald-label" style={{ color: "var(--rl-paper)" }}>
              {name}
            </span>
            <span className="reginald-chapter-dot" />
            <span
              className="reginald-label"
              style={{ color: "var(--rl-paper-faint)" }}
            >
              {dimension}
            </span>
          </div>
          <h3 className="reginald-word mt-5">{word}</h3>
        </div>

        <div className="mt-10 md:mt-14">
          <div
            className="reginald-prose reginald-reveal"
            style={{ ["--rl-reveal-delay" as string]: "140ms" }}
          >
            {children}
          </div>
        </div>
      </section>

      {artifact ? (
        <ReginaldParallax
          image={artifact.src}
          alt={artifact.alt}
          caption={artifact.caption}
          attrib={artifact.attrib ?? `${numeral} · ${name}`}
        />
      ) : null}
    </>
  );
}

function ReginaldParallax({
  image,
  alt,
  caption,
  attrib,
}: {
  image: string;
  alt: string;
  caption: string;
  attrib: string;
}) {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" &&
        (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
          window.matchMedia("(hover: none)").matches),
    );
  }, []);

  return (
    <section
      className="reginald-parallax"
      role="img"
      aria-label={alt}
    >
      <div
        className="reginald-parallax-image"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: isTouch ? "scroll" : "fixed",
        }}
      />
      <div className="reginald-parallax-overlay" />
      <div className="reginald-parallax-inner">
        <p className="reginald-parallax-caption">{caption}</p>
        <p className="reginald-parallax-attrib">{attrib}</p>
      </div>
    </section>
  );
}

function Quote({
  attrib,
  children,
}: {
  attrib: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className="reginald-quote">
      <span className="reginald-quote-attrib">{attrib}</span>
      <p className="reginald-quote-text">&ldquo;{children}&rdquo;</p>
    </blockquote>
  );
}

function BeliefLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginTop: "2rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--rl-hairline-soft)",
      }}
    >
      <span
        className="reginald-label"
        style={{ display: "block", marginBottom: "0.75rem" }}
      >
        {label}
      </span>
      <p
        className="reginald-quote-text"
        style={{
          margin: 0,
          fontStyle: "italic",
          fontFamily: "var(--font-reginald-display), Georgia, serif",
        }}
      >
        {children}
      </p>
    </div>
  );
}

function DimensionCard({
  n,
  title,
  subtitle,
  count,
  body,
  patterns,
}: {
  n: string;
  title: string;
  subtitle: string;
  count: string;
  body: string;
  patterns: string[];
}) {
  return (
    <div className="reginald-dim-card reginald-reveal">
      <div className="reginald-dim-card-top">
        <span className="reginald-label">{n}</span>
        <span className="reginald-dim-card-count">{count}</span>
      </div>
      <h4 className="reginald-dim-card-title">{title}</h4>
      <span className="reginald-dim-card-subtitle">{subtitle}</span>
      <p className="reginald-dim-card-body">{body}</p>
      {patterns.length > 0 ? (
        <ul className="reginald-dim-card-list">
          {patterns.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : (
        <span className="reginald-dim-card-empty">
          Absence is the signal.
        </span>
      )}
    </div>
  );
}

function ComboCard({
  label,
  equation,
  result,
  body,
  variant,
}: {
  label: string;
  equation: string;
  result: string;
  body: string;
  variant?: "interference";
}) {
  return (
    <div
      className={`reginald-combo-card reginald-reveal ${
        variant === "interference" ? "reginald-combo-card--interference" : ""
      }`}
    >
      <span className="reginald-label">{label}</span>
      <p className="reginald-combo-equation">{equation}</p>
      <p className="reginald-combo-result">{result}</p>
      <p className="reginald-combo-body">{body}</p>
    </div>
  );
}

function VocabCard({
  phrase,
  source,
  body,
}: {
  phrase: string;
  source: string;
  body: string;
}) {
  return (
    <div className="reginald-vocab-card reginald-reveal">
      <p className="reginald-vocab-phrase">{phrase}</p>
      <span className="reginald-vocab-source">{source}</span>
      <p className="reginald-vocab-body">{body}</p>
    </div>
  );
}

function StoryCard({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <article className="reginald-story-card reginald-reveal">
      <span className="reginald-label">{tag}</span>
      <h3 className="reginald-story-title">{title}</h3>
      <div className="reginald-story-body reginald-prose">{body}</div>
    </article>
  );
}

function PromptCard({ prompt }: { prompt: ReginaldPrompt }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard write failed", err);
    }
  };

  return (
    <article className="reginald-prompt-card reginald-reveal">
      <div className="reginald-prompt-card-top">
        <div>
          <span className="reginald-label" style={{ color: "var(--rl-paper-faint)" }}>
            {prompt.pattern}
          </span>
          <h3 className="reginald-prompt-title">{prompt.title}</h3>
          <p className="reginald-prompt-subtitle">{prompt.subtitle}</p>
        </div>
        <span className="reginald-prompt-drive">DRIVE {prompt.driveScore}</span>
      </div>

      <div className="reginald-prompt-meta">
        <span className="reginald-prompt-tag">For: {prompt.forWho}</span>
      </div>

      <div className="reginald-prompt-actions">
        <button
          onClick={() => setExpanded(!expanded)}
          className="reginald-prompt-toggle"
          type="button"
        >
          {expanded ? "Hide prompt" : "View full prompt"}
        </button>
        <button
          onClick={handleCopy}
          className="reginald-btn reginald-btn-primary"
          type="button"
          style={{
            background: copied ? "transparent" : undefined,
            color: copied ? "var(--rl-paper)" : undefined,
          }}
        >
          {copied ? "Copied" : "Copy prompt"}
        </button>
      </div>

      {expanded ? (
        <div className="reginald-prompt-body">
          <pre>{prompt.prompt}</pre>
        </div>
      ) : null}
    </article>
  );
}
