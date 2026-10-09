import { SYMBOL_PATH } from "@/components/brand/symbol";

const LAYERS = 16;
const SIZE = 150;

/**
 * Abertura do site: o símbolo em branco metalizado e 3D aparece, brilha,
 * diminui, e o site se abre como duas cortinas (as duas asas da logo).
 *
 * Só CSS, sem JavaScript no cliente: a animação termina sozinha e o overlay
 * some (ver `.intro` em globals.css). O script curto do layout marca a sessão
 * e adiciona `intro-seen` ao <html>, para a abertura rodar uma vez por sessão.
 * Com "reduzir movimento" ligado, ela nem aparece.
 */
export function IntroSplash() {
  return (
    <div className="intro" aria-hidden>
      <div className="intro-curtain intro-curtain-l" />
      <div className="intro-curtain intro-curtain-r" />
      <div className="intro-stage">
        <div className="intro-mark" style={{ width: SIZE, height: SIZE }}>
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
                  fill={
                    front
                      ? "url(#intro-metal)"
                      : `hsl(225 8% ${22 + t * 34}%)`
                  }
                >
                  {front && (
                    <defs>
                      <linearGradient
                        id="intro-metal"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
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
                  {front && (
                    <path d={SYMBOL_PATH} fill="url(#intro-shine)" />
                  )}
                </svg>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
