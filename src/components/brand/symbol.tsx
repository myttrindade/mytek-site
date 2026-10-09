import { cn } from "@/lib/utils";

/** Símbolo oficial (o do avatar do Instagram): duas asas espelhadas. */
export const SYMBOL_PATH =
  "M14.00,51.00 L50.60,77.00 L50.60,124.00 L42.00,115.50 L42.00,99.00 L31.50,92.00 L38.50,87.00 L42.00,88.50 L42.00,84.00 L24.50,71.50 L24.50,114.50 L14.00,121.50Z M93.00,51.00 L56.40,77.00 L56.40,124.00 L65.00,115.50 L65.00,99.00 L75.50,92.00 L68.50,87.00 L65.00,88.50 L65.00,84.00 L82.50,71.50 L82.50,114.50 L93.00,121.50Z";

export function MytekSymbol({ className }: { className?: string }) {
  return (
    <svg
      viewBox="12 49 83 77"
      fill="currentColor"
      aria-hidden
      className={cn("h-auto w-8", className)}
    >
      <path d={SYMBOL_PATH} />
    </svg>
  );
}

/** Avatar: símbolo branco sobre quadrado roxo, como no perfil do Instagram. */
export function MytekAvatar({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-[22%] bg-[#5E34F7] text-white",
        className
      )}
    >
      <MytekSymbol className="w-[62%]" />
    </span>
  );
}
