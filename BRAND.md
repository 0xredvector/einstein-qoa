# Brand Configuration — QOA Einstein

> This file is the **single source of truth** for branding across all plugins and artifacts.
> Every skill that generates documents, presentations, spreadsheets, or diagrams **MUST** read this file first.

---

## Organization

- **Name**: Hospital Israelita Albert Einstein — QOA
- **Full Name**: Qualidade, Observabilidade e Arquitetura
- **Sector**: Saúde e Educação
- **Division**: Tecnologia / Transformação Digital
- **Site**: https://qoa.einstein.br
- **Language**: Português (Brasil) — pt-BR

---

## Color Palette

### Primary Brand Colors

| Role | Hex | RGB | CSS Token | Usage |
|------|-----|-----|-----------|-------|
| Primary Blue | `#00539A` | 0, 83, 154 | `--color-primary-blue` | Headers, títulos, botões primários, barras de navegação |
| Accent Blue | `#0096D2` | 0, 150, 210 | `--color-accent-blue` | Links, destaques, elementos interativos, ícones |
| Bright Cyan | `#00DBFF` | 0, 219, 255 | `--color-bright-cyan` | Acentos visuais, gradientes, elementos decorativos |

### Extended Palette

| Role | Hex | RGB | CSS Token | Usage |
|------|-----|-----|-----------|-------|
| Accent Green | `#059669` | 5, 150, 105 | `--color-accent-green` | Sucesso, aprovado, métricas positivas |
| Accent Orange | `#D97706` | 217, 119, 6 | `--color-accent-orange` | Alertas, atenção, revisão pendente |
| Accent Red | `#DC2626` | 220, 38, 38 | `--color-accent-red` | Crítico, bloqueadores, erros |
| Accent Purple | `#7C3AED` | 124, 58, 237 | `--color-accent-purple` | Destaques especiais, badges premium |

### Semantic Colors

| Role | Hex | RGB | CSS Token | Usage |
|------|-----|-----|-----------|-------|
| Success | `#059669` | 5, 150, 105 | `--color-success` | Confirmações, status ativo, métricas OK |
| Warning | `#D97706` | 217, 119, 6 | `--color-warning` | Alertas, itens que precisam de atenção |
| Critical | `#DC2626` | 220, 38, 38 | `--color-critical` | Erros, bloqueadores, urgência |
| Info | `#0096D2` | 0, 150, 210 | `--color-info` | Informacional, dicas, contexto |

### Text & UI Colors

| Role | Hex | RGB | CSS Token | Usage |
|------|-----|-----|-----------|-------|
| Text Primary | `#241F21` | 36, 31, 33 | `--color-text-primary` | Corpo de texto, parágrafos |
| Text Secondary | `#545454` | 84, 84, 84 | `--color-text-secondary` | Legendas, metadata, subtexto |
| Text Muted | `#8A8D91` | 138, 141, 145 | `--color-text-muted` | Placeholders, texto desabilitado |
| Border | `#DDE1E6` | 221, 225, 230 | `--color-border` | Bordas, divisores, separadores |
| Surface | `#F5F7FA` | 245, 247, 250 | `--color-surface` | Fundos de slides/páginas, backgrounds |
| Surface Alt | `#EDF0F5` | 237, 240, 245 | `--color-surface-2` | Linhas alternadas, seções de destaque |
| White | `#FFFFFF` | 255, 255, 255 | `--color-white` | Texto sobre fundo escuro, superfícies |

### Gradient

O gradiente institucional é usado em headers, seções hero e fundos de destaque:

```
linear-gradient(135deg, #00539A 0%, #0096D2 50%, #00DBFF 100%)
```

Para fundos escuros (footer, seções escuras):

```
linear-gradient(135deg, #1a2332 0%, #0d1520 100%)
```

---

## Typography

### Fontes

| Fonte | Família | Uso |
|-------|---------|-----|
| **DM Sans** | Sans-serif | Corpo de texto, títulos, UI geral |
| **DM Mono** | Monospace | Código, exemplos técnicos, terminal |

Fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` (DM Sans) / `'Courier New', monospace` (DM Mono)

### Escala Tipográfica — Web (CSS)

| Elemento | Tamanho | Peso | Line Height | CSS Token |
|----------|---------|------|-------------|-----------|
| Display / Hero | 3rem (48px) | Bold 700 | 1.25 | `--font-size-5xl` |
| Title (H1) | 2.25rem (36px) | Bold 700 | 1.25 | `--font-size-4xl` |
| Heading 2 | 1.875rem (30px) | Semibold 600 | 1.25 | `--font-size-3xl` |
| Heading 3 | 1.5rem (24px) | Semibold 600 | 1.25 | `--font-size-2xl` |
| Heading 4 | 1.25rem (20px) | Medium 500 | 1.5 | `--font-size-xl` |
| Body Large | 1.125rem (18px) | Regular 400 | 1.75 | `--font-size-lg` |
| Body | 1rem (16px) | Regular 400 | 1.75 | `--font-size-base` |
| Small / Caption | 0.875rem (14px) | Regular 400 | 1.5 | `--font-size-sm` |
| Extra Small | 0.75rem (12px) | Regular 400 | 1.5 | `--font-size-xs` |

### Escala Tipográfica — Documentos (PPTX, DOCX, XLSX)

Como DM Sans pode não estar instalada no sistema do usuário, documentos Office usam **Calibri** como equivalente seguro.

| Elemento | Fonte | Tamanho | Peso |
|----------|-------|---------|------|
| Título de slide / capa | Calibri | 32pt | Bold |
| Subtítulo | Calibri | 20pt | Regular |
| Heading 1 | Calibri | 18pt | Bold |
| Heading 2 | Calibri | 14pt | Bold |
| Body | Calibri | 12pt | Regular |
| Caption / Rodapé | Calibri | 9pt | Regular |
| Código | Consolas | 10pt | Regular |

---

## Spacing Scale

| Token | Valor | Pixels | Uso |
|-------|-------|--------|-----|
| `--spacing-1` | 0.25rem | 4px | Espaçamento mínimo, gaps internos |
| `--spacing-2` | 0.5rem | 8px | Padding interno de badges/tags |
| `--spacing-3` | 0.75rem | 12px | Gap entre elementos inline |
| `--spacing-4` | 1rem | 16px | Padding padrão de componentes |
| `--spacing-6` | 1.5rem | 24px | Gap entre seções menores |
| `--spacing-8` | 2rem | 32px | Margin entre blocos |
| `--spacing-12` | 3rem | 48px | Padding de seções principais |
| `--spacing-16` | 4rem | 64px | Espaçamento hero/header |

---

## Borders & Shadows

| Token | Valor | Uso |
|-------|-------|-----|
| `--border-radius-sm` | 4px | Badges, tags, elementos pequenos |
| `--border-radius-base` | 8px | Cards, alertas, inputs |
| `--border-radius-lg` | 12px | Containers, modais, seções |
| `--border-radius-xl` | 16px | Hero cards, elementos de destaque |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.1)` | Cards sutis, elevação leve |
| `--shadow-base` | `0 4px 6px rgba(0,0,0,0.1)` | Cards padrão, dropdowns |
| `--shadow-md` | `0 10px 15px rgba(0,0,0,0.1)` | Modais, elementos flutuantes |

---

## Document Standards

### Presentations (PPTX)

- **Aspect ratio**: 16:9 (widescreen)
- **Max bullets per slide**: 5
- **Slide numbers**: Sempre visíveis, canto inferior direito
- **Footer**: "Hospital Israelita Albert Einstein — QOA | Confidencial"
- **Title slide**:
  - Background: gradiente Primary Blue → Accent Blue
  - Texto: branco
  - Título centralizado, subtítulo abaixo
  - Data no canto inferior direito
- **Section divider slides**:
  - Background: Primary Blue sólido (`#00539A`)
  - Texto: branco, centralizado
- **Content slides**:
  - Background: Surface (`#F5F7FA`) ou White (`#FFFFFF`)
  - Títulos: Primary Blue
  - Corpo: Text Primary
- **Charts/Gráficos**:
  - Sequência de cores: Primary Blue → Accent Blue → Bright Cyan → Accent Green → Accent Orange → Accent Purple
  - Gridlines: Border (`#DDE1E6`)
  - Labels: Text Secondary
- **Ícones**: Usar Lucide Icons como referência de estilo (outline, stroke 2px)

### Spreadsheets (XLSX)

- **Header row**: Background Primary Blue (`#00539A`), texto branco, Bold
- **Alternating rows**: White (`#FFFFFF`) / Surface (`#F5F7FA`)
- **Data validation highlights**: Warning (`#D97706`) com fundo amarelo claro
- **Totals row**: Bold, borda superior dupla, background Surface Alt (`#EDF0F5`)
- **Negative values**: Critical Red (`#DC2626`)
- **Positive trends**: Success Green (`#059669`)
- **Column width**: Auto-fit com mínimo 12 caracteres
- **Freeze panes**: Sempre congelar header row
- **Número format**: Separador de milhar com ponto, decimal com vírgula (padrão pt-BR)
- **Date format**: DD/MM/YYYY

### Word Documents (DOCX)

