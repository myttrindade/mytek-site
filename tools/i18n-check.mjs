// Lista o que falta traduzir: textos usados em t("...") sem tradução em es/en.
// Uso: pnpm i18n
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(fileURLToPath(import.meta.url), "..", "..");

const dicionario = (arquivo) => {
  const src = readFileSync(join(raiz, "src", "lib", "i18n", arquivo), "utf8");
  const chaves = new Set();
  for (const m of src.matchAll(/^\s*"((?:[^"\\]|\\.)*)":/gm)) {
    chaves.add(JSON.parse(`"${m[1]}"`));
  }
  return chaves;
};
const es = dicionario("es.ts");
const en = dicionario("en.ts");

const arquivos = [];
const varre = (dir) => {
  for (const nome of readdirSync(dir)) {
    const p = join(dir, nome);
    if (statSync(p).isDirectory()) varre(p);
    else if (/\.tsx?$/.test(nome) && !p.includes(join("lib", "i18n"))) arquivos.push(p);
  }
};
varre(join(raiz, "src"));

const usados = new Map();
for (const arq of arquivos) {
  const src = readFileSync(arq, "utf8");
  for (const m of src.matchAll(/\bt\(\s*"((?:[^"\\]|\\.)*)"\s*\)/g)) {
    const chave = JSON.parse(`"${m[1]}"`);
    if (!usados.has(chave)) usados.set(chave, arq.replace(raiz, ""));
  }
}

let faltas = 0;
for (const [chave, arq] of usados) {
  const falta = [!es.has(chave) && "es", !en.has(chave) && "en"].filter(Boolean);
  if (falta.length) {
    faltas++;
    console.log(`[${falta.join(",")}] ${chave.slice(0, 90)}  (${arq})`);
  }
}
console.log(`\n${usados.size} textos em t("..."), ${faltas} sem tradução.`);
process.exit(faltas ? 1 : 0);
