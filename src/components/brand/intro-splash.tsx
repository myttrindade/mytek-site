import { SYMBOL_PATH } from "@/components/brand/symbol";

const LAYERS = 14;
const SIZE = 150;
const LETTERS = ["m", "y", "t", "e", "k"];

/** O M do pattern do brand book (monolinha grossa), girado em passos de 90°. */
const M_PATH = "M12,92 V38 A19,19 0 0 1 50,38 V92 M50,38 A19,19 0 0 1 88,38 V92";
const ROTATIONS = [0, -90, 180, 90];

/** [esquerda %, topo %, tamanho px, atraso s, duração s], símbolos do pattern que sobem. */
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
 * Abertura do site: o símbolo metalizado em 3D surge sozinho no centro, gira
 * e desliza para o lado, e então o nome entra, letra por letra, com a legenda
 * centralizada embaixo. Símbolos do pattern sobem ao fundo e um brilho
 * diagonal cruza a tela durante a virada. No fim, o conjunto se dissolve e
 * revela o site.
 *
 * Só CSS/SVG, sem JavaScript no cliente. O script curto do layout adiciona
 * `intro-seen` ao <html> nas visitas seguintes da sessão (o overlay some por
 * CSS), e com "reduzir movimento" ela nem aparece. Para rever a abertura,
 * abrir `/?intro=1`.
 */
export function IntroSplash() {
  return (
    <div className="intro" aria-hidden>
      <div className="intro-bg" />
      <div className="intro-dust">
        {DUST.map(([l, t, s, d, u], i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            fill="none"
            stroke={i % 7 === 0 ? "#C6FF00" : "#8D6BFF"}
            strokeWidth="20"
            style={{
              left: `${l}%`,
              top: `${t}%`,
              width: s * 4 + 6,
              height: s * 4 + 6,
              animationDelay: `${d}s`,
              animationDuration: `${u}s`,
            }}
          >
            <g transform={`rotate(${ROTATIONS[i % 4]} 50 50)`}>
              <path d={M_PATH} />
            </g>
          </svg>
        ))}
      </div>
      <div className="intro-vignette" />
      <div className="intro-sweep" />

      <div className="intro-center">
        <div className="intro-push">
          <div className="intro-mark">
            <div className="intro-floor" />
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
                    fill={front ? "url(#intro-metal)" : `hsl(258 16% ${16 + t * 36}%)`}
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
                          <animateTransform attributeName="gradientTransform" type="translate" values="0 0; 170 0" dur="1.1s" begin="2.9s" repeatCount="1" fill="freeze" />
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
              <span key={i}>{l}</span>
            ))}
            <span className="intro-dot">.</span>
          </p>
          <p className="intro-sub">Software e IA</p>
        </div>
      </div>
    </div>
  );
}
