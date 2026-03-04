# GitHub Copilot Instructions - Einstein QOA Website

Guide GitHub Copilot in generating high-quality content and code that aligns with project standards, brand guidelines, and accessibility requirements for the Einstein QOA portal.

**Important**: These instructions supplement the main CLAUDE.md file. Always reference CLAUDE.md for complete component documentation and detailed examples.

## Language & Tone

- **Always use Brazilian Portuguese (PT-BR)** for website content
- **Professional, clear, accessible tone** suitable for hospital staff
- **Avoid jargon** unless necessary, always provide context
- **Action-oriented language** in procedures and guidelines

## Content Generation Standards

### Frontmatter Requirements

Every content file MUST include complete YAML frontmatter:

```yaml
---
title: "Keep to 50-60 characters max"
description: "150-160 character description for SEO and social sharing. Include primary keyword and benefit."
type: "policy|standard|tool|communication|news"
status: "published|draft|active|deprecated|beta"
date: YYYY-MM-DD
author: "Author Name"  # For news/communication; optional for policy/standard
tags: ["tag1", "tag2", "tag3"]  # Minimum 3 tags
---
```

**Type-specific required fields:**

Policy:
```yaml
version: "1.0"
effectiveDate: YYYY-MM-DD
lastReviewed: YYYY-MM-DD
nextReviewDate: YYYY-MM-DD
owner: "Department Name"
status: "active|draft|deprecated"
```

Standard:
```yaml
version: "1.0"
status: "active|beta|draft|deprecated"
```

Tool:
```yaml
status: "active|beta|draft|deprecated"
```

Communication:
```yaml
date: YYYY-MM-DD
status: "published|draft|archived"
```

News:
```yaml
author: "Author Name"
date: YYYY-MM-DD
status: "published|draft|archived"
```

### Content Structure

**Always follow this structure** for consistency:

1. **Frontmatter** - Complete YAML metadata
2. **Component Imports** - All components used (at top)
3. **DocHeader** - Professional introduction with metadata
4. **Table of Contents** - Links to major sections (for docs >1500 words)
5. **Main Content** - Organized with `<Section>` components
6. **FAQ** - Common questions (if applicable)
7. **Footer** - Version, update date, contact info

### Heading Hierarchy

- **ONE H1 per page** (usually in DocHeader title)
- **H2 for sections** (use `<Section number="1" title="...">`)
- **H3 for subsections** - use standard markdown `###`
- **Never skip levels** - must be H1 → H2 → H3, never H1 → H3

### Lists and Formatting

**Bullet Lists** - Use for unordered items
```markdown
- Item 1
- Item 2
- Item 3
```

**Numbered Lists** - Use for steps or sequences
```markdown
1. First step
2. Second step
3. Third step
```

**Bold** - Emphasize key terms: **important term**
**Italic** - Provide context: *optional field*
**Code** - Technical terms: `variable_name`, `function()`

### Code Blocks

**ALWAYS include language identifier**:

```markdown
// Good - language specified
javascript
function example() {
  console.log("Hello");
}
```

```markdown
// Bad - no language
function example() {
  console.log("Hello");
}
```

**Supported Languages**: javascript, python, bash, json, yaml, html, css, sql, typescript, tsx, jsx, java, csharp, php, ruby, go, rust, and others.

### Tables

Use markdown tables for structured data:

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |
```

## Component Usage Guidelines

### Import Statement Format

Place ALL imports at top of file after frontmatter:

```mdx
import Alert from '../components/Alert.astro';
import DocHeader from '../components/DocHeader.astro';
import KpiGrid from '../components/KpiGrid.astro';
import KpiCard from '../components/KpiCard.astro';
// ... other imports
```

### Component Usage Examples

**DocHeader** - Start every page:
```mdx
<DocHeader
  badge="Policy v1.0"
  title="Your Page Title"
  subtitle="Subtitle or tagline"
  meta={[
    { label: "Owner", value: "Team Name" },
    { label: "Last Review", value: "2024-02-27" }
  ]}
/>
```

**Toc** - For multi-section documents:
```mdx
<Toc items={[
  { id: "section-1", label: "Section Title 1" },
  { id: "section-2", label: "Section Title 2" }
]} />
```

**Alert** - For important information:
```mdx
<Alert variant="warning" title="Important">
  Your message here
</Alert>
```

**Section** - Main content organization:
```mdx
<Section id="my-section" number="1" title="Section Title">
  Content here
