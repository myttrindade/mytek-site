"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { langInfo, langs, makeT, parsePathname, switchHref, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** Bandeiras redondas em SVG próprio: emoji de bandeira não aparece no Windows. */
function Flag({ lang }: { lang: Lang }) {
  const clip = `flag-${lang}`;
  return (
    <svg viewBox="0 0 32 32" aria-hidden className="size-full">
      <defs>
        <clipPath id={clip}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {lang === "pt" && (
          <>
            <rect width="32" height="32" fill="#009B3A" />
            <path d="M16 5.5 29 16 16 26.5 3 16Z" fill="#FEDF00" />
            <circle cx="16" cy="16" r="6.2" fill="#002776" />
            <path d="M10.2 14.6c3.9-1 8.4-.4 11.6 2" stroke="#fff" strokeWidth="1.3" fill="none" />
          </>
        )}
        {lang === "es" && (
          <>
            <rect width="32" height="32" fill="#C60B1E" />
            <rect y="8" width="32" height="16" fill="#FFC400" />
            <rect x="8" y="12.5" width="4.2" height="7" rx="1.2" fill="#AD1519" opacity="0.85" />
          </>
        )}
        {lang === "en" && (
          <>
            <rect width="32" height="32" fill="#fff" />
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <rect key={i} y={i * 4.6} width="32" height="2.3" fill="#B22234" />
            ))}
            <rect width="16" height="16.1" fill="#3C3B6E" />
            {[0, 1, 2].flatMap((r) =>
              [0, 1, 2].map((c) => (
                <circle key={`${r}${c}`} cx={3.2 + c * 4.4 + (r % 2) * 0} cy={3.4 + r * 4.6} r="0.9" fill="#fff" />
              ))
            )}
          </>
        )}
      </g>
    </svg>
  );
}

/**
 * Seletor de idioma: três bandeiras redondas. O clique leva para a mesma
 * página no outro idioma (ou para a home dele, se a página ainda não foi
 * traduzida). O idioma atual vem do endereço.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const { lang: atual } = parsePathname(pathname);
  const t = makeT(atual);

  return (
    <div
      role="group"
      aria-label={t("Idioma")}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1 backdrop-blur-md",
        className
      )}
    >
      {langs.map((l) => {
        const ativo = l === atual;
        return (
          <Link
            key={l}
            href={switchHref(pathname, l)}
            hrefLang={langInfo[l].htmlLang}
            lang={langInfo[l].htmlLang}
            title={langInfo[l].nome}
            aria-label={langInfo[l].nome}
            aria-current={ativo ? "true" : undefined}
            className={cn(
              "relative block size-7 rounded-full transition-all duration-200",
              ativo
                ? "scale-110 ring-2 ring-lima ring-offset-2 ring-offset-[#0F0819]"
                : "opacity-65 hover:scale-110 hover:opacity-100"
            )}
          >
            <Flag lang={l} />
          </Link>
        );
      })}
    </div>
  );
}
