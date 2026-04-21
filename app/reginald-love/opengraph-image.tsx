import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Reginald Love — Cognitive Fingerprint™. From Obama's mailroom to the tie he lent before a presidential debate.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Reggie's brand palette: deep navy + white. No maroon, no gold, no gradient.
const NAVY = "#0A1729";
const NAVY_HIGH = "#142238";
const PAPER = "#F4F6FA";
const PAPER_MUTED = "#AEB7C7";
const PAPER_FAINT = "#6B758A";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: NAVY,
          position: "relative",
          overflow: "hidden",
          padding: "60px 70px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Very soft vignette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `radial-gradient(ellipse at 20% 20%, ${NAVY_HIGH} 0%, ${NAVY} 80%)`,
          }}
        />

        {/* Masthead row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: PAPER_FAINT,
              textTransform: "uppercase",
              letterSpacing: "0.20em",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            Cognitive Fingerprint™ · Famous Fingerprint No. 02
          </span>
          <span
            style={{
              fontSize: 13,
              color: PAPER_FAINT,
              textTransform: "uppercase",
              letterSpacing: "0.20em",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            2006 → 2024
          </span>
        </div>

        {/* The signature word */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
            marginTop: 30,
          }}
        >
          <span
            style={{
              fontSize: 15,
              color: PAPER_FAINT,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
              marginBottom: 18,
            }}
          >
            Reginald Love
          </span>
          <div
            style={{
              fontSize: 220,
              color: PAPER,
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
              fontStyle: "italic",
              fontFamily: "Georgia, 'Bodoni 72', serif",
              marginBottom: 26,
            }}
          >
            Mailroom.
          </div>
          <div
            style={{
              fontSize: 26,
              color: PAPER_MUTED,
              lineHeight: 1.35,
              maxWidth: 900,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            From Obama&apos;s mailroom to the tie he lent before a
            presidential debate. The pattern was there the whole time.
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            display: "flex",
            gap: 58,
            borderTop: `1px solid ${PAPER_FAINT}`,
            paddingTop: 22,
            position: "relative",
            zIndex: 10,
          }}
        >
          {[
            { value: "40+", label: "Countries" },
            { value: "4", label: "Years at his side" },
            { value: "22", label: "Losses before the walk-on" },
            { value: "$14B", label: "Under management at RON" },
            { value: "6", label: "Patterns" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: 30,
                  color: PAPER,
                  fontStyle: "italic",
                  fontFamily: "Georgia, 'Bodoni 72', serif",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: PAPER_FAINT,
                  fontFamily: "ui-sans-serif, system-ui, sans-serif",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginTop: 6,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 22,
            right: 70,
            display: "flex",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: PAPER_FAINT,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              letterSpacing: "0.12em",
            }}
          >
            cognitivefingerprint.ai/reginald-love
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
