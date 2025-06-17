# 💚 Novo portal Unimed Uberlândia 💚


Projeto de iniciativa interna para desenvolvimento do novo portal Unimed Uberlândia.

- Você pode ver a versão legado nesse link: https://www.unimeduberlandia.coop.br/portal/
- Você pode ver a versão em homologação nesse link: https://portalnew.unimeduberlandia.coop.br/

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

1. **Node.js**: O Node.js é um ambiente de execução para JavaScript que permite rodar código JavaScript fora do navegador.
   - Para verificar se o Node.js já está instalado, execute:
     ```
     node -v
     ```
   - Caso não esteja instalado, você pode baixá-lo e instalá-lo no [site oficial do Node.js](https://nodejs.org/).
   - O projeto roda bem na versão 20.18.3 do node.

2. **Npm**: O npm (Node Package Manager) é o gerenciador de pacotes padrão para o Node.js, utilizado para gerenciar as dependências do projeto.
   - Para verificar se o npm está instalado, execute:
     ```
     npm -v
     ```
   - Se o npm não estiver instalado, ele será instalado automaticamente junto com o Node.js.
   - O projeto roda bem na versão 10.8.1 do npm.

### 🔧 Instalação

Siga os passos abaixo para configurar o projeto em seu ambiente local:

1. Clone o repositório do projeto para o seu computador
2. Acesse a pasta do projeto
3. Instale as dependências do projeto utilizando [ npm install ]
4. Para iniciar o servidor de desenvolvimento, execute o comando [ npm run dev ]

Isso fará com que o projeto seja executado em `http://localhost:3000`. A partir deste momento, você poderá ver as alterações feitas no código em tempo real.

### Homologação

Para gerar um build para ambiente de homologação, siga as etapas abaixo:

1. Utilize o comando [npm run build:hom] 
2. Selecione os arquivos da pasta out.
3. Crie um backup e substitua os arquivos atuais pelos mais recentes utilizando winscp.

Servidor homologação:
 
- Url: https://portalnew.unimeduberlandia.coop.br/
- Ip: 10.14.0.104
- Diretorio: /var/www/html/portalnew

### 📦 Produção

Para implantar o projeto em ambiente de produção, siga as etapas abaixo:

1. Utilize o comando [ npm run build ] 
2. Selecione os arquivos da pasta out.
3. Crie um backup e substitua os arquivos atuais pelos mais recentes utilizando winscp.

## 🛠️ Construído com

- **Node.js** - Ambiente de execução para JavaScript.
- **npm** - Gerenciador de pacotes para Node.js.
- **Next.js** - Framework React para renderização no lado do servidor e geração de páginas estáticas.
- **React** - Biblioteca JavaScript para construir interfaces de usuário.
- **Tailwind** - Framework CSS que ajuda a estilizar páginas web.


## 📌 Organização

# Conventional Commits

Este repositório segue a convenção de **Conventional Commits** para garantir um histórico claro e organizado.

## Padrões de Commit

- **`fix:`** Correção de bugs.
- **`feat:`** Novas funcionalidades.
- **`new:`** Adição de algo novo (ex: novos arquivos ou novas ideias).
- **`docs:`** Atualizações na documentação.
- **`style:`** Ajustes de estilo de código (sem mudança de funcionalidade).
- **`refactor:`** Refatoração de código.
- **`test:`** Adição ou correção de testes.
- **`chore:`** Tarefas gerais (ex: atualizações de dependências).
- **`delete:`** Remoções de código.

## 📌 Fluxo de trabalho com Git Flow

Este repositório segue o modelo de branching baseado em **Git Flow**, ideal para equipes que trabalham com versionamento e releases.

### 🚧 1. Criação de funcionalidades (`feature/*`)
- Base: `develop`
- Nome da branch: `feature/nome-da-feature`
- Fluxo:
  ```bash
  git checkout develop
  git pull
  git checkout -b feature/nome-da-feature
  ```
- Commits com mensagens seguindo Conventional Commits.
- Ao finalizar: **merge para `develop` via Pull Request.**

---

### 🧪 2. Integração (`develop`)
- A branch `develop` centraliza todas as funcionalidades prontas.
- Ideal para testes de integração e ambiente de homologação.

---

### 📦 3. Preparação para entrega (`release/*`)
- Base: `develop`
- Criação da branch:
  ```bash
  git checkout develop
  git pull
  git checkout -b release/vX.Y.Z
  ```
- Fazer ajustes finais, testes e preparar documentação.
- Merge final para:
  - `main` → para produção
  - `develop` → para manter sincronia
- Criar tag:
  ```bash
  git tag -a vX.Y.Z -m "Release vX.Y.Z"
  git push origin --tags
  ```

---

### 🚨 4. Correções urgentes (`hotfix/*`)
- Base: `main`
- Criar branch:
  ```bash
  git checkout main
  git pull
  git checkout -b hotfix/nome-do-hotfix
  ```
- Corrigir bug → merge para `main` e `develop` → criar tag de patch.

---

## 🌳 Branches fixas e temporárias (Git Flow)

### 🔒 Branches fixas (sempre presentes no repositório)

| Branch   | Descrição                                           |
|----------|-----------------------------------------------------|
| `main`   | Código estável em produção. Sempre pronto para deploy. |
| `develop`| Código em desenvolvimento contínuo. Base para novas features. |

Essas branches devem ser protegidas contra push direto e usadas sempre via Pull Requests.

---

### 🔁 Branches temporárias (criar, usar e excluir)

| Tipo         | Prefixo        | Finalidade                                    |
|--------------|----------------|-----------------------------------------------|
| Funcionalidade | `feature/*`    | Desenvolver novas funcionalidades.            |
| Release      | `release/*`    | Preparar versão para entrega/produção.        |
| Correção     | `hotfix/*`     | Corrigir problemas críticos em produção.      |

Essas branches são criadas a partir de `develop` (ou `main` no caso de hotfix), e devem ser **deletadas após o merge**.

---

### ✅ Resumo do fluxo:

```text
feature/* → develop → release/* → main
                             ↘
                             ↳ develop

hotfix/* → main
         ↘
         ↳ develop
```

> ⚠️ Dica: Use nomes claros nas branches, por exemplo: `feature/login-form`, `release/v1.2.0`, `hotfix/menu-responsivo`

# 📌 Versão

## Uso de Git Tag

O `git tag` é utilizado para marcar pontos específicos na história do repositório, geralmente para identificar versões de lançamento estáveis. Tags são imutáveis e úteis para criar versões claras do projeto.

## 📌 Comandos básicos

| Comando                         | Descrição                                        |
|--------------------------------|-------------------------------------------------|
| `git tag -a v1.0.0 -m "..."`     | Cria uma tag anotada com mensagem.              |
| `git tag v1.0.0`                | Cria uma tag leve.                               |
| `git tag`                       | Lista todas as tags existentes.                |
| `git push origin v1.0.0`        | Envia uma tag específica para o remoto.        |
| `git push --tags`               | Envia todas as tags para o remoto.             |
| `git tag -d v1.0.0`             | Deleta uma tag local.                           |
| `git push origin --delete v1.0.0`| Deleta uma tag do repositório remoto.          |


## ⚠️ Atenção: 
Para nosso escopo iremos fazer o processo de **acumular os commits e criar uma única tag ao final da entrega**, dessa forma sempre acione os membros da equipe para a criação da tag ao final de uma entrega.

## Contribuindo

Siga os padrões de mensagens de commit para manter o repositório organizado.


## ✒️ Autores

**Equipe dev:** 

* **Amanda Vieira Brito** - [Desenvolvedora FrontEnd](https://github.com/avbrito) 🤓🎨
* **Ana Vitoria Duarte Ferreira** - [Desenvolvedora BackEnd](https://github.com/avduartef) 🤓⚙️
* **Bruna Cristian Alves de Oliveira** - [Desenvolvedora BackEnd](https://github.com/bcoliveiraa) 🤓⚙️
* **Marcos Paulo Rodrigues Nascimento** - [Desenvolvedor FullStack](https://github.com/marcospauloudi) 🤓⚙️
* **Rodrigo Castro Vieira Gomes** - [Desenvolvedor BackEnd](https://github.com/rcgomesunimed) 🤓⚙️
* **Wesley Guimarães Santos** - [Desenvolvedor BackEnd](https://github.com/wgsantos900) 🤓⚙️


**Equipe UX e PO:** 

* **Bruno Augusto Ferreira Leal** - [Designer UX] 🤔✏️
* **Leticia Aparecida Pereira Ramos** - [Product Owner] 😊📝


### Se chegou até aqui e não achou a solução para seus problemas, é porque o README também está esperando um commit de alguém com paciência... ou um milagre!" 🤷‍♂️💻✨

## 🎁 Expressões de gratidão

* Agradecimentos especiais à equipe por todas as linhas de código escritas, cafés consumidos e memes compartilhados! ☕💻 Que a força do Git sempre esteja com vocês! 🚀

---
⌨️ com ❤️ por [Amanda Vieira Brito](https://github.com/avbrito) 😊

