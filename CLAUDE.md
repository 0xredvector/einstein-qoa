# Einstein QOA Website - Claude Code Project Context

## Project Overview

The Einstein QOA (Qualidade, Observabilidade e Arquitetura) website is a static site dedicated to Quality Assurance, Observability, and Architecture practices at Hospital Israelita Albert Einstein. This modern content portal serves as a central knowledge hub for hospital staff, providing access to policies, standards, tools, communications, and news related to quality and operational excellence.

The site is built with **Astro 5** and **MDX**, enabling rich interactive documentation with a powerful component library for creating sophisticated content layouts without leaving Markdown.

**Key Characteristics:**
- Fast, static-first architecture optimized for performance and accessibility
- Rich component library for enhanced content presentation
- Multilingual ready (Portuguese-Brazil primary)
- Pagefind search integration for site-wide search
- Automated deployment via GitHub Actions
- Lighthouse 100 performance and accessibility targets

## Tech Stack

- **Static Site Generator**: Astro 5 (JavaScript/TypeScript)
- **Content Format**: MDX (Markdown with embedded JSX components)
- **Styling**: CSS with custom properties (CSS variables) for theming and design tokens
- **Search**: Pagefind (client-side full-text search)
- **Component Framework**: Astro components (.astro files)
- **CI/CD**: GitHub Actions for automated build and deployment
- **Hosting**: Amazon S3 with CloudFront CDN
- **Version Control**: Git/GitHub
- **Node Version**: 22.0.0+

## Directory Structure

```
qoa-einstein/
├── src/
│   ├── _assets/
│   │   ├── css/              # Global styles, design tokens (tokens.css, base.css)
│   │   ├── js/               # Client-side scripts (navigation, analytics, search)
│   │   └── images/           # Static images, icons (16:9 aspect ratio)
│   ├── components/           # Reusable Astro components for MDX
│   │   ├── Alert.astro
│   │   ├── Badge.astro
│   │   ├── Comparison.astro
│   │   ├── ComparisonCard.astro
│   │   ├── DocHeader.astro
│   │   ├── ExampleCode.astro
│   │   ├── FaqItem.astro
│   │   ├── Flow.astro
│   │   ├── FlowArrow.astro
│   │   ├── FlowStep.astro
│   │   ├── GroupSection.astro
│   │   ├── Justification.astro
│   │   ├── KpiCard.astro
│   │   ├── KpiGrid.astro
│   │   ├── RiskCell.astro
│   │   ├── RiskMatrix.astro
│   │   ├── Section.astro
│   │   ├── Tag.astro
│   │   ├── Timeline.astro
│   │   ├── TimelineItem.astro
│   │   ├── Toc.astro
│   │   └── Tree.astro
│   ├── layouts/              # Page layouts (BaseLayout.astro, DocLayout.astro)
│   ├── pages/                # Static pages and route structure
│   ├── content/              # Content collections
│   │   ├── policies/         # QA policies and procedures (.mdx files)
│   │   ├── standards/        # Quality and architectural standards
│   │   ├── tools/            # Tools and utilities documentation
│   │   ├── communications/   # Announcements and updates
│   │   └── news/             # News and blog posts
│   ├── styles/               # Layout-specific styles
│   ├── data/                 # Global data files (site.json, navigation.json)
│   └── content.config.ts     # Content collection schema definitions
├── tests/                    # Jest test files
├── config/                   # Configuration files (jest.config.cjs)
├── scripts/                  # Build and utility scripts
├── .github/
│   ├── workflows/            # GitHub Actions CI/CD
│   └── copilot-instructions.md  # GitHub Copilot guidelines
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Node dependencies and scripts
├── .markdownlint.json        # Markdown linting rules
├── .stylelintrc.json         # CSS linting rules
└── CLAUDE.md                 # This file - AI agent guidelines

```

## Content Types

Each content piece on the site falls into one of these categories:

- **Policy**: Official QA and operational policies that must be followed. Include version, effective date, review dates, and owner information.
- **Standard**: Technical and quality standards for development and operations. Reference patterns and best practices.
- **Tool**: Documentation for tools, utilities, and internal systems. Include prerequisites, usage instructions, and examples.
- **Communication**: Official announcements, meeting notes, and organizational updates. Time-sensitive content.
- **News**: Blog posts, success stories, case studies, and general interest articles. Author and publication date required.

## Brand Standards

### Typography

**Primary Font**: DM Sans (sans-serif) for body text and headings
- DM Sans is a modern, clean typeface optimized for screen readability
- Fallback: system fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)
- Use CSS variable: `var(--font-family-dm-sans)`

