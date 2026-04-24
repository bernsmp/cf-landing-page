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
      aria-label={label}
      className={cn(
        "group relative inline-flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-2 text-center transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--grey-950)]",
        className,
      )}
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
      <span className="relative flex size-24 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-[var(--brand-gold)]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-3 rounded-full bg-[radial-gradient(circle,rgba(255,216,117,0.18),transparent_68%)] opacity-80" />
        <Fingerprint
          aria-hidden="true"
          className={cn(
            "relative size-20 text-[var(--brand-gold)] drop-shadow-[0_0_24px_rgba(255,184,41,0.28)] transition-all duration-300 group-hover:text-[var(--brand-gold-light)]",
            isScanning && "scale-105 animate-pulse",
          )}
        />
        {isScanning && (
          <span className="absolute inset-4 rounded-full border border-[var(--brand-gold)]/45 animate-ping" />
        )}
      </span>
      <span className="relative whitespace-nowrap text-sm font-semibold text-[var(--brand-gold)] transition-colors duration-300 group-hover:text-[var(--brand-gold-light)]">
        {label}
      </span>
      {isScanning && (
        <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-1">
          <span className="size-1 rounded-full bg-[var(--brand-gold)] animate-bounce" />
          <span className="size-1 rounded-full bg-[var(--brand-gold)] animate-bounce [animation-delay:150ms]" />
          <span className="size-1 rounded-full bg-[var(--brand-gold)] animate-bounce [animation-delay:300ms]" />
        </span>
      )}
    </a>
  );
}
