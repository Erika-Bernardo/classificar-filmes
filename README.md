# 🎬 Classificação de Filmes — Exercício 5

Projeto em Node.js que calcula a quantidade de avaliações, a média das notas e a classificação de cada filme. Os testes automatizados são escritos com **Mocha** e **Chai**.

## Regras de classificação

- Média maior ou igual a 4: **Filme recomendado**
- Média maior ou igual a 3 e menor que 4: **Filme razoável**
- Média menor que 3: **Filme ruim**

## Estrutura do projeto

```text
classificar-filmes/
├── fixtures/
│   └── filmes.json
├── src/
│   ├── classificarFilmes.js
│   └── index.js
├── test/
│   └── classificarFilmes.test.js
├── .gitignore
├── package.json
└── README.md
```

## Pré-requisitos

- Node.js 18 ou superior
- npm
- VS Code (recomendado)

## Como executar

No terminal do VS Code, dentro da pasta do projeto:

```bash
npm install
npm start
```

Para executar os testes automatizados:

```bash
npm test
```

## Dados de entrada

Os dados de exemplo em `fixtures/filmes.json` seguem o enunciado:

| Filme | Avaliações | Votos | Média | Classificação |
|---|---|---:|---:|---|
| Minha mãe é uma peça | `[5, 4, 4, 4, 5]` | 5 | 4,4 | Filme recomendado |
| Saneamento Básico | `[3, 4, 2, 3, 4]` | 5 | 3,2 | Filme razoável |
| Se eu fosse você | `[1, 2, 3]` | 3 | 2 | Filme ruim |

O programa calcula a quantidade de votos e a média de cada filme. A média é exibida com duas casas decimais, enquanto a classificação é determinada pela média não arredondada.

## Casos de teste

1. Filme com média maior ou igual a 4.
2. Filme com média entre 3 (inclusive) e 4.
3. Filme com média menor que 3.
4. Filme sem avaliações (média `null` e classificação informativa).
5. Validação de dados inválidos.
6. Processamento da lista completa de filmes.

## Publicar no GitHub

Crie um repositório vazio no GitHub chamado `classificar-filmes` (não adicione README, licença ou `.gitignore` na criação). Depois, na pasta do projeto, execute:

```bash
git init
git add .
git commit -m "feat: implementa classificação de filmes e testes"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/classificar-filmes.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu usuário do GitHub.

> O `node_modules` não deve ser enviado ao GitHub; ele será recriado com `npm install`.
