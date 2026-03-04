# QOA Einstein

Portal de conhecimento para **Qualidade, Observabilidade e Arquitetura** do Hospital Israelita Albert Einstein.

Site estático construído com [Astro 5](https://astro.build) + [MDX](https://mdxjs.com), com busca full-text via [Pagefind](https://pagefind.app) e deploy automatizado para S3/CloudFront.

---

## Stack de Tecnologia

| Camada | Tecnologia |
|---|---|
| Framework | Astro 5 (SSG) |
| Conteúdo | MDX (Markdown + JSX) |
| Estilos | CSS com Design Tokens (custom properties) |
| Busca | Pagefind (client-side full-text search) |
| Fontes | DM Sans / DM Mono (Google Fonts) |
| CI/CD | GitHub Actions |
| Hosting | Amazon S3 + CloudFront CDN |
| Node | 22.0.0+ |

## Requisitos

- Node.js **22.0.0** ou superior
- npm 10+
- Git

## Instalação

```bash
git clone https://github.com/0xredvector/einstein-qoa.git
cd einstein-qoa
npm install
```

## Comandos

```bash
npm run dev          # Servidor local com hot-reload (http://localhost:4321)
npm run build        # Build de produção + índice de busca Pagefind
npm run preview      # Preview do build de produção
npm test             # Executa testes (Jest)
npm run lint:markdown       # Lint dos arquivos MDX
npm run validate:frontmatter # Valida frontmatter dos conteúdos
npm run new          # Scaffold de novo conteúdo (interativo)
npm run clean        # Remove pasta dist/
```

---

## Estrutura do Projeto

```
src/
├── _assets/
│   ├── css/          # Design tokens (tokens.css), estilos globais
│   ├── js/           # Scripts client-side (navegação, busca, analytics)
│   └── images/       # Imagens estáticas (formato 16:9, < 100KB)
├── components/       # 23 componentes Astro reutilizáveis para MDX
├── content/          # Coleções de conteúdo (artigos em .mdx)
│   ├── politicas/    # Políticas de qualidade e procedimentos
│   ├── padroes/      # Padrões técnicos e arquiteturais
│   ├── ferramentas/  # Documentação de ferramentas internas
│   ├── comunicacoes/ # Anúncios e comunicados oficiais
│   └── noticias/     # Artigos, cases e blog posts
├── layouts/          # Layouts de página (Base, Doc)
├── pages/            # Páginas e rotas estáticas
├── styles/           # Estilos específicos de layout
└── data/             # Dados globais (site.json, navigation.json)
```

---

## Como Criar um Novo Artigo

### 1. Criar o arquivo MDX

Crie um arquivo `.mdx` no diretório correspondente ao tipo de conteúdo:

```bash
# Exemplos:
src/content/politicas/minha-nova-politica.mdx
src/content/padroes/novo-padrao.mdx
src/content/noticias/titulo-da-noticia.mdx
```

O nome do arquivo deve ser em **kebab-case** (tudo minúsculo, separado por hífens).

### 2. Adicionar o Frontmatter

Todo arquivo começa com um bloco YAML entre `---`. Os campos obrigatórios são:

```yaml
---
title: "Título do Documento (50-60 caracteres)"
description: "Descrição para SEO e previews (150-160 caracteres)"
type: "policy"        # policy | standard | tool | communication | news
status: "published"   # published | draft | active | deprecated | beta
date: 2026-03-04
author: "Seu Nome"
tags: ["tag1", "tag2", "tag3"]
---
```

Para documentos ricos que controlam seu próprio layout (usando `DocHeader`), adicione:

```yaml
richDocument: true
```

### 3. Importar componentes

Após o frontmatter, importe os componentes que vai utilizar:

```mdx
import DocHeader from '../../components/DocHeader.astro';
import Section from '../../components/Section.astro';
import Alert from '../../components/Alert.astro';
```

### 4. Montar o conteúdo

Use Markdown normal combinado com os componentes importados:

```mdx
<DocHeader
  badge="Policy v1.0"
  title="Título do Documento"
  subtitle="Subtítulo opcional"
  meta={[
    { label: "Owner", value: "Time QOA" },
    { label: "Última Revisão", value: "2026-03-04" },
    { label: "Status", value: "Ativo" }
  ]}
/>

<Section id="proposito" number="1" title="Propósito">
  Texto explicando o propósito deste documento.
</Section>

<Alert variant="warning" title="Atenção">
  Informação importante que precisa de destaque.
</Alert>
```

### 5. Testar localmente

```bash
npm run dev
# Acesse http://localhost:4321 e navegue até o novo conteúdo
```

### 6. Validar e publicar

```bash
npm run validate:frontmatter   # Verifica campos obrigatórios
npm run lint:markdown           # Verifica formatação
npm run build                   # Garante que o build passa
```

---

## Biblioteca de Componentes

O site possui **23 componentes** reutilizáveis para criar documentos ricos em MDX. Abaixo, um resumo de cada um.

### Estrutura e Navegação

| Componente | Uso | Props principais |
|---|---|---|
| `DocHeader` | Cabeçalho profissional de documento | `badge`, `title`, `subtitle`, `meta[]` |
| `Toc` | Sumário com links internos | `items[]` (id + label) |
| `Section` | Seção com título H2 e âncora | `id`, `number`, `title` |

### Alertas e Destaques

| Componente | Uso | Props principais |
|---|---|---|
| `Alert` | Alertas contextuais | `variant` (info/success/warning/critical), `title`, `icon` |
| `Badge` | Etiqueta inline pequena | `variant` (mandatory/beta/deprecated...) |
| `Tag` | Etiqueta standalone maior | `variant` (mandatory/progressive/conditional/recommended) |
| `Justification` | Caixa de justificativa/razão | `title` + slot |

### Métricas e Dados

| Componente | Uso | Props principais |
|---|---|---|
| `KpiGrid` | Grid responsivo de métricas | Wrapper para `KpiCard` |
| `KpiCard` | Card individual de métrica | `value`, `label`, `sub`, `variant` |
| `RiskMatrix` | Matriz de risco | Wrapper para `RiskCell` |
| `RiskCell` | Célula da matriz | `variant` (critical/high/medium/low/header), `title` |

### Fluxos e Processos

| Componente | Uso | Props principais |
|---|---|---|
| `Flow` | Container de fluxo de processo | `title` + slot |
| `FlowStep` | Etapa do fluxo | `label`, `detail`, `highlight`, `color` |
| `FlowArrow` | Seta entre etapas | Sem props |
| `Timeline` | Linha do tempo | Wrapper para `TimelineItem` |
| `TimelineItem` | Item da timeline | `phase`, `title`, `period`, `goal` |

### Comparações e Exemplos

| Componente | Uso | Props principais |
|---|---|---|
| `Comparison` | Container de comparação | Wrapper para `ComparisonCard` |
| `ComparisonCard` | Card bom vs ruim | `variant` (good/bad), `label` |
| `ExampleCode` | Bloco de código com título | `title` + slot (code fence) |
| `Tree` | Árvore de diretórios | Slot com texto formatado |

### Interativos

| Componente | Uso | Props principais |
|---|---|---|
| `FaqItem` | Pergunta e resposta (accordion) | `question` + slot |
| `GroupSection` | Agrupamento temático | `icon`, `title`, `question`, `variant` |
| `Icon` | Ícone SVG (Lucide) | `name`, `size`, `color` |

---

## Exemplo Completo de Artigo

```mdx
---
title: "Padrão de Cobertura de Testes"
description: "Diretrizes para cobertura mínima de testes automatizados em aplicações críticas"
type: "standard"
status: "active"
date: 2026-03-04
author: "Time QOA"
tags: ["testes", "qualidade", "automação"]
richDocument: true
---

import DocHeader from '../../components/DocHeader.astro';
import Toc from '../../components/Toc.astro';
import Section from '../../components/Section.astro';
import Alert from '../../components/Alert.astro';
import KpiGrid from '../../components/KpiGrid.astro';
import KpiCard from '../../components/KpiCard.astro';
import Comparison from '../../components/Comparison.astro';
import ComparisonCard from '../../components/ComparisonCard.astro';
import FaqItem from '../../components/FaqItem.astro';

<DocHeader
  badge="Standard v1.0"
  title="Padrão de Cobertura de Testes"
  subtitle="Cobertura mínima para aplicações críticas"
  meta={[
    { label: "Owner", value: "Time QOA" },
    { label: "Revisão", value: "2026-03-04" },
    { label: "Status", value: "Ativo" }
  ]}
/>

<Toc items={[
  { id: "objetivo", label: "Objetivo" },
  { id: "metricas", label: "Métricas" },
  { id: "exemplos", label: "Exemplos" },
  { id: "faq", label: "FAQ" }
]} />

<Section id="objetivo" number="1" title="Objetivo">
  Definir os níveis mínimos de cobertura de testes para garantir
  a qualidade das entregas em produção.
</Section>

<Alert variant="info" title="Dica">
  Use a flag --coverage no Jest para verificar a cobertura local.
</Alert>

<Section id="metricas" number="2" title="Métricas">

<KpiGrid>
  <KpiCard value="80%" label="Cobertura Geral" sub="Mínimo obrigatório" variant="ok" />
  <KpiCard value="90%" label="Paths Críticos" sub="Fluxos de pagamento" variant="critical" />
</KpiGrid>

</Section>

<Section id="exemplos" number="3" title="Exemplos">

<Comparison>
  <ComparisonCard variant="good" label="Correto">
    Testes parametrizados com dados variados.
  </ComparisonCard>
  <ComparisonCard variant="bad" label="Evitar">
    Testes com valores hardcoded sem variação.
  </ComparisonCard>
</Comparison>

</Section>

<Section id="faq" number="4" title="FAQ">

<FaqItem question="Qual ferramenta usar para medir cobertura?">
  Jest com flag --coverage para projetos JavaScript/TypeScript.
</FaqItem>

</Section>
```

---

## Design Tokens

As cores e espaçamentos do projeto estão definidos em `src/_assets/css/tokens.css`:

| Token | Valor | Uso |
|---|---|---|
| `--color-primary-blue` | `#00539A` | Cor principal da marca Einstein |
| `--color-accent-blue` | `#0096D2` | Cor secundária, links |
| `--color-bright-cyan` | `#00DBFF` | Destaques e acentos |
| `--color-neutral-gray` | `#333333` | Texto principal |
| `--color-light-gray` | `#F5F5F5` | Fundos claros |
| `--border-radius-base` | `12px` | Arredondamento padrão |
| `--font-family-dm-sans` | DM Sans | Fonte de corpo e títulos |
| `--font-family-dm-mono` | DM Mono | Fonte monoespacada (código) |

---

## CI/CD

O projeto usa GitHub Actions com três workflows:

- **build-deploy.yml** — Build do Astro + Pagefind, deploy para S3 com invalidação de cache CloudFront
- **content-validation.yml** — Validação de frontmatter e lint de markdown em PRs
- **accessibility.yml** — Auditoria de acessibilidade com Lighthouse

## Convenções de Commit

```
Add: Policy - Título do documento
Update: Atualização na documentação de ferramentas
Fix: Correção de typo na política de testes
Remove: Remoção de conteúdo depreciado
```

## Convenções de Nomenclatura

| Tipo | Padrão | Exemplo |
|---|---|---|
| Políticas | `politica-*.mdx` | `politica-qualidade-testes.mdx` |
| Padrões | `padrao-*.mdx` ou descritivo | `estrategia-tagging.mdx` |
| Ferramentas | `guia-uso-*.mdx` | `guia-uso-jenkins.mdx` |
| Comunicações | `anuncio-*.mdx` | `anuncio-manutencao.mdx` |
| Notícias | descritivo | `sucesso-implementacao-qa.mdx` |

---

## Troubleshooting

**Build falhando:**

```bash
npm run clean && rm -rf node_modules package-lock.json && npm install && npm run build
```

**Conteúdo não aparece no site:** verifique se `status` é `"published"` ou `"active"` no frontmatter (não `"draft"`).

**Busca não funciona:** a indexação do Pagefind acontece durante o `npm run build`. Execute o build e verifique se `dist/.pagefind/` foi gerado.

**Componente não renderiza:** confirme que o import está correto e que as props obrigatórias foram passadas.

---

## Licença

Uso interno — Hospital Israelita Albert Einstein, Time QOA.
