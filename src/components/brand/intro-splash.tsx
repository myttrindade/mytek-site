import { SYMBOL_PATH } from "@/components/brand/symbol";

const LAYERS = 14;
const SIZE = 150;
const LETTERS = ["m", "y", "t", "e", "k"];

/** [esquerda %, topo %, tamanho px, atraso s, duração s] — poeira de luz. */
const DUST: [number, number, number, number, number][] = [
  [11, 55, 2, 0.3, 2.6],
  [48, 72, 3, 0.41, 3.1],
  [85, 89, 4, 0.52, 3.6],
  [22, 61, 5, 0.63, 4.1],
  [59, 78, 2, 0.74, 4.6],
  [96, 95, 3, 0.85, 2.6],
  [33, 67, 4, 0.96, 3.1],
  [70, 84, 5, 1.07, 3.6],
  [7, 56, 2, 1.18, 4.1],
  [44, 73, 3, 1.29, 4.6],
  [81, 90, 4, 1.4, 2.6],
  [18, 62, 5, 1.51, 3.1],
  [55, 79, 2, 1.62, 3.6],
  [92, 96, 3, 1.73, 4.1],
  [29, 68, 4, 1.84, 4.6],
  [66, 85, 5, 1.95, 2.6],
  [3, 57, 2, 2.06, 3.1],
  [40, 74, 3, 2.17, 3.6],
  [77, 91, 4, 2.28, 4.1],
  [14, 63, 5, 2.39, 4.6],
  [51, 80, 2, 0.3, 2.6],
  [88, 97, 3, 0.41, 3.1],
  [25, 69, 4, 0.52, 3.6],
  [62, 86, 5, 0.63, 4.1],
  [99, 58, 2, 0.74, 4.6],
  [36, 75, 3, 0.85, 2.6],
];

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
      <div className="intro-dust">
        {DUST.map(([l, t, s, d, u], i) => (
          <i
            key={i}
            style={{
              left: `${l}%`,
              top: `${t}%`,
              width: s,
              height: s,
              animationDelay: `${d}s`,
              animationDuration: `${u}s`,
            }}
          />
        ))}
      </div>
      <div className="intro-vignette" />

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

          {/* aros finos: marcas girando e um segundo anel tênue */}
          <circle className="intro-ticks" cx="500" cy="380" r="366" stroke="#fff" strokeOpacity="0.28" strokeWidth="2" strokeDasharray="1.5 11" />
          <circle className="intro-ring2" cx="500" cy="380" r="392" stroke="#8D6BFF" strokeOpacity="0.22" strokeWidth="1" />

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
        <div className="intro-push">
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
                      <linearGradient id="intro-shine" gradientUnits="userSpaceOnUse" x1="-30" y1="0" x2="10" y2="0">
                        <stop offset="0" stopColor="#fff" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#fff" stopOpacity="0.95" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        <animateTransform attributeName="gradientTransform" type="translate" values="0 0; 170 0" dur="1.1s" begin="2.2s" repeatCount="1" fill="freeze" />
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
        <span className="intro-line" />
        <p className="intro-sub">Software e IA</p>
        <span className="intro-streak" />
        </div>
      </div>
    </div>
  );
}