**Monospace Font**: DM Mono for code and technical content
- Used in code blocks, examples, and terminal output
- Fallback: 'Courier New', monospace
- Use CSS variable: `var(--font-family-dm-mono)`

### Color Palette

All colors are defined as CSS custom properties in `src/_assets/css/tokens.css`. Reference these in all styles:

**Primary Colors:**
- **Primary Blue**: `var(--color-primary-blue)` = `#00539A` (Einstein brand blue)
- **Accent Blue**: `var(--color-accent-blue)` = `#0096D2` (secondary interactive color)
- **Bright Cyan**: `var(--color-bright-cyan)` = `#00DBFF` (highlight and accent)

**Semantic Colors:**
- **Success Green**: `#388e3c` (positive, approved, active)
- **Warning Orange**: `#f57c00` (caution, review needed)
- **Critical Red**: `#d32f2f` (error, critical attention)
- **Info Blue**: `#1976d2` (informational)

**Neutral Colors:**
- **Primary Text (Dark Gray)**: `var(--color-neutral-gray)` = `#333333`
- **Secondary Text (Medium Gray)**: `#666666`
- **Light Gray Background**: `var(--color-light-gray)` = `#F5F5F5`
- **White Surface**: `var(--color-white)` = `#FFFFFF`

### Layout & Spacing

- **Border Radius**: `var(--border-radius-base)` = `12px` for all rounded elements
- **Max Width Container**: `1200px` for content containers
- **Default Gutter**: `1rem` (16px) spacing between elements
- **Line Height**: `1.6` for body text, `1.2` for headings
- **Heading Sizes**:
  - H1: `2.5rem` (40px)
  - H2: `1.75rem` (28px)
  - H3: `1.25rem` (20px)

### Image Guidelines

- **Aspect Ratio**: `16:9` for featured images, hero sections, and large visuals
- **Optimization**: Compress with TinyPNG or similar before uploading (target: <100KB per image)
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Lazy Loading**: Use `loading="lazy"` attribute in img tags
- **Path**: Store in `src/_assets/images/` and reference as `/images/filename.jpg`
- **Alt Text**: Always provide descriptive, SEO-friendly alt text

### Spacing Scale

Used throughout components and layouts:
- `--spacing-1`: 0.25rem (4px)
- `--spacing-2`: 0.5rem (8px)
- `--spacing-3`: 1rem (16px)
- `--spacing-4`: 1.5rem (24px)
- `--spacing-5`: 2rem (32px)
- `--spacing-6`: 3rem (48px)

## Component Library Reference

This is the CRITICAL section for creating rich content in MDX. Each component is documented with its props, usage patterns, and examples. Use these components to build sophisticated layouts without leaving your Markdown file.

### Alert

Display contextual alerts and notifications inline.

**Import:** `import { Alert } from '../components/Alert.astro'`

**Props:**
- `variant`: `'critical' | 'warning' | 'info' | 'success'` (default: `'info'`)
- `title?`: string - optional alert title
- `icon?`: string - optional custom icon (emoji or symbol)
- Slot: alert message content (supports HTML/MDX)

**When to Use:**
- Highlight important information or warnings
- Call attention to critical updates
- Provide contextual guidance
- Display success confirmations

**Example:**
```mdx
import Alert from '../components/Alert.astro';

<Alert variant="warning" title="Important">
  This process cannot be reversed. Please confirm all settings before proceeding.
</Alert>

<Alert variant="success" title="Success">
  Your configuration has been saved successfully.
</Alert>

<Alert variant="critical" icon="⚡">
  Critical: System maintenance scheduled for 2024-03-15
</Alert>
```

### Badge

Inline badge for labeling and categorization (smaller than Tag, suitable for inline use).

**Import:** `import Badge from '../components/Badge.astro'`

**Props:**
- `variant?`: `'mandatory' | 'progressive' | 'conditional' | 'recommended' | 'info' | 'beta' | 'deprecated'` (default: `'mandatory'`)
- Slot: badge text

**When to Use:**
- Mark requirement levels in policies
- Indicate status (beta, deprecated, etc.)
- Quick visual categorization
- Inline with text

**Example:**
```mdx
import Badge from '../components/Badge.astro';

Requirement: <Badge variant="mandatory">Mandatory</Badge>
Status: <Badge variant="beta">Beta</Badge>
This feature is <Badge variant="deprecated">Deprecated</Badge>
```

### Tag

Larger tag component for standalone categorization and filtering (typically in documents or lists).

**Import:** `import Tag from '../components/Tag.astro'`

**Props:**
- `variant?`: `'mandatory' | 'progressive' | 'conditional' | 'recommended'` (default: `'mandatory'`)
- Slot: tag text

**When to Use:**
- Categorize content by requirement type
- Tag documents for filtering
- Highlight implementation phasing
- Standalone labeling

