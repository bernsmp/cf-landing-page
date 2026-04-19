import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";

export const alt =
  "Coach K Cognitive Fingerprint — The operating system behind 1,202 wins";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Load the coaching huddle image as background
  const bgPath = join(
    process.cwd(),
    "public",
    "coachk",
    "parallax-coaching-v2-1.png",
  );
  const bgBuffer = await readFile(bgPath);
  const bgBase64 = bgBuffer.toString("base64");
  const bgSrc = `data:image/png;base64,${bgBase64}`;

  // Load the CF fingerprint logo
  const logoPath = join(process.cwd(), "public", "cf-logo-transparent.png");
  const logoBuffer = await readFile(logoPath);
  const logoBase64 = logoBuffer.toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0b",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image — coaching huddle */}
        <img
          src={bgSrc}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(0, 48, 135, 0.2) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "55px 65px",
            position: "relative",
            zIndex: 10,
            height: "100%",
          }}
        >
          {/* Top row — CF logo + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 35,
            }}
          >
            <img
              src={logoSrc}
              alt="CF"
              width="48"
              height="48"
            />
            <span
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "white",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Cognitive Fingerprint™
            </span>
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
                fontSize: 80,
                fontWeight: 700,
                color: "white",
                fontFamily: "Georgia, serif",
                lineHeight: 1.0,
                marginBottom: 20,
              }}
            >
              Coach K
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#d4d4da",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.45,
                maxWidth: 650,
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
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 25,
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
                    fontSize: 32,
                    fontWeight: 700,
                    color: "#4a8af5",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: "#8a8a96",
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
        </div>

        {/* Bottom right URL */}
        <div
          style={{
            position: "absolute",
            bottom: 55,
            right: 65,
            display: "flex",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: "#5c5c63",
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
