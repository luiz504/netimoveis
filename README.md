# Front-end Challenge - Netimóveis 20240110

## Introdução

Este é o nosso case técnico para Front-end! A ideia é que você possa mostrar toda sua expertise técnica através dele :D
Estamos animados para te ver brilhar novamente!

[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=

### Antes de começar

- Prepare o projeto para ser disponibilizado no Github, copiando o conteúdo deste repositório para o seu (ou utilize o fork do projeto e aponte para o Github). Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);
- O projeto deve utilizar a Linguagem específica ou Framework na sua Vaga (caso esteja se candidatando). Por exemplo: Next.js, React e entre outras;
- Considere como _deadline 5 dias a partir do início do desafio_. Caso tenha sido convidado a realizar o teste e não seja possível concluir dentro deste período, avise a pessoa que o convidou para receber instruções sobre o que fazer.
- Documentar todo o processo de investigação para o desenvolvimento da atividade (README.md no seu repositório); os resultados destas tarefas são tão importantes do que o seu processo de pensamento e decisões à medida que as completa, por isso tente documentar e apresentar os seus hipóteses e decisões na medida do possível.

### Instruções iniciais obrigatórias

- Utilizar o framework Next.js (opte pela versão que preferir)
- Utilizar o framework Tailwind CSS para a UI (pode usar outros, porém, conta muito para nós usar o Tailwind CSS ) ♥
- Utilizar classes para os dados.
- Seguir o protótipo da tela
-

### Será um enorme **diferencial** para a gente se você

- Optar por usar **TypeScript**.
- Aplicar **Testes Unitários** em Componentes.

### Instruções

Vamos disponibilizar para você dois JSONs como fonte de dados.

- Um será o [place.json](./assets/place.json), que contém as informações de 5 cidades brasileiras.
- O segundo será o [flats.json](./assets/flats.json), nele está o relacionamento cidade versus hotéis.

`Também iremos disponibilizar o protótipo da tela que você deverá nos entregar.`

### Home

Estude o Figma para trabalhar no projeto com os requisitos essenciais:

[Figma](https://www.figma.com/file/Bbwa2wakxxcUMZB4Y4nXke/Teste-Coodesh?type=design&t=gJx1Cj6soxAtWvks-6)

#### Formulário

- O campo Localização deverá listar as opções no formato 'Belo Horizonte, Minas Gerais'. Quando selecionada uma opção, ela deverá ser exibida como 'Belo Horizonte, BH'.
- O campo Nº de Quartos deverá ser um Dropdown para informar a quantidade e selecionar os Tipos
- O botão deverá 'Buscar' tera alguns comportamentos ao passar o Mouse, seguindo as especificações do Figma

#### Listagem

- Apresente as imagens do imóveis em um carrossel.

### Extras

- Desenhar os demais elementos da página
- Trabalhar com testes unitários
- Header flutuante

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:

> This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

1. Adicione o repositório na avaliação
2. Verifique se o Readme está bom e faça o commit final;
3. Ao finalizar a entrega do código, enviar para a avaliação no botão "Enviar Código" na parte superior da avaliação
4. Apresentar o resultado da sua entrega, você terá as instruções para apresentação após "Enviar Código".

## Suporte

Use o nosso canal no slack: http://bit.ly/32CuOMy para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.

## Development Thought Process

- [x] Configure base project (Next.js@latest, ESLint, Prettier, Husky, lint-staged, commit-lint)
- [x] Configure Vitest, RTL, ESLint plugin
- [x] Go to Figma page and identify fonts, colors, components, variants, responsive targets, screens.
- [x] Create Header and mind its changes on the responsive version
- [x] Create Banner Component and its input with a dummy version
- [x] Create footers, group the orange one and the gray one, in the Footer component but split them as the LowerFooter / UpperFooter to reduce code complexity due to responsiveness classes and the number of links
- [x] Create Section TypeOfProperties&Popular
- [x] Create Section BePartOfIt
- [x] Create Section BlogPosts
- [x] Config API Route to serve the flats and place jsons
- [x] Create Section PropertiesAnnounces
- [ ] Create Section CatchPhrases
- [ ] Create Section FindOpportunities
- [ ] Create Section PlacesServices
- [ ] Create Section WantSellOrRent
- [ ] Create Section FindPropertiesBy
- [ ] Create Section FindBuyAnnounceProperties

## Developer notes

- This Figma project faces significant DX challenges, lacking a UI Kit to showcase
  fonts, weights, colors, etc, crucial for the project. While it serves as a challenge
  draft, implementing a basic UI Kit would significantly enhance the initial impression.
  Prioritizing efforts in this area is essential to improve overall usability.
- Due the lack of time of my part and significant effort spent addressing responsiveness
  and some lost time over testing with medias queries, the final delivery did not
  entirely meet my expectations. However, the submitted work showcases a robust set
  of skills in React and Next.js. Given the challenges posed by adapting to a Figma
  design that was not optimized for efficiency, I am quite satisfied with what was
  accomplished. This project demonstrates my ability to handle complex requests and
  manage resources effectively under tight constraints.