**Example:**
```mdx
import Tag from '../components/Tag.astro';

<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Tag variant="mandatory">Mandatory</Tag>
  <Tag variant="progressive">Progressive</Tag>
  <Tag variant="conditional">Conditional</Tag>
  <Tag variant="recommended">Recommended</Tag>
</div>
```

### DocHeader

Professional header for documentation pages with badge, title, subtitle, and metadata.

**Import:** `import DocHeader from '../components/DocHeader.astro'`

**Props:**
- `badge?`: string - optional badge text (e.g., "Policy v1.0", "Standard")
- `title`: string - main document title
- `subtitle?`: string - optional subtitle/tagline
- `meta?`: Array<{ label: string; value: string }> - metadata fields

**When to Use:**
- Start every policy, standard, or documentation page
- Display version, owner, and important metadata
- Create visual hierarchy at page top
- Professional introduction to content

**Example:**
```mdx
import DocHeader from '../components/DocHeader.astro';

<DocHeader
  badge="Policy v2.1"
  title="Política de Qualidade em Testes Automatizados"
  subtitle="Diretrizes obrigatórias para cobertura e execução de testes"
  meta={[
    { label: "Owner", value: "QA Team" },
    { label: "Last Review", value: "2024-02-27" },
    { label: "Status", value: "Active" }
  ]}
/>
```

### Toc (Table of Contents)

Interactive table of contents with numbered links to sections.

**Import:** `import Toc from '../components/Toc.astro'`

**Props:**
- `items`: Array<{ id: string; label: string }> - section links with anchors

**When to Use:**
- Long-form documents (policies, standards, guides)
- Help readers navigate multi-section content
- Improve SEO with linked sections
- Professional documentation layout

**Example:**
```mdx
import Toc from '../components/Toc.astro';

<Toc items={[
  { id: "purpose", label: "Propósito" },
  { id: "scope", label: "Escopo" },
  { id: "procedures", label: "Procedimentos" },
  { id: "exceptions", label: "Exceções" },
  { id: "references", label: "Referências" }
]} />
```

### Section

Semantic section wrapper with H2 heading and optional numbering.

**Import:** `import Section from '../components/Section.astro'`

**Props:**
- `id?`: string - CSS id for anchor links (used with Toc)
- `number?`: string - optional section number (e.g., "1", "2.1")
- `title`: string - section heading text
- Slot: section content

**When to Use:**
- Structure long documents into logical sections
- Provide ids for table of contents linking
- Apply consistent styling to headings
- Semantic HTML organization

**Example:**
```mdx
import Section from '../components/Section.astro';

<Section id="procedures" number="3" title="Procedimentos">
  1. Step one
  2. Step two
  3. Step three
</Section>
```

### KpiGrid & KpiCard

Display key performance indicators or important metrics in a responsive grid.

**Import:**
```mdx
import KpiGrid from '../components/KpiGrid.astro';
import KpiCard from '../components/KpiCard.astro';
```

**KpiCard Props:**
- `value`: string - the metric value/number (e.g., "98%", "150+")
- `label`: string - metric name/description
- `sub?`: string - optional sub-text or unit
- `variant?`: `'critical' | 'warning' | 'ok' | 'blue'` (default: `'blue'`)

**When to Use:**
- Display quality metrics and KPIs
- Show statistics and benchmarks
- Highlight important numbers
- Create visual impact with metrics

**Example:**
```mdx
import KpiGrid from '../components/KpiGrid.astro';
import KpiCard from '../components/KpiCard.astro';

<KpiGrid>
  <KpiCard value="98.5%" label="Test Success Rate" sub="Last 30 days" variant="ok" />
  <KpiCard value="2.3h" label="Avg Test Execution" sub="All test suites" variant="blue" />
  <KpiCard value="8" label="Critical Issues" sub="Require attention" variant="critical" />
  <KpiCard value="45" label="Test Cases" sub="New this month" variant="blue" />
</KpiGrid>
```

### Alert + Variants Reference

For advanced alert configurations with custom icons and styling:

**All Alert Variants:**
```mdx
<Alert variant="info">Information message</Alert>
<Alert variant="success">Success confirmation</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="critical">Critical message requiring immediate action</Alert>
```

### GroupSection

Container for thematic grouping with left-aligned icon/title and colored variants.

**Import:** `import GroupSection from '../components/GroupSection.astro'`

**Props:**
- `icon?`: string - emoji or symbol
- `title`: string - group title
- `question?`: string - optional guiding question
- `variant?`: `'identity' | 'ownership' | 'classification' | 'integration' | 'security'` (default: `'identity'`)
- Slot: section content (markdown/HTML)

