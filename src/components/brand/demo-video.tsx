"use client";

import { useRef } from "react";
import { PlayIcon, XIcon } from "lucide-react";

/**
 * Botão "Ver em vídeo" que abre a gravação numa janela. Se `src` for `null`,
 * não renderiza nada (nem botão, nem espaço), como as capturas de tela do
 * site: um botão que leva a lugar nenhum comunica site inacabado.
 */
export function DemoVideo({
  src,
  poster,
  label = "Ver em vídeo",
}: {
  src: string | null;
  poster?: string | null;
  label?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  if (!src) return null;

  const close = () => {
    ref.current?.querySelector("video")?.pause();
    ref.current?.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-lima hover:text-lima"
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-lima text-lima-foreground">
          <PlayIcon className="size-3 translate-x-px" />
        </span>
        {label}
      </button>
      <dialog
        ref={ref}
        onClick={(e) => e.target === ref.current && close()}
        className="m-auto w-[min(960px,92vw)] rounded-2xl border border-white/15 bg-[#0F0819] p-0 text-white backdrop:bg-black/80"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Fechar vídeo"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/60 text-white"
        >
          <XIcon className="size-4" />
        </button>
        <video
          src={src}
          poster={poster ?? undefined}
          controls
          playsInline
          preload="none"
          className="aspect-video w-full rounded-2xl bg-black"
        />
      </dialog>
    </>
  );
}
