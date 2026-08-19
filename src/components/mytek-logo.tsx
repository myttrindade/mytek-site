import { cn } from "@/lib/utils";

export function MytekLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("size-6 text-primary", className)}
    >
      <path
        d="M8 52V12L25.5 34L43 12V52"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 12H57M43 32H54M43 52H57"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
