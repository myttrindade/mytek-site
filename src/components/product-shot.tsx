import Image from "next/image";

import type { ProductShot as Shot } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Uma captura de tela do produto, emoldurada e legendada.
 *
 * Se `shot.src` for `null`, renderiza `null` — nada de moldura vazia nem de
 * "em breve". Ver o comentário de `productShots` em src/lib/site-config.ts.
 *
 * A legenda "Dados de exemplo" não é opcional: as telas são do produto real,
 * mas os números dentro delas são de demonstração. Sem a ressalva, um "94% de
 * taxa de resposta" dentro de um screenshot é lido como resultado que a mytek
 * entrega — exatamente a promessa que este site já teve que remover.
 */
export function ProductShot({
  shot,
  priority = false,
  className,
  caption = "Dados de exemplo, para ilustrar a interface.",
}: {
  shot: Shot;
  priority?: boolean;
  className?: string;
  caption?: string;
}) {
  if (!shot.src) return null;

  return (
    <figure className={cn("mx-auto w-full", className)}>
      <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/5">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.size.width}
          height={shot.size.height}
          priority={priority}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
