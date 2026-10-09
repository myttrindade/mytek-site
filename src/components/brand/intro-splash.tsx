"use client";

import { useEffect, useRef } from "react";

import { SYMBOL_PATH } from "@/components/brand/symbol";

const LAYERS = 16;
const SIZE = 150;
/** Largura real do símbolo dentro da caixa (79 de 120 do viewBox). */
const SYMBOL_W = SIZE * (79 / 120);

const SPIN_MS = 2100;
const FLY_MS = 950;

/**
 * Abertura do site: o símbolo em branco metalizado e 3D aparece, gira e
 * brilha; depois diminui e voa até o lugar da logo no menu, enquanto o site se
 * abre em círculo a partir dela.
 *
 * O overlay já vem no HTML do servidor (sem piscar o site antes), e o script
 * curto do layout adiciona `intro-seen` ao <html> nas visitas seguintes da
 * sessão, o que o esconde por CSS. Com "reduzir movimento", ele nem aparece.
 */
export function IntroSplash() {
  const root = useRef<HTMLDivElement>(null);
  const fly = useRef<HTMLDivElement>(null);
  const spin = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const flyEl = fly.current;
    const spinEl = spin.current;
    if (!el || !flyEl || !spinEl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || document.documentElement.classList.contains("intro-seen")) {
      el.style.display = "none";
      return;
    }

    const target = document
      .querySelector('header [aria-label="mytek"] svg')
      ?.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = target ? target.left + target.width / 2 : vw / 2;
    const cy = target ? target.top + target.height / 2 : vh / 2;
    const scale = target ? target.width / SYMBOL_W : 0.2;

    el.style.setProperty("--cx", `${cx}px`);
    el.style.setProperty("--cy", `${cy}px`);

    const ease = "cubic-bezier(0.65, 0, 0.25, 1)";
    const animations: Animation[] = [];

    animations.push(
      flyEl.animate(
        [
          { transform: "translate(0px, 0px) scale(1)", opacity: 1 },
          {
            transform: `translate(${cx - vw / 2}px, ${cy - vh / 2}px) scale(${scale})`,
            opacity: 1,
          },
        ],
        { duration: FLY_MS, delay: SPIN_MS, easing: ease, fill: "forwards" }
      )
    );
    // O 3D se alinha de frente enquanto voa, para pousar igual à logo do menu.
    animations.push(
      spinEl.animate(
        [
          { transform: "rotateX(-6deg) rotateY(18deg)" },
          { transform: "rotateX(0deg) rotateY(0deg)" },
        ],
        { duration: FLY_MS, delay: SPIN_MS, easing: ease, fill: "forwards" }
      )
    );
    // O site abre em círculo a partir da logo, quando o símbolo está chegando.
    const iris = el.animate(
      [{ "--r": "0px" }, { "--r": `${Math.hypot(vw, vh) * 1.05}px` }] as Keyframe[],
      {
        duration: 900,
        delay: SPIN_MS + FLY_MS - 250,
        easing: "cubic-bezier(0.5, 0, 0.2, 1)",
        fill: "forwards",
      }
    );
    animations.push(iris);

    iris.finished.then(() => {
      el.style.display = "none";
    });

    return () => animations.forEach((a) => a.cancel());
  }, []);

  return (
    <div ref={root} className="intro" aria-hidden>
      <div className="intro-stage" />
      <div className="intro-center">
        <div ref={fly} className="intro-fly">
          <div className="intro-mark" style={{ width: SIZE, height: SIZE }}>
            <div ref={spin} className="intro-spin">
              {Array.from({ length: LAYERS }, (_, i) => {
                const front = i === LAYERS - 1;
                const t = i / (LAYERS - 1);
                return (
                  <svg
                    key={i}
                    viewBox="-6.5 28 120 120"
                    className="absolute inset-0 size-full"
                    style={{
                      transform: `translateZ(${(i - LAYERS / 2) * (SIZE / 55)}px)`,
                    }}
                    fill={
                      front ? "url(#intro-metal)" : `hsl(225 8% ${22 + t * 34}%)`
                    }
                  >
                    {front && (
                      <defs>
                        <linearGradient id="intro-metal" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="#ffffff" />
                          <stop offset="0.28" stopColor="#d9dde6" />
                          <stop offset="0.5" stopColor="#f7f8fb" />
                          <stop offset="0.72" stopColor="#aeb4c2" />
                          <stop offset="1" stopColor="#eef0f5" />
                        </linearGradient>
                        <linearGradient
                          id="intro-shine"
                          gradientUnits="userSpaceOnUse"
                          x1="-40"
                          y1="0"
                          x2="0"
                          y2="0"
                        >
                          <stop offset="0" stopColor="#fff" stopOpacity="0" />
                          <stop offset="0.5" stopColor="#fff" stopOpacity="0.95" />
                          <stop offset="1" stopColor="#fff" stopOpacity="0" />
                          <animateTransform
                            attributeName="gradientTransform"
                            type="translate"
                            values="0 0; 190 0"
                            dur="1.6s"
                            begin="0.5s"
                            repeatCount="1"
                            fill="freeze"
                          />
                        </linearGradient>
                      </defs>
                    )}
                    <path d={SYMBOL_PATH} />
                    {front && <path d={SYMBOL_PATH} fill="url(#intro-shine)" />}
                  </svg>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
