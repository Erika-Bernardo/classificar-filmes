import { describe, it } from "mocha";
import { expect } from "chai";
import { classificarFilme, classificarFilmes } from "../src/classificarFilmes.js";

describe("classificarFilme()", () => {
  it("deve classificar média maior ou igual a 4 como Filme recomendado", () => {
    const resultado = classificarFilme({
      nome: "Sempre ao seu lado",
      avaliações: [5, 5, 4, 4, 5]
    });

    expect(resultado.quantidadeVotos).to.equal(5);
    expect(resultado.media).to.equal(4.6);
    expect(resultado.classificacao).to.equal("Filme recomendado");
  });

  it("deve classificar média entre 3 (inclusive) e 4 como Filme razoável", () => {
    const resultado = classificarFilme({
      nome: "A espera de um milagre",
      avaliações: [5, 4, 2, 3, 4]
    });

    expect(resultado.quantidadeVotos).to.equal(5);
    expect(resultado.media).to.equal(3.6);
    expect(resultado.classificacao).to.equal("Filme razoável");
  });

  it("deve classificar média menor que 3 como Filme ruim", () => {
    const resultado = classificarFilme({
      nome: "Vingadores",
      avaliações: [1, 2, 1]
    });

    expect(resultado.quantidadeVotos).to.equal(3);
    expect(resultado.media).to.equal(1.33);
    expect(resultado.classificacao).to.equal("Filme ruim");
  });

  it("deve classificar usando a média exata, antes do arredondamento", () => {
    const resultado = classificarFilme({
      nome: "Abaixo do limite",
      avaliações: [3.99, 4, 4, 4]
    });

    expect(resultado.media).to.equal(4);
    expect(resultado.classificacao).to.equal("Filme razoável");
  });

  it("deve informar quando o filme ainda não recebeu avaliações", () => {
    const resultado = classificarFilme({ nome: "Filme novo", avaliações: [] });

    expect(resultado.quantidadeVotos).to.equal(0);
    expect(resultado.media).to.equal(null);
    expect(resultado.classificacao).to.equal("Sem avaliações");
  });

  it("deve rejeitar notas fora do intervalo de 0 a 5", () => {
    expect(() => classificarFilme({ nome: "Inválido", avaliações: [6] }))
      .to.throw(TypeError, "Todas as avaliações devem ser números entre 0 e 5.");
  });

  it("deve rejeitar avaliações com posições vazias", () => {
    expect(() => classificarFilme({ nome: "Inválido", avaliações: [5, , 5] }))
      .to.throw(TypeError, "Todas as avaliações devem ser números entre 0 e 5.");
  });

  it("deve classificar a lista completa de filmes", () => {
    const filmes = [
      { nome: "Sempre ao seu lado", avaliações: [5, 4, 4, 4, 5] },
      { nome: "A espera de um milagre", avaliações: [3, 4, 2, 3, 4] },
      { nome: "Vingadores", avaliações: [1, 2, 3] }
    ];

    const resultados = classificarFilmes(filmes);

    expect(resultados).to.have.lengthOf(3);
    expect(resultados.map((filme) => filme.classificacao)).to.deep.equal([
      "Filme recomendado",
      "Filme razoável",
      "Filme ruim"
    ]);
  });

  it("deve rejeitar uma entrada que não seja um vetor de filmes", () => {
    expect(() => classificarFilmes(null))
      .to.throw(TypeError, "A entrada deve ser um vetor de filmes.");
  });
});