**When to Use:**
- Group related requirements or guidelines
- Organize by domain (identity, security, etc.)
- Create visual sections with left accent bars
- Present themed requirements

**Example:**
```mdx
import GroupSection from '../components/GroupSection.astro';

<GroupSection
  icon="🔐"
  title="Segurança"
  question="Como protegemos dados sensíveis?"
  variant="security"
>
- Requirement 1
- Requirement 2
- Requirement 3
</GroupSection>

<GroupSection
  icon="🎭"
  title="Identidade"
  question="Como identificamos o usuário?"
  variant="identity"
>
All identity requirements here.
</GroupSection>
```

### Justification

Highlighted box for explaining rationale or requirements.

**Import:** `import Justification from '../components/Justification.astro'`

**Props:**
- `title?`: string - optional title for the justification
- Slot: explanation text (markdown/HTML)

**When to Use:**
- Explain why a policy exists
- Justify requirements and decisions
- Provide rationale for standards
- Add context to requirements

**Example:**
```mdx
import Justification from '../components/Justification.astro';

<Justification title="Why This Matters">
This requirement ensures data consistency across all systems and prevents race conditions that could compromise patient data integrity.
</Justification>
```

### Comparison & ComparisonCard

Side-by-side comparison of approaches (good vs bad, before vs after).

**Import:**
```mdx
import Comparison from '../components/Comparison.astro';
import ComparisonCard from '../components/ComparisonCard.astro';
```

**ComparisonCard Props:**
- `variant`: `'good' | 'bad'` - (required) positive or negative example
- `label`: string - title for the comparison card
- Slot: example content (code, text, etc.)

**When to Use:**
- Show best practices vs anti-patterns
- Compare before/after scenarios
- Illustrate correct vs incorrect approaches
- Provide clear examples

**Example:**
```mdx
import Comparison from '../components/Comparison.astro';
import ComparisonCard from '../components/ComparisonCard.astro';

<Comparison>
  <ComparisonCard variant="good" label="Best Practice">
    ```python
    @pytest.mark.parametrize("input,expected", test_data)
    def test_calculation(input, expected):
        assert calculate(input) == expected
    ```
  </ComparisonCard>

  <ComparisonCard variant="bad" label="Anti-Pattern">
    ```python
    def test_all_calculations():
        assert calculate(5) == 10
        assert calculate(10) == 20
        # No parameterization, hard to maintain
    ```
  </ComparisonCard>
</Comparison>
```

### Tree

Display hierarchical structure or file trees in monospace format.

**Import:** `import Tree from '../components/Tree.astro'`

**Props:**
- Slot: tree content (indented text with proper formatting)

**When to Use:**
- Show directory/file structures
- Display hierarchical relationships
- Represent organizational structures
- Show project organization

**Example:**
```mdx
import Tree from '../components/Tree.astro';

<Tree>
```
src/
├── components/
│   ├── Alert.astro
│   ├── Badge.astro
│   └── Button.astro
├── pages/
│   ├── index.astro
│   └── about.astro
└── layouts/
    └── Base.astro
```
</Tree>
```

### RiskMatrix & RiskCell

Create risk assessment matrices with severity levels.

**Import:**
```mdx
import RiskMatrix from '../components/RiskMatrix.astro';
import RiskCell from '../components/RiskCell.astro';
```

**RiskCell Props:**
- `variant`: `'critical' | 'high' | 'medium' | 'low' | 'header'` (required)
- `title?`: string - cell content/label
- Slot: cell content (text, details)

**When to Use:**
- Create risk assessment matrices (Probability × Impact)
- Display severity levels
- Show decision matrices
- Visualize multi-dimensional data

**Example:**
```mdx
import RiskMatrix from '../components/RiskMatrix.astro';
import RiskCell from '../components/RiskCell.astro';

<RiskMatrix>
  <RiskCell variant="header" title="Probability →" />
  <RiskCell variant="header" title="Low" />
  <RiskCell variant="header" title="Medium" />
  <RiskCell variant="header" title="High" />

  <RiskCell variant="header" title="Impact ↓" />
  <RiskCell variant="low" title="Low Risk" />
  <RiskCell variant="medium" title="Medium Risk" />
  <RiskCell variant="critical" title="Critical Risk" />
</RiskMatrix>
```

### Flow, FlowStep, & FlowArrow

Create process flows and workflows with directional steps.

**Import:**
```mdx
import Flow from '../components/Flow.astro';
import FlowStep from '../components/FlowStep.astro';
import FlowArrow from '../components/FlowArrow.astro';
```

**Flow Props:**
- `title?`: string - optional flow title
- Slot: FlowStep and FlowArrow components