</Section>
```

**KpiGrid + KpiCard** - Display metrics:
```mdx
<KpiGrid>
  <KpiCard value="95%" label="Success Rate" variant="ok" />
  <KpiCard value="5" label="Issues" variant="critical" />
</KpiGrid>
```

**GroupSection** - Thematic grouping:
```mdx
<GroupSection
  icon="🔐"
  title="Security"
  variant="security"
>
  Content with requirements
</GroupSection>
```

**Comparison + ComparisonCard** - Best vs. bad practices:
```mdx
<Comparison>
  <ComparisonCard variant="good" label="Best Practice">
    Good code/approach here
  </ComparisonCard>
  <ComparisonCard variant="bad" label="Anti-Pattern">
    Bad code/approach here
  </ComparisonCard>
</Comparison>
```

**Timeline + TimelineItem** - Phases and roadmap:
```mdx
<Timeline>
  <TimelineItem phase={1} title="Phase 1" period="Q1 2024">
    Details
  </TimelineItem>
</Timeline>
```

**FaqItem** - Q&A sections:
```mdx
<FaqItem question="Your question?">
  Your detailed answer here
</FaqItem>
```

See CLAUDE.md "Component Library Reference" section for complete documentation of all 22 components with full prop details and usage patterns.

## Brand & Design Standards

### Color Usage

**Reference CSS custom properties, never hardcode hex values in content descriptions**:

✓ Correct: "Use the primary blue for headers" → rendered with `var(--color-primary-blue)`
✗ Wrong: "Use #00539A for headers"

**Brand Colors**:
- Primary Blue: `var(--color-primary-blue)` = `#00539A` (headings, primary actions)
- Accent Blue: `var(--color-accent-blue)` = `#0096D2` (secondary actions, borders)
- Bright Cyan: `var(--color-bright-cyan)` = `#00DBFF` (highlights, emphasis)
- Success Green: `#388e3c` (positive states, approved)
- Warning Orange: `#f57c00` (caution, requires review)
- Critical Red: `#d32f2f` (errors, critical attention)

