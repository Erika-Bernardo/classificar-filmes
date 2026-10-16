/**
 * Calcula os dados de avaliação e classifica um filme.
 * @param {{ nome: string, avaliações: number[] }} filme
 * @returns {{ nome: string, quantidadeVotos: number, media: number|null, classificacao: string }}
 */
export function classificarFilme(filme) {
  if (!filme || typeof filme.nome !== "string" || !Array.isArray(filme.avaliações)) {
    throw new TypeError("O filme deve conter 'nome' (texto) e 'avaliações' (vetor).");
  }

  const notas = filme.avaliações;

  for (const nota of notas) {
    if (typeof nota !== "number" || !Number.isFinite(nota) || nota < 0 || nota > 5) {
      throw new TypeError("Todas as avaliações devem ser números entre 0 e 5.");
    }
  }

  const quantidadeVotos = notas.length;

  if (quantidadeVotos === 0) {
    return {
      nome: filme.nome,
      quantidadeVotos: 0,
      media: null,
      classificacao: "Sem avaliações"
    };
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);
  const mediaExata = soma / quantidadeVotos;
  const media = Number(mediaExata.toFixed(2));

  let classificacao;
  if (mediaExata >= 4) {
    classificacao = "Filme recomendado";
  } else if (mediaExata >= 3) {
    classificacao = "Filme razoável";
  } else {
    classificacao = "Filme ruim";
  }

  return { nome: filme.nome, quantidadeVotos, media, classificacao };
}

/**
 * Classifica todos os filmes recebidos.
 * @param {Array<{ nome: string, avaliações: number[] }>} filmes
 */
export function classificarFilmes(filmes) {
  if (!Array.isArray(filmes)) {
    throw new TypeError("A entrada deve ser um vetor de filmes.");
  }
  return filmes.map(classificarFilme);
}