**FlowStep Props:**
- `label`: string - step label/title (supports HTML)
- `detail?`: string - optional detail text (supports HTML)
- `highlight?`: boolean - highlight this step visually
- `color?`: string - optional custom highlight color

**FlowArrow Props:**
- No props - renders as visual arrow separator

**When to Use:**
- Illustrate processes and workflows
- Show decision trees
- Document procedures
- Create visual process documentation

**Example:**
```mdx
import Flow from '../components/Flow.astro';
import FlowStep from '../components/FlowStep.astro';
import FlowArrow from '../components/FlowArrow.astro';

<Flow title="Test Execution Pipeline">
  <FlowStep label="Write Tests" detail="Create test cases" />
  <FlowArrow />
  <FlowStep label="Execute Locally" detail="Run on developer machine" highlight={true} color="#1976d2" />
  <FlowArrow />
  <FlowStep label="CI Pipeline" detail="Automated checks" />
  <FlowArrow />
  <FlowStep label="Review Results" detail="Analyze coverage and failures" />
</Flow>
```

### Timeline & TimelineItem

Create timeline visualizations for phases, milestones, or schedules.

**Import:**
```mdx
import Timeline from '../components/Timeline.astro';
import TimelineItem from '../components/TimelineItem.astro';
```

**TimelineItem Props:**
- `phase?`: number - phase number 1-4 (affects dot color)
- `title`: string - milestone or phase title
- `period?`: string - time period (e.g., "Q1 2024", "Feb 27 - Mar 5")
- `goal?`: string - objective or goal for this phase
- Slot: additional content/details

**When to Use:**
- Show implementation timelines
- Display project phases
- Create roadmaps
- Show historical progression

**Example:**
```mdx
import Timeline from '../components/Timeline.astro';
import TimelineItem from '../components/TimelineItem.astro';

<Timeline>
  <TimelineItem
    phase={1}
    title="Discovery & Planning"
    period="Q1 2024"
    goal="Define requirements and architecture"
  >
    - Stakeholder interviews
    - Requirements gathering
  </TimelineItem>

  <TimelineItem
    phase={2}
    title="Development"
    period="Q2 2024"
    goal="Implement core features"
  >
    - Backend development
    - Frontend implementation
  </TimelineItem>

  <TimelineItem
    phase={3}
    title="Testing & QA"
    period="Q3 2024"
    goal="Comprehensive testing and bug fixes"
  >
    - Integration testing
    - Performance optimization
  </TimelineItem>

  <TimelineItem
    phase={4}
    title="Deployment"
    period="Q4 2024"
    goal="Launch to production"
  >
    - Production deployment
    - Monitoring setup
  </TimelineItem>
</Timeline>
```

### ExampleCode

Display code examples with optional title in a styled code block.

**Import:** `import ExampleCode from '../components/ExampleCode.astro'`

**Props:**
- `title?`: string - optional title for the example
- Slot: code content (markdown code fence with language)

**When to Use:**
- Show code examples and patterns
- Illustrate implementation
- Display configuration examples
- Present snippets

**Example:**
```mdx
import ExampleCode from '../components/ExampleCode.astro';

<ExampleCode title="Testing Pattern Example">
```javascript
describe('Authentication', () => {
  test('should authenticate valid user', () => {
    const user = { username: 'admin', password: 'secure' };
    const result = authenticate(user);
    expect(result.authenticated).toBe(true);
  });
});
```
</ExampleCode>
```

### FaqItem

Accordion-style FAQ question/answer pairs.

**Import:** `import FaqItem from '../components/FaqItem.astro'`

**Props:**
- `question`: string - the question text
- Slot: answer content (markdown/HTML)

**When to Use:**
- Create FAQ sections
- Answer common questions
- Provide quick reference Q&A
- Document troubleshooting

**Example:**
```mdx
import FaqItem from '../components/FaqItem.astro';

<FaqItem question="How do I run tests locally?">
Clone the repository, run `npm install`, then `npm test` to execute all test suites.
</FaqItem>

<FaqItem question="What's the minimum code coverage required?">
We require 80% overall coverage with 90%+ for critical paths.
</FaqItem>

<FaqItem question="How long does the CI pipeline take?">
Typically 15-20 minutes for full pipeline including all checks and deployment.
</FaqItem>
```

## Content Template

### Complete MDX Template with All Sections

Use this template as a starting point for new content:

