import { MytekSymbol } from "@/components/brand/symbol";
import { cn } from "@/lib/utils";

/**
 * Logo da mytek: o símbolo (sem o quadrado do app) + a assinatura "mytek."
 * com o ponto lima. `iconOnly` mostra só o símbolo.
 */
export function MytekLogo({
  className,
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5", className)}
      role="img"
      aria-label="mytek"
    >
      <MytekSymbol className="w-9" />
      {!iconOnly && (
        <span className="font-heading text-2xl font-extrabold leading-none tracking-[-0.055em]">
          mytek<span className="text-lima">.</span>
        </span>
      )}
    </span>
  );
}
