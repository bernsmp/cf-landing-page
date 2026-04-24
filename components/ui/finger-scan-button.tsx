"use client";

import * as React from "react";
import { Fingerprint } from "lucide-react";

import { cn } from "@/lib/utils";

interface FingerScanButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

export function FingerScanButton({
  href,
  label,
  className,
  onBlur,
  onClick,
  onFocus,
  onMouseEnter,
  ...props
}: FingerScanButtonProps) {
  const [isScanning, setIsScanning] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  const startScan = React.useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsScanning(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsScanning(false);
      timeoutRef.current = null;
    }, 1600);
  }, []);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-xl border px-6 py-3 text-sm font-semibold text-[var(--grey-950)] transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--grey-950)]",
        className,
      )}
      style={{
        background:
          "linear-gradient(135deg, var(--brand-gold-light) 0%, var(--brand-gold) 42%, var(--brand-gold-dark) 100%)",
        borderColor: "rgba(255, 216, 117, 0.65)",
        boxShadow:
          "0 18px 50px rgba(255, 184, 41, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.45)",
      }}
      onBlur={(event) => {
        setIsScanning(false);
        onBlur?.(event);
      }}
      onClick={(event) => {
        startScan();
        onClick?.(event);
      }}
      onFocus={(event) => {
        startScan();
        onFocus?.(event);
      }}
      onMouseEnter={(event) => {
        startScan();
        onMouseEnter?.(event);
      }}
      {...props}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.42),transparent_46%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--grey-950)]/20 bg-[var(--grey-950)]/10">
        <Fingerprint
          aria-hidden="true"
          className={cn(
            "size-5 text-[var(--grey-950)] transition-all duration-300",
            isScanning && "animate-pulse",
          )}
        />
        {isScanning && (
          <span className="absolute inset-0 rounded-full border border-[var(--grey-950)]/35 animate-ping" />
        )}
      </span>
      <span className="relative whitespace-nowrap">{label}</span>
      {isScanning && (
        <span className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 gap-1">
          <span className="size-1 rounded-full bg-[var(--grey-950)]/70 animate-bounce" />
          <span className="size-1 rounded-full bg-[var(--grey-950)]/70 animate-bounce [animation-delay:150ms]" />
          <span className="size-1 rounded-full bg-[var(--grey-950)]/70 animate-bounce [animation-delay:300ms]" />
        </span>
      )}
    </a>
  );
}