```mdx
---
title: "Your Content Title (50-60 characters)"
description: "A compelling 150-160 character description for search results and social sharing"
type: "policy"  # or: standard, tool, communication, news
status: "published"  # or: draft, active, deprecated, beta
date: 2024-02-27
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
richDocument: true  # optional: set to true for rich documents that use DocHeader and control their own layout (no Article chrome)
---

import DocHeader from '../components/DocHeader.astro';
import Toc from '../components/Toc.astro';
import Section from '../components/Section.astro';
import Alert from '../components/Alert.astro';
import KpiGrid from '../components/KpiGrid.astro';
import KpiCard from '../components/KpiCard.astro';
import GroupSection from '../components/GroupSection.astro';
import Justification from '../components/Justification.astro';
import Timeline from '../components/Timeline.astro';
import TimelineItem from '../components/TimelineItem.astro';
import Tag from '../components/Tag.astro';
import Comparison from '../components/Comparison.astro';
import ComparisonCard from '../components/ComparisonCard.astro';
import FaqItem from '../components/FaqItem.astro';

<DocHeader
  badge="Policy v1.0"
  title="Your Content Title"
  subtitle="Optional subtitle or tagline"
  meta={[
    { label: "Owner", value: "Team Name" },
    { label: "Last Review", value: "2024-02-27" },
    { label: "Status", value: "Active" }
  ]}
/>

<Toc items={[
  { id: "purpose", label: "Propósito" },
  { id: "scope", label: "Escopo" },
  { id: "procedures", label: "Procedimentos" },
  { id: "requirements", label: "Requisitos" },
  { id: "faq", label: "Perguntas Frequentes" }
]} />

<Section id="purpose" number="1" title="Propósito">
Explain why this content exists and what problem it solves.
</Section>

<Alert variant="info" title="Tip">
Provide helpful context or important information to readers.
</Alert>

<Section id="scope" number="2" title="Escopo">
Define who this applies to and what it covers.

<Tag variant="mandatory">Mandatory</Tag> All teams must follow this.
</Section>

<KpiGrid>
  <KpiCard value="100%" label="Compliance Required" variant="critical" />
  <KpiCard value="80%" label="Minimum Coverage" variant="ok" />
</KpiGrid>

<Section id="procedures" number="3" title="Procedimentos">

<GroupSection
  icon="🔍"
  title="Quality Checks"
  question="How do we ensure quality?"
  variant="identity"
>
- Check 1
- Check 2
- Check 3
</GroupSection>

<Comparison>
  <ComparisonCard variant="good" label="Best Practice">
Code or example here
  </ComparisonCard>

  <ComparisonCard variant="bad" label="Anti-Pattern">
Wrong approach here
  </ComparisonCard>
</Comparison>

</Section>

<Section id="requirements" number="4" title="Requisitos">

<Justification title="Why We Need This">
Explain the rationale behind the requirements.
</Justification>

- Requirement 1
- Requirement 2
- Requirement 3

</Section>

<Timeline>
  <TimelineItem
    phase={1}
    title="Phase 1"
    period="Week 1-2"
    goal="Complete step 1"
  />
  <TimelineItem
    phase={2}
    title="Phase 2"
    period="Week 3-4"
    goal="Complete step 2"
  />
</Timeline>

<Section id="faq" number="5" title="Perguntas Frequentes">

<FaqItem question="Your first question?">
Answer to the question.
</FaqItem>

<FaqItem question="Your second question?">
Detailed answer with examples.
</FaqItem>

</Section>

---

**Version**: 1.0  
**Last Updated**: 2024-02-27  
**Maintained By**: Your Team  
**Contact**: your-email@einstein.br
```

### Type-Specific Frontmatter Examples

**Policy Documents:**
```yaml
---
title: "Política de [Subject]"
description: "Clear, compelling description 150-160 characters for SEO"
type: "policy"
status: "active"  # or: draft, deprecated
version: "1.0"
effectiveDate: 2024-02-27
lastReviewed: 2024-02-27
nextReviewDate: 2025-02-27
owner: "Department Name"
tags: ["qa", "compliance", "policies"]
---
```

**Standards:**
```yaml
---
title: "Padrão de [Subject]"
description: "What this standard defines 150-160 characters"
type: "standard"
status: "active"  # or: draft, beta, deprecated
version: "2.1"
tags: ["architecture", "testing", "standards"]
---
```

**Tools:**
```yaml
---
title: "Tool Name"
description: "What this tool does 150-160 characters"
type: "tool"
status: "active"  # or: draft, beta, deprecated
tags: ["tools", "utilities", "development"]
---
```

**Communications:**
```yaml
---
title: "Anúncio: [Subject]"
description: "Brief summary for display 150-160 characters"
type: "communication"
status: "published"  # or: draft, archived
date: 2024-02-27
tags: ["announcements", "updates"]
---
```

**News:**
```yaml
---
title: "Article Title"
description: "Article description for preview 150-160 characters"
type: "news"
status: "published"  # or: draft, archived
date: 2024-02-27
author: "Author Full Name"
tags: ["news", "topic-tag"]
---
```

