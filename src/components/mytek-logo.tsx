import { cn } from "@/lib/utils";

/** Assinatura "mytek." do brand book Ultravioleta: o ponto é sempre lima. */
export function MytekLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading text-2xl font-extrabold leading-none tracking-[-0.055em]",
        className
      )}
      role="img"
      aria-label="mytek"
    >
      mytek<span className="text-lima">.</span>
    </span>
  );
}
