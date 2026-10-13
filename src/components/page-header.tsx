import { cn } from "@/lib/utils";
import { GlowArc } from "@/components/brand/glow";
import { GridPattern } from "@/components/velora/grid-pattern";
import { BlurFade } from "@/components/velora/blur-fade";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Capa das páginas internas, no visual do rebrand: faixa escura com brilho
 * roxo e arco de luz na base. Mesma altura da capa de Preço. Destaques no
 * título podem usar `text-primary`: aqui ele vira lima, que é a cor de
 * destaque sobre fundo escuro.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "dark relative overflow-hidden bg-background pt-28 pb-16 text-foreground lg:pt-36 lg:pb-20",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(94,52,247,0.45),transparent_70%)]"
      />
      <GridPattern
        width={56}
        height={56}
        className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <BlurFade direction="down">
          <div>
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                {eyebrow}
              </span>
            )}
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl [&_.text-primary]:text-lima">
              {title}
            </h1>
            {description && (
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
                {description}
              </p>
            )}
            {children}
          </div>
        </BlurFade>
      </div>
      <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
    </section>
  );
}
