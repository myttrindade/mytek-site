"use client";

import { useState } from "react";

import { SYMBOL_PATH } from "@/components/brand/symbol";

const ROWS = [0, 1, 0, 1, 0];

/** Faixas de "mytek" em baixo-relevo, como no cartão de visita. */
function Pattern() {
  return (
    <div className="intro-pat" aria-hidden>
      {ROWS.map((o, i) => (
        <span key={i} style={{ ["--o" as string]: o }}>
          mytek mytek mytek
        </span>
      ))}
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div className={`intro-logo ${className ?? ""}`}>
      <svg viewBox="12 49 83 77" aria-hidden>
        <path d={SYMBOL_PATH} />
      </svg>
      <span>
        mytek<b>.</b>
      </span>
    </div>
  );
}

/**
 * Abertura do site: o cartão de visita da mytek em 3D. Ele entra de longe,
 * se endireita, mostra a frente roxa, vira para o verso (com a apresentação)
 * e se aproxima da câmera, revelando o site. Um brilho passa por cada face.
 *
 * Baseada na abertura do cartão digital (cartao-qr-mytek). Só CSS: o clique
 * para pular é o único JavaScript. O script curto do layout adiciona
 * `intro-seen` ao <html> nas visitas seguintes da sessão (o overlay some por
 * CSS), e com "reduzir movimento" ela nem aparece.
 */
export function IntroSplash() {
  const [pulou, setPulou] = useState(false);

  return (
    <div
      className={`intro${pulou ? " intro-out" : ""}`}
      aria-hidden
      onClick={() => setPulou(true)}
    >
      <div className="intro-stage">
        <div className="intro-floor" />
        <div className="intro-card">
          <div className="intro-face intro-front">
            <Pattern />
            <Logo className="intro-logo-lg" />
            <small>Tecnologia sob medida.</small>
          </div>
          <div className="intro-face intro-back">
            <Pattern />
            <div className="intro-info">
              <Logo className="intro-logo-sm" />
              <h4>
                Software e <b>IA</b> pro seu negócio.
              </h4>
              <p>
                Sites · sistemas sob medida · CRM · agentes de IA · automações ·
                dados e muito mais
              </p>
              <div className="intro-ln">
                <i>
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
                  </svg>
                </i>
                mytek.com.br
              </div>
              <div className="intro-ln">
                <i>
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="16" rx="4.5" />
                    <circle cx="12" cy="12" r="3.6" />
                  </svg>
                </i>
                @mytek.oficial
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-skip">toque para pular</div>
    </div>
  );
}