## How to Create a New Document

### Step-by-Step Guide

1. **Create the file**
   ```bash
   # Navigate to appropriate content subdirectory
   # Create file: src/content/policies/meu-novo-documento.mdx
   # Or: src/content/standards/novo-padrao.mdx
   ```

2. **Add frontmatter**
   - Copy appropriate template from above
   - Fill in all required fields
   - Use 50-60 character titles
   - Use 150-160 character descriptions
   - Add at least 3 relevant tags

3. **Add imports**
   - Import only the components you'll use
   - Place all imports at the top after frontmatter

4. **Create header**
   - Use `<DocHeader>` component
   - Include badge, title, subtitle, and metadata

5. **Create TOC** (for documents longer than 1500 words)
   - Use `<Toc>` with all section ids

6. **Organize with Sections**
   - Use `<Section>` component for each major section
   - Include id and number for TOC linking
   - Follow logical flow (purpose → scope → details → FAQ)

7. **Enhance with Components**
   - Add `<Alert>` for important information
   - Use `<KpiGrid>` for metrics
   - Use `<GroupSection>` for themed groupings
   - Add `<Comparison>` for before/after or good/bad examples
   - Include `<Timeline>` for phased content
   - Add `<FaqItem>` for common questions

8. **Validate and test**
   ```bash
   # Run locally to check rendering
   npm run dev
   # Validate frontmatter
   npm run validate:frontmatter
   # Lint markdown
   npm run lint:markdown
   ```

9. **Commit and push**
   ```bash
   git checkout -b feature/new-document
   git add src/content/[type]/novo-documento.mdx
   git commit -m "Add: [Type] - Document Title"
   git push origin feature/new-document
   # Create Pull Request on GitHub
   ```

### File Naming Conventions

- **Content files**: `kebab-case-title.mdx` in appropriate `src/content/[type]/` subdirectory
- **Component files**: Already exist in `src/components/`
- **Images**: `kebab-case-description.jpg` or `.png` in `src/_assets/images/`
- **Scripts**: `camelCaseScript.js` in `src/_assets/js/`
- **Styles**: `kebab-case-module.css` in `src/_assets/css/` or `src/styles/`

### Semantic Naming Examples

- Policy: `politica-qualidade-testes.mdx`
- Standard: `padrao-automacao-testing.mdx`
- Tool: `guia-uso-jenkins.mdx`
- Communication: `anuncio-manutencao-sistema.mdx`
- News: `sucesso-implementacao-qa.mdx`

## Getting Started

### Prerequisites

- Node.js 22.0.0 or higher
- npm or yarn
- Git
- Text editor or IDE (VS Code recommended)
- Basic Markdown knowledge

### Installation

```bash
# Clone repository
git clone https://github.com/einstein-qoa/qoa-website.git
cd qoa-einstein

# Install dependencies
npm install

# Verify installation
node --version  # Should be 22.0.0+
npm --version   # Should be 10.0.0+
```

### Development Workflow

```bash
# Start development server (auto-reload on changes)
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build
# Generates dist/ with optimized site and search index

# Run tests
npm test

# Validate frontmatter
npm run validate:frontmatter

# Lint markdown
npm run lint:markdown

# Preview production build
npm run preview
```

### Development Best Practices

1. **Create feature branch** for your work
   ```bash
   git checkout -b feature/description
   ```

2. **Test locally** with `npm run dev`
   - Visit http://localhost:3000
   - Check rendering in different browsers
   - Verify search indexing

3. **Run validation** before committing
   ```bash
   npm run validate:frontmatter
   npm run lint:markdown
   npm test
   ```

4. **Commit with descriptive messages**
   ```bash
   git commit -m "Add: Policy - New QA Standards"
   git commit -m "Fix: Typo in testing documentation"
   git commit -m "Update: Refresh timeline in roadmap"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/description
   # Create Pull Request on GitHub UI
   ```

6. **Wait for CI checks**
   - GitHub Actions runs tests and builds
   - Lighthouse performance audit
   - All checks must pass before merging

7. **Address review feedback**
   - Make requested changes
   - Commit and push new changes
   - Re-request review

8. **Merge when approved**
   - GitHub automatically deploys to S3
   - CDN cache invalidated
   - Site live in 2-5 minutes

## Troubleshooting

### Build Fails

**Problem**: Build command fails with errors

**Solutions**:
```bash
# Clear all caches
npm run clean
rm -rf node_modules/.cache

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check Node version
node --version  # Must be 22.0.0+

# Rebuild from scratch
npm run build --verbose
```

### Content Not Appearing

