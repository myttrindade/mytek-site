import { SYMBOL_PATH } from "@/components/brand/symbol";

const LAYERS = 14;
const SIZE = 150;
const LETTERS = ["m", "y", "t", "e", "k"];

/**
 * Abertura do site, em clima cinematográfico: um arco de luz roxa se desenha,
 * um clarão corre pela borda, o símbolo metalizado em 3D surge, o nome entra
 * com as letras bem espaçadas, uma a uma, e no fim a luz "estoura" e revela o
 * site.
 *
 * Só CSS/SVG, sem JavaScript no cliente. O script curto do layout adiciona
 * `intro-seen` ao <html> nas visitas seguintes da sessão (o overlay some por
 * CSS), e com "reduzir movimento" ela nem aparece.
 */
export function IntroSplash() {
  return (
    <div className="intro" aria-hidden>
      <div className="intro-bg" />

      <div className="intro-ring">
        <svg viewBox="0 0 1000 760" className="intro-arcs" fill="none">
          <defs>
            <linearGradient id="arc-g" x1="170" y1="0" x2="830" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#6E48FF" stopOpacity="0" />
              <stop offset="0.25" stopColor="#8D6BFF" />
              <stop offset="0.5" stopColor="#ffffff" />
              <stop offset="0.75" stopColor="#8D6BFF" />
              <stop offset="1" stopColor="#6E48FF" stopOpacity="0" />
            </linearGradient>
            <filter id="arc-blur-lg" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="arc-blur-sm" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            <radialGradient id="flare-g">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.35" stopColor="#c9b8ff" stopOpacity="0.9" />
              <stop offset="1" stopColor="#6E48FF" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* arco de baixo: desenha da esquerda para a direita */}
          {[
            { w: 26, f: "url(#arc-blur-lg)", o: 0.55 },
            { w: 9, f: "url(#arc-blur-sm)", o: 0.9 },
            { w: 2.5, f: undefined, o: 1 },
          ].map((l, i) => (
            <path
              key={i}
              className="intro-arc intro-arc-low"
              d="M 170 380 A 330 330 0 0 0 830 380"
              stroke="url(#arc-g)"
              strokeWidth={l.w}
              strokeLinecap="round"
              filter={l.f}
              opacity={l.o}
              pathLength={1}
            />
          ))}
          {/* arco de cima: fecha o anel */}
          {[
            { w: 20, f: "url(#arc-blur-lg)", o: 0.4 },
            { w: 6, f: "url(#arc-blur-sm)", o: 0.7 },
            { w: 2, f: undefined, o: 0.9 },
          ].map((l, i) => (
            <path
              key={i}
              className="intro-arc intro-arc-up"
              d="M 170 380 A 330 330 0 0 1 830 380"
              stroke="url(#arc-g)"
              strokeWidth={l.w}
              strokeLinecap="round"
              filter={l.f}
              opacity={l.o}
              pathLength={1}
            />
          ))}

          {/* clarão que corre pela borda */}
          <g className="intro-flare">
            <circle r="46" fill="url(#flare-g)" />
            <circle r="7" fill="#fff" />
            <animateMotion
              dur="1.35s"
              begin="0.15s"
              fill="freeze"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.45 0 0.2 1"
              path="M 170 380 A 330 330 0 0 0 830 380"
            />
          </g>
        </svg>
      </div>

      <div className="intro-center">
        <div className="intro-mark">
          <div className="intro-spin">
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
                  fill={front ? "url(#intro-metal)" : `hsl(225 8% ${22 + t * 34}%)`}
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
                    </defs>
                  )}
                  <path d={SYMBOL_PATH} />
                </svg>
              );
            })}
          </div>
        </div>

        <p className="intro-word" aria-hidden>
          {LETTERS.map((l, i) => (
            <span key={i} style={{ animationDelay: `${1.45 + i * 0.13}s` }}>
              {l}
            </span>
          ))}
          <span className="intro-dot" style={{ animationDelay: `${1.45 + LETTERS.length * 0.13}s` }}>
            .
          </span>
        </p>
        <p className="intro-sub">Software e IA</p>
      </div>
    </div>
  );
}
