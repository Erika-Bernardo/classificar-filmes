import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { classificarFilmes } from "./classificarFilmes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const caminhoDados = path.resolve(__dirname, "../fixtures/filmes.json");

try {
  const conteudo = await readFile(caminhoDados, "utf8");
  const filmes = JSON.parse(conteudo);
  const resultados = classificarFilmes(filmes);

  console.log("🎬 Resultado da classificação de filmes\n");
  for (const filme of resultados) {
    const mediaFormatada = filme.media === null ? "Não disponível" : filme.media.toFixed(2);
    console.log(`Filme: ${filme.nome}`);
    console.log(`Quantidade de votos: ${filme.quantidadeVotos}`);
    console.log(`Média: ${mediaFormatada}`);
    console.log(`Classificação: ${filme.classificacao}`);
    console.log("----------------------------------------");
  }
} catch (erro) {
  console.error("Não foi possível processar os filmes:", erro.message);
  process.exitCode = 1;
}