**Problem**: New content file doesn't show on website

**Checklist**:
- [ ] File is in `src/content/[type]/` directory
- [ ] Filename follows `kebab-case.mdx` pattern
- [ ] Frontmatter is valid YAML
- [ ] `status: "published"` is set (not "draft")
- [ ] `type` is valid (policy, standard, tool, communication, news)
- [ ] Required fields present: title, description, date, type
- [ ] Run `npm run build` to regenerate site

**Solution**:
```bash
npm run validate:frontmatter
npm run build
npm run dev
```

### Search Not Working

**Problem**: Pagefind search not working or returning no results

**Solutions**:
```bash
# Rebuild search index
npm run build  # Automatically runs pagefind

# Verify search index generated
ls -la dist/.pagefind/

# Check browser console for JS errors (F12)

# Clear browser cache
# Ctrl+Shift+Delete (Windows/Linux) or Cmd+Shift+Delete (Mac)
```

### Styling Issues

**Problem**: Colors, fonts, or spacing not displaying correctly

**Checklist**:
- [ ] Using CSS custom properties: `var(--color-primary-blue)`
- [ ] Check `src/_assets/css/tokens.css` for available variables
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Check CSS specificity in component files
- [ ] Verify no inline styles override design tokens

**Debugging**:
```bash
# Open browser DevTools (F12)
# Inspect element
# Check computed styles
# Verify variable values
```

### Component Not Displaying

**Problem**: Component shows but doesn't render content

**Solutions**:
- [ ] Check import path is correct
- [ ] Verify component props passed correctly
- [ ] Check component file exists in `src/components/`
- [ ] Verify slot content is properly formatted
- [ ] Check browser console for errors

**Example Debug**:
```mdx
// Verify import
import Alert from '../components/Alert.astro';

// Check usage
<Alert variant="info" title="Test">
  This should appear
</Alert>
```

### Performance Issues

**Problem**: Site is slow or Lighthouse score is low

**Diagnosis**:
```bash
# Build and analyze
npm run build

# Run lighthouse locally
# Use Chrome DevTools Lighthouse tab
```

**Common Issues**:
- Large unoptimized images (compress with TinyPNG)
- Missing lazy loading on images
- JavaScript bundle too large
- Too many external scripts

**Solutions**:
- Compress images before uploading
- Add `loading="lazy"` to images
- Minimize component imports
- Remove unused dependencies
- Review JavaScript in DevTools

## Resources

### Documentation
- [Astro Official Docs](https://docs.astro.build)
- [MDX Documentation](https://mdxjs.com/)
- [Pagefind Search](https://pagefind.app/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

### Learning
- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Auditing](https://developers.google.com/web/tools/lighthouse)

### Tools
- [Markdown Linter](https://github.com/DavidAnson/markdownlint)
- [TinyPNG Image Compression](https://tinypng.com)
- [VS Code](https://code.visualstudio.com) (Recommended editor)
- [GitHub Desktop](https://desktop.github.com) (Git GUI)

### Team Resources
- Check project wiki on GitHub
- Review existing content in `src/content/`
- Look at similar documents for patterns
- Ask QOA team for guidance

## Support

### Getting Help

1. **Check this documentation first** - Most issues are documented above
2. **Review existing content** - Look at similar documents for examples
3. **Check GitHub issues** - Search for similar problems
4. **Ask the QOA team**
   - Create GitHub issue with details
   - Tag with `question` or `help-wanted`
   - Include error messages and steps to reproduce
5. **Review GitHub Copilot instructions** - See `.github/copilot-instructions.md`

### Common Questions

**Q: How do I add images to my content?**  
A: Store images in `src/_assets/images/`, use relative path `/images/filename.jpg`, always add alt text, and compress before uploading.

**Q: Can I use custom HTML in MDX files?**  
A: Yes! MDX supports JSX and HTML. Components are preferred for consistency.

**Q: How do I make content private or draft?**  
A: Set `status: "draft"` in frontmatter. Draft content is excluded from production builds.

**Q: What's the review process?**  
A: Create PR → CI checks run → Review by team → Address feedback → Merge → Auto-deploy.

**Q: How long until changes go live?**  
A: ~2-5 minutes after merge to main (GitHub Actions deployment).

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2024-02-27 | Complete rewrite for Astro 5 + MDX + component system |
| 1.0 | 2023-01-01 | Initial 11ty documentation |

---

**Last Updated**: 2024-02-27  
**Maintained By**: QOA Team  
**Contact**: qoa-team@einstein.br  
**Repository**: https://github.com/einstein-qoa/qoa-website

This documentation is the authoritative guide for AI agents (Claude Code, GitHub Copilot) and human contributors. Read completely before creating new content.