**Semantic Usage**:
- Critical alerts: red (#d32f2f)
- Warnings: orange (#f57c00)
- Success: green (#388e3c)
- Information: blue (#1976d2)
- Neutral: gray (#666)

### Typography

**Font Families**:
- Body text: DM Sans (system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)
- Headings: DM Sans (same as body, size difference provides hierarchy)
- Code/mono: DM Mono (fallback: 'Courier New', monospace)

**Font Sizes** (approximate):
- H1: 2.5rem (40px)
- H2: 1.75rem (28px)
- H3: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)
- Tiny: 0.75rem (12px)

**Font Weights**:
- Regular: 400 (body text)
- Medium: 500 (emphasis)
- Bold: 700 (headings, strong emphasis)

### Spacing

**Standard spacing scale** (use multiples):
- 0.25rem (4px)
- 0.5rem (8px)
- 1rem (16px)
- 1.5rem (24px)
- 2rem (32px)
- 3rem (48px)

**Common patterns**:
- Section padding: 1.5rem to 2rem
- Component gaps: 1rem to 1.5rem
- Margin between sections: 2.5rem
- Border radius: Always use `var(--border-radius-base)` = 12px

### Images & Media

**Images**:
- Aspect Ratio: 16:9 (optimal for web, featured images, hero sections)
- Path: Store in `src/_assets/images/`, reference as `/images/filename.jpg`
- Format: JPEG for photos, PNG for graphics with transparency
- Optimization: Compress with TinyPNG (target <100KB per image)
- Lazy Loading: Always use `loading="lazy"` attribute

**Alt Text** (REQUIRED for accessibility):
- Descriptive, specific, 1-2 sentences max
- Include relevant keywords naturally
- Example: `alt="QA team reviewing quality metrics on dashboard during daily standup"`
- For decorative images: `alt=""`

## Accessibility (WCAG AA Compliance)

### Semantic HTML

**ALWAYS use semantic elements**:
- `<main>` for primary content area
- `<article>` for content pieces
- `<section>` for content sections
- `<nav>` for navigation
- `<header>` for page/section headers
- `<footer>` for page/section footers
- `<button>` for buttons (not `<a>` or `<div>`)
- `<label>` for form inputs

### Heading Hierarchy

- One H1 per page (requirement, not suggestion)
- Sequential order: no skipping (H1 → H2 → H3, never H1 → H3)
- Use for structure, not styling
- Never use for visual emphasis

### Link Accessibility

**Link text must be descriptive**:
- ✓ Good: `[Read the testing standards]`
- ✗ Bad: `[Click here]`
- ✗ Bad: `[More info]`

**External links indicate clearly**:
```markdown
[Open external resource (new window)](https://example.com){target="_blank"}
```

**No generic link text**:
- ✗ "Read more" (where?)
- ✗ "Learn about it" (what?)
- ✓ "Learn about our testing standards" (specific and descriptive)

### Image Accessibility

**Every image requires alt text** (with rare decorative exceptions):
- Describe content and purpose
- Avoid redundancy ("image of..." not needed)
- Include relevant keywords
- Example: `alt="Risk matrix showing probability vs impact assessment"`

**Decorative images only**:
```markdown
![](/images/decorative-line.jpg)  {alt=""}
```

### Color Contrast

**Text-to-background contrast ratios** (WCAG AA minimum):
- Normal text: 4.5:1
- Large text (18pt+): 3:1
- Graphics/UI components: 3:1

**Test contrast** using tools like WebAIM Contrast Checker

### Form Accessibility

Every input needs associated label:
```html
<label for="search">Search content:</label>
<input id="search" type="text">
```

In Astro components:
```astro
<label for="search">Pesquisar:</label>
<input id="search" type="text">
```

### Lists

**Always use proper HTML list elements**:
```markdown
// Unordered list
- Item 1
- Item 2

// Ordered list
1. Step one
2. Step two
```

Markdown automatically converts to `<ul>`, `<ol>`, `<li>` elements.

## SEO Standards

### Page Titles

**Length**: 50-60 characters (Google shows ~60 chars)
**Include**: Primary keyword, clear value proposition
**Examples**:
- "Padrão de Testes Automatizados em QA" (42 chars) ✓
- "Política de Qualidade e Segurança" (35 chars) ✓
- "Implementação de Testes Automatizados com Cobertura Mínima de 80% em Todas as Camadas de Aplicação" (99 chars) ✗

### Meta Descriptions

**Length**: 150-160 characters (Google displays ~155 chars)
**Structure**: Hook + keyword + benefit + action
**Example**:
"Entenda os padrões obrigatórios para testes automatizados. Guia completo com exemplos, ferramentas e melhores práticas para aumentar a cobertura de QA."

### Keywords & Tags

**Minimum tags per content**: 3 tags
**Tag format**: lowercase, hyphen-separated for multiple words
**Relevant tags**: Should describe content accurately and be searchable

**Common tags**:
- By type: policy, standard, tool, communication, news
- By domain: qa, testing, architecture, quality, observability
- By function: automation, documentation, guidelines, procedures
- By audience: developers, testers, architects, managers

## Code Generation Standards

### JavaScript

- **Framework**: Vanilla JavaScript (ES6+), no jQuery
- **Accessibility**: Include ARIA labels, keyboard navigation
- **Comments**: Explain complex logic and important functions
- **Example**:
```javascript
// Navigation toggle - manages menu visibility and accessibility
function initializeNavigation() {
  const hamburger = document.querySelector('[aria-label="Toggle menu"]');
  const menu = document.querySelector('[role="navigation"]');

  hamburger?.addEventListener('click', () => {
    menu.toggleAttribute('hidden');
    hamburger.setAttribute('aria-expanded', !menu.hidden);
  });
}
```

### CSS

- **Use CSS custom properties** from tokens.css
- **BEM naming convention**: `.block__element--modifier`
- **Mobile-first approach**: Base styles first, media queries for larger screens
- **Reference variables, not hardcoded values**:
```css
.card {
  background: var(--color-white);
  border: 2px solid var(--color-primary-blue);
  border-radius: var(--border-radius-base);
  padding: var(--spacing-4);
  font-family: var(--font-family-dm-sans);
}
```

### Astro Components

- **Props with types**: Use TypeScript interfaces
- **Accessible markup**: Semantic HTML, ARIA where needed
- **Style scoping**: Use `<style>` with component-scoped CSS
- **Example**:
```astro
---
interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<div class={`card card-${variant}`} role="article">
  <h2>{title}</h2>
  <slot />
</div>

<style>
  .card {
    background: var(--color-white);
    border-radius: var(--border-radius-base);
  }
</style>
```

### MDX-Specific

- **Mixing markdown and JSX**: Natural and clean
- **Import components at top** after frontmatter
- **Props use curly braces**: `<Component prop={value}>`
- **Slots work naturally**: Content between opening/closing tags
- **Example**:
```mdx
import Alert from '../components/Alert.astro';

<Alert variant="info" title="Tip">
  You can mix **markdown** with <Component /> seamlessly
</Alert>
```

## Testing & Validation

### Before Committing

1. **Validate frontmatter**:
   ```bash
   npm run validate:frontmatter
   ```

2. **Lint markdown**:
   ```bash
   npm run lint:markdown
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

4. **Test locally**:
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Verify rendering and links
   ```

### Performance Checklist

- [ ] Images optimized (compressed, <100KB each)
- [ ] No render-blocking scripts
- [ ] Lazy loading on images (`loading="lazy"`)
- [ ] Minimal custom CSS (use component defaults)
- [ ] No unused imports
- [ ] Content well-organized (not too long single page)

### Accessibility Checklist

- [ ] All images have alt text
- [ ] One H1 per page
- [ ] Heading hierarchy correct (no skipped levels)
- [ ] Color contrast meets WCAG AA
- [ ] Links are descriptive
- [ ] Form labels present (if applicable)
- [ ] Components use semantic HTML

## File Naming

**Markdown/MDX Content**:
- Pattern: `kebab-case-title.mdx`
- Location: `src/content/[type]/`
- Examples:
  - `src/content/policies/politica-qualidade-testes.mdx`
  - `src/content/standards/padrao-automacao-qa.mdx`
  - `src/content/tools/guia-jenkins.mdx`

**Images**:
- Pattern: `kebab-case-description.{jpg|png}`
- Location: `src/_assets/images/`
- Example: `dashboard-metrics-chart.jpg`

**JavaScript**:
- Pattern: `camelCaseFunctionality.js`
- Location: `src/_assets/js/`
- Example: `navigationToggle.js`

## Common Patterns

### Policy Document Structure

```mdx
<DocHeader badge="Policy v1.0" title="Policy Title" ... />
<Toc items={[...]} />
<Section number="1" title="Propósito">...</Section>
<Section number="2" title="Escopo">...</Section>
<Section number="3" title="Procedimentos">...</Section>
<Section number="4" title="Requisitos">...</Section>
<Section number="5" title="Exceções">...</Section>
<Section number="6" title="Referências">...</Section>
```

### Standard Document Structure

```mdx
<DocHeader badge="Standard v1.0" title="Standard Title" ... />
<Toc items={[...]} />
<Section number="1" title="Definição">...</Section>
<Section number="2" title="Objetivos">
  <KpiGrid>...</KpiGrid>
</Section>
<Section number="3" title="Especificações">
  <Comparison>...</Comparison>
</Section>
<Section number="4" title="Exemplos">
  <ExampleCode>...</ExampleCode>
</Section>
```

### Communication Structure

```mdx
<DocHeader badge="Announcement" title="Announcement Title" ... />
<Alert variant="info" title="Important">Message</Alert>
<Section number="1" title="Destaques">
  <KpiGrid>...</KpiGrid>
</Section>
<Section number="2" title="Detalhes">...</Section>
<Section number="3" title="Próximos Passos">...</Section>
```

## Quick Reference

| Aspect | Standard | Notes |
|--------|----------|-------|
| Language | PT-BR | Always Brazilian Portuguese |
| Typography | DM Sans / DM Mono | Use CSS variables |
| Primary Color | #00539A | Use `var(--color-primary-blue)` |
| Spacing | 4px, 8px, 16px, 24px, 32px, 48px | Multiples of 4px or 8px |
| Border Radius | 12px | Use `var(--border-radius-base)` |
| Title Length | 50-60 chars | Optimal for SEO |
| Description | 150-160 chars | Google search result length |
| Min Tags | 3 per content | Minimum for categorization |
| Image Aspect | 16:9 | Standard web ratio |
| Image Size | <100KB compressed | Optimize with TinyPNG |
| Lighthouse Score | >90 | Performance target |
| Accessibility | WCAG AA 100% | Full compliance required |
| H1 per page | 1 (required) | Only one per page |
| Alt text | Required | Every image needs description |

## Examples in CLAUDE.md

For comprehensive examples and detailed component documentation:
- Component examples: See "Component Library Reference" section
- Content templates: See "Content Template" section
- Step-by-step guide: See "How to Create a New Document" section
- Troubleshooting: See "Troubleshooting" section

## Support & Questions

If Copilot is unsure:
1. Reference CLAUDE.md for complete documentation
2. Check existing content in `src/content/` for patterns
3. Review component files in `src/components/` for implementation details
4. Ask the QOA team via GitHub issues

---

**Version**: 2.0  
**Last Updated**: 2024-02-27  
**For complete guidance**: See CLAUDE.md in repository root
