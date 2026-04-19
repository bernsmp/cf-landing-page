import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Coach K Cognitive Fingerprint — The operating system behind 1,202 wins";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0b",
          backgroundImage:
            "radial-gradient(ellipse at 50% 30%, rgba(0, 48, 135, 0.15) 0%, transparent 60%)",
          padding: "60px 70px",
          position: "relative",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 20px",
              borderRadius: 100,
              border: "1px solid rgba(0, 48, 135, 0.3)",
              background: "rgba(0, 48, 135, 0.1)",
            }}
          >
            <span
              style={{
                fontSize: 14,
                color: "#4a8af5",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                fontFamily: "system-ui, monospace",
              }}
            >
              Cognitive Fingerprint Analysis
            </span>
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              fontFamily: "Georgia, serif",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Coach K
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#a1a1a6",
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            The operating system behind 1,202 wins, mapped for the first time.
            7 patterns he demonstrates constantly but has never named.
          </div>
        </div>

        {/* Bottom stats row */}
        <div
          style={{
            display: "flex",
            gap: 50,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 30,
          }}
        >
          {[
            { value: "8", label: "Transcripts" },
            { value: "36,984", label: "Words" },
            { value: "327", label: "Indicators" },
            { value: "7", label: "Patterns" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#4a8af5",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "#5c5c63",
                  fontFamily: "system-ui, monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom right branding */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 70,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "#4a4a54",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            cognitivefingerprint.ai
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