- **Header**: "Hospital Israelita Albert Einstein — QOA" + classificação do documento
- **Footer**: Número de página (Página X de Y), data de geração, "Confidencial"
- **Margins**: 2.5cm em todos os lados
- **Title**: 24pt Bold, Primary Blue
- **Headings**: Primary Blue, hierarquia clara (H1 18pt → H2 14pt → H3 12pt)
- **Body**: 12pt Regular, Text Primary, espaçamento 1.15
- **Links**: Accent Blue, sublinhado
- **Tables**: Header com Primary Blue background, bordas Border color
- **Code blocks**: Background Surface, Consolas 10pt, borda Border

### Diagrams (Mermaid / Draw.io / SVG)

- **Node fill (primary)**: Primary Blue (`#00539A`)
- **Node fill (secondary)**: Accent Blue (`#0096D2`)
- **Node fill (highlight)**: Bright Cyan (`#00DBFF`)
- **Node text on dark bg**: White (`#FFFFFF`)
- **Node text on light bg**: Text Primary (`#241F21`)
- **Connector lines**: Border (`#DDE1E6`) ou Text Secondary (`#545454`)
- **Arrow heads**: Text Primary
- **Decision diamonds**: Accent Orange (`#D97706`)
- **Success/End nodes**: Accent Green (`#059669`)
- **Error/Fail nodes**: Accent Red (`#DC2626`)
- **Background**: White ou Surface
- **Font**: DM Sans 12px (web) ou Calibri 11pt (exportação)
- **Border radius**: 8px para retângulos, 16px para containers

---

## Logo & Identity

- **Logo text**: "**QOA** Einstein" (QOA em bold, Einstein em regular)
- **Logo usage**: Canto superior esquerdo em documentos, slides de título
- **Mínimo de espaço livre**: 16px ao redor do logo
- **Não alterar**: proporções, cores, ou adicionar efeitos ao logo
- **Favicon**: Reservado para versão futura (design Venn diagram Q/O/A aprovado mas não ativo)

---

## Classification Labels

Todos os artefatos gerados **devem** incluir uma das seguintes classificações:

| Label | Cor | Uso |
|-------|-----|-----|
| **Público** | Accent Green `#059669` | Pode ser compartilhado externamente |
| **Interno** | Accent Blue `#0096D2` | Uso organizacional apenas |
| **Confidencial** | Accent Orange `#D97706` | Distribuição restrita |
| **Restrito** | Accent Red `#DC2626` | Apenas destinatários nomeados |

Posição padrão: canto superior direito do documento ou rodapé do slide.

---

## Compliance Footer

Quando o artefato gerado envolver dados de pacientes, sistemas de saúde ou registros educacionais, **obrigatoriamente** incluir:

> "Este documento pode conter informações protegidas por LGPD (Lei 13.709/2018) e/ou HIPAA. Distribuição restrita conforme classificação indicada."

Posição: rodapé do documento, última linha, em itálico, tamanho Caption.

---

## Image Guidelines

- **Aspect ratio**: 16:9 para imagens hero e banners
- **Formato**: JPEG para fotos, PNG para gráficos com transparência, SVG para ícones
- **Peso máximo**: 100KB por imagem (comprimir com TinyPNG)
- **Alt text**: Sempre obrigatório, descritivo e em português
- **Lazy loading**: `loading="lazy"` em todas as imagens abaixo da dobra

---

## Tone of Voice

- **Tom**: Profissional, técnico e acessível
- **Pessoa**: Primeira pessoa do plural ("nós", "nossa equipe")
- **Evitar**: Jargões desnecessários, linguagem informal excessiva, anglicismos quando há equivalente em português
- **Preferir**: Frases objetivas, voz ativa, parágrafos curtos
- **Termos técnicos**: Manter em inglês quando são padrão da indústria (API, deploy, pipeline, SRE, etc.)
- **Idioma padrão**: Português (Brasil) — usar outro idioma apenas quando explicitamente solicitado

---

## Instructions for Skills

1. **Leia este arquivo ANTES de gerar qualquer artefato** (PPTX, XLSX, DOCX, PDF, SVG, HTML)
2. **Aplique as cores da paleta** — nunca use cores arbitrárias
3. **Aplique os padrões tipográficos** conforme o tipo de artefato (web vs documento)
4. **Inclua label de classificação** em todo documento gerado
5. **Inclua compliance footer** quando o conteúdo envolver dados de saúde ou educação
6. **Use Português (Brasil)** para todo conteúdo gerado, exceto quando explicitamente solicitado
7. **Respeite o gradiente institucional** em slides de título e seções de destaque
8. **Use a sequência de cores para gráficos** na ordem definida neste documento
9. **Mantenha consistência** entre todos os artefatos — um PPTX e um DOCX sobre o mesmo tema devem ter a mesma identidade visual
10. **Nunca altere o logo** — use "QOA Einstein" em texto quando logo gráfico não estiver disponível
