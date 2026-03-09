# Einstein QOA - Component Usage Examples

Quick reference for using components in MDX files. For complete documentation, see CLAUDE.md.

## Import Pattern

Place all imports at the top of your MDX file, after the frontmatter:

```mdx
---
title: "Your Page Title"
description: "Your description"
type: "policy"
status: "published"
date: 2024-02-27
tags: ["tag1", "tag2", "tag3"]
---

import Alert from '../components/Alert.astro';
import DocHeader from '../components/DocHeader.astro';
import KpiGrid from '../components/KpiGrid.astro';
import KpiCard from '../components/KpiCard.astro';
// ... import only what you need
```

## Component Examples by Category

### Presentation Components

#### Alert

Display important information, warnings, or success messages.

```mdx
<Alert variant="info" title="Note">
  This is informational content that readers should be aware of.
</Alert>

<Alert variant="warning" title="Important">
  This requires careful attention from the reader.
</Alert>

<Alert variant="critical" title="Critical">
  This is a critical issue that must be addressed immediately.
</Alert>

<Alert variant="success" title="Success">
  The operation completed successfully.
</Alert>
```

#### Badge

Inline status indicators, great for marking requirement levels.

```mdx
Status: <Badge variant="mandatory">Mandatory</Badge>
Implementation: <Badge variant="progressive">Progressive</Badge>
Type: <Badge variant="conditional">Conditional</Badge>
Level: <Badge variant="recommended">Recommended</Badge>
Release: <Badge variant="beta">Beta</Badge>
Obsolete: <Badge variant="deprecated">Deprecated</Badge>
```

#### Tag

Larger, standalone tags for document categorization.

```mdx
<div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  <Tag variant="mandatory">Mandatory</Tag>
  <Tag variant="progressive">Progressive</Tag>
  <Tag variant="conditional">Conditional</Tag>
  <Tag variant="recommended">Recommended</Tag>
</div>
```

#### ExampleCode

Display code with syntax highlighting.

```mdx
<ExampleCode title="Testing Pattern">
```javascript
describe('Authentication', () => {
  test('should authenticate valid user', () => {
    const result = authenticate({ username: 'admin' });
    expect(result.authenticated).toBe(true);
  });
});
```
</ExampleCode>
```

#### Justification

Explain why a requirement or policy exists.

```mdx
<Justification title="Why This Matters">
This requirement ensures consistency across all systems and prevents race conditions that could compromise data integrity.
</Justification>
```

### Layout & Structure

#### DocHeader

Professional introduction for every page.

```mdx
<DocHeader
  badge="Policy v2.1"
  title="Política de Qualidade em Testes Automatizados"
  subtitle="Diretrizes obrigatórias para cobertura e execução"
  meta={[
    { label: "Owner", value: "QA Team" },
    { label: "Last Review", value: "2024-02-27" },
    { label: "Status", value: "Active" },
    { label: "Next Review", value: "2025-02-27" }
  ]}
/>
```

#### Toc (Table of Contents)

Navigation for multi-section documents.

```mdx
<Toc items={[
  { id: "purpose", label: "Propósito" },
  { id: "scope", label: "Escopo" },
  { id: "requirements", label: "Requisitos" },
  { id: "procedures", label: "Procedimentos" },
  { id: "exceptions", label: "Exceções" },
  { id: "faq", label: "Perguntas Frequentes" }
]} />
```

#### Section

Organize content with numbered sections.

```mdx
<Section id="purpose" number="1" title="Propósito">
Clear explanation of why this policy exists.
</Section>

<Section id="scope" number="2" title="Escopo">
Who this applies to and what it covers.
</Section>

<Section id="procedures" number="3" title="Procedimentos">
Step-by-step implementation guidelines.
</Section>
```

#### Tree

Display hierarchical structures or file trees.

```mdx
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

### Metrics & Comparison

#### KpiGrid + KpiCard

Display key performance indicators.

```mdx
<KpiGrid>
  <KpiCard
    value="98.5%"
    label="Test Success Rate"
    sub="Last 30 days"
    variant="ok"
  />
  <KpiCard
    value="2.3h"
    label="Average Test Execution"
    sub="All test suites"
    variant="blue"
  />
  <KpiCard
    value="8"
    label="Critical Issues"
    sub="Require immediate attention"
    variant="critical"
  />
  <KpiCard
    value="150"
    label="Total Test Cases"
    sub="Across all modules"
    variant="blue"
  />
</KpiGrid>
```

#### Comparison + ComparisonCard

Show best practices vs anti-patterns.

```mdx
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

#### RiskMatrix + RiskCell

Create risk assessment matrices.

```mdx
<RiskMatrix>
  <RiskCell variant="header" title="Probability →" />
  <RiskCell variant="header" title="Low" />
  <RiskCell variant="header" title="Medium" />
  <RiskCell variant="header" title="High" />

  <RiskCell variant="header" title="Impact ↓" />
  <RiskCell variant="low" title="Low Risk" />
  <RiskCell variant="medium" title="Medium Risk" />
  <RiskCell variant="critical" title="Critical Risk" />

  <RiskCell variant="header" title="Low" />
  <RiskCell variant="low" title="Accept" />
  <RiskCell variant="medium" title="Monitor" />
  <RiskCell variant="high" title="Mitigate" />
</RiskMatrix>
```

#### GroupSection

Group related requirements with thematic styling.

```mdx
<GroupSection
  icon="🔐"
  title="Segurança da Informação"
  question="Como protegemos dados sensíveis?"
  variant="security"
>
- Criptografia obrigatória para dados em trânsito
- Autenticação multifator para acesso administrativo
- Auditoria de todas as operações sensíveis
- Mascaramento de PII em logs
</GroupSection>

<GroupSection
  icon="🎭"
  title="Identidade e Autorização"
  question="Como identificamos e autorizamos usuários?"
  variant="identity"
>
- Integração com sistema de diretório corporativo
- Papéis e permissões baseados em RBAC
- Segregação de deveres implementada
- Revisão de acesso trimestral
</GroupSection>

<GroupSection
  icon="📊"
  title="Classificação de Dados"
  question="Como classificamos a sensibilidade dos dados?"
  variant="classification"
>
- Dados públicos: Sem restrições
- Dados internos: Acesso restrito a funcionários
- Confidencial: Acesso restrito por função
- Crítico: Criptografia + auditoria + MFA
</GroupSection>

<GroupSection
  icon="🔗"
  title="Integração com Sistemas"
  question="Como nos integramos com outros sistemas?"
  variant="integration"
>
- APIs versionadas com suporte mínimo de 2 versões
- Validação completa de entrada
- Retry com backoff exponencial
- Monitoramento de latência e erros
</GroupSection>

<GroupSection
  icon="🏛️"
  title="Governança e Conformidade"
  question="Como gerenciamos conformidade?"
  variant="ownership"
>
- Proprietário atribuído a cada domínio
- Revisões regulares de adequação
- Documentação de mudanças obrigatória
- Escalação clara de decisões
</GroupSection>
```

### Process & Timeline

#### Flow + FlowStep + FlowArrow

Visualize processes and workflows.

```mdx
<Flow title="Test Execution Pipeline">
  <FlowStep label="Write Tests" detail="Create test cases" />
  <FlowArrow />
  <FlowStep
    label="Execute Locally"
    detail="Run on developer machine"
    highlight={true}
    color="#1976d2"
  />
  <FlowArrow />
  <FlowStep label="Submit PR" detail="Push to GitHub" />
  <FlowArrow />
  <FlowStep label="CI Pipeline" detail="Automated checks run" />
  <FlowArrow />
  <FlowStep label="Review & Merge" detail="Team review and approval" />
</Flow>
```

#### Timeline + TimelineItem

Show project phases and milestones.

```mdx
<Timeline>
  <TimelineItem
    phase={1}
    title="Discovery & Planning"
    period="Q1 2024"
    goal="Complete requirements and architecture"
  >
- Stakeholder interviews
- Requirements gathering
- Architecture design review
  </TimelineItem>

  <TimelineItem
    phase={2}
    title="Development Sprint 1-3"
    period="Q2 2024"
    goal="Implement core features and integrations"
  >
- Backend development
- API implementation
- Database schema creation
  </TimelineItem>

  <TimelineItem
    phase={3}
    title="Testing & Optimization"
    period="Q3 2024"
    goal="Comprehensive testing and performance tuning"
  >
- Integration testing
- Performance optimization
- Security review
- Documentation updates
  </TimelineItem>

  <TimelineItem
    phase={4}
    title="Deployment & Launch"
    period="Q4 2024"
    goal="Production rollout and monitoring"
  >
- Staging deployment
- Production deployment
- Monitoring setup
- Support training
  </TimelineItem>
</Timeline>
```

#### FaqItem

Create FAQ sections.

```mdx
<FaqItem question="How do I run tests locally?">
Clone the repository, run `npm install`, then `npm test` to execute all test suites.
</FaqItem>

<FaqItem question="What's the minimum code coverage required?">
We require 80% overall coverage with 90%+ for critical paths. Use `npm run coverage` to check.
</FaqItem>

<FaqItem question="How do I report a bug?">
Create a GitHub issue with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- System information
</FaqItem>

<FaqItem question="How long does the CI pipeline take?">
Typically 15-20 minutes for full pipeline including all checks, tests, and deployment to staging.
</FaqItem>
```

## Complete Example Document

Here's a complete policy document using multiple components:

```mdx
---
title: "Política de Testes Automatizados QA"
description: "Diretrizes obrigatórias para cobertura, execução e manutenção de testes em sistemas Einstein"
type: "policy"
status: "active"
version: "2.1"
effectiveDate: 2024-02-27
lastReviewed: 2024-02-27
nextReviewDate: 2025-02-27
owner: "QA Team"
tags: ["qa", "testing", "automation", "quality"]
---

import DocHeader from '../components/DocHeader.astro';
import Toc from '../components/Toc.astro';
import Section from '../components/Section.astro';
import Alert from '../components/Alert.astro';
import KpiGrid from '../components/KpiGrid.astro';
import KpiCard from '../components/KpiCard.astro';
import GroupSection from '../components/GroupSection.astro';
import Justification from '../components/Justification.astro';
import Comparison from '../components/Comparison.astro';
import ComparisonCard from '../components/ComparisonCard.astro';
import Tag from '../components/Tag.astro';
import FaqItem from '../components/FaqItem.astro';
import Timeline from '../components/Timeline.astro';
import TimelineItem from '../components/TimelineItem.astro';

<DocHeader
  badge="Policy v2.1"
  title="Política de Testes Automatizados QA"
  subtitle="Diretrizes obrigatórias para cobertura, execução e manutenção"
  meta={[
    { label: "Owner", value: "QA Team" },
    { label: "Last Review", value: "2024-02-27" },
    { label: "Next Review", value: "2025-02-27" },
    { label: "Status", value: "Active" }
  ]}
/>

<Alert variant="info" title="Important Update">
This policy was updated on 2024-02-27 to reflect new standards for test automation. All teams must comply by 2024-03-31.
</Alert>

<Toc items={[
  { id: "purpose", label: "Propósito" },
  { id: "scope", label: "Escopo" },
  { id: "requirements", label: "Requisitos Obrigatórios" },
  { id: "coverage", label: "Cobertura de Testes" },
  { id: "implementation", label: "Implementação" },
  { id: "governance", label: "Governança" },
  { id: "faq", label: "Perguntas Frequentes" }
]} />

<Section id="purpose" number="1" title="Propósito">
Estabelecer diretrizes obrigatórias para testes automatizados em todos os sistemas da Einstein, garantindo qualidade consistente, redução de riscos e manutenibilidade.

<Justification title="Por que precisamos dessa política">
Testes manuais são custosos, demorados e propensos a erros. A automação de testes permite detecção rápida de regressões, maior confiança nas releases e redução de incidentes em produção.
</Justification>
</Section>

<Section id="scope" number="2" title="Escopo">
Esta política se aplica a:
- Todos os sistemas de software desenvolvidos internamente
- Equipes de desenvolvimento, QA e DevOps
- Pipelines de CI/CD da Einstein

Excluídos: Sistemas legados pré-2020 (em roadmap para modernização)
</Section>

<KpiGrid>
  <KpiCard value="80%" label="Cobertura Mínima" sub="Obrigatório" variant="critical" />
  <KpiCard value="90%" label="Caminhos Críticos" sub="Cobertura requerida" variant="critical" />
  <KpiCard value="<5min" label="Execução Rápida" sub="Suite padrão" variant="ok" />
  <KpiCard value="100%" label="Flaky Tests" sub="Objetivo de eliminação" variant="blue" />
</KpiGrid>

<Section id="requirements" number="3" title="Requisitos Obrigatórios">

<Tag variant="mandatory">Mandatory</Tag> Todas as histórias devem ter testes automatizados

<GroupSection
  icon="✅"
  title="Testes Unitários"
  question="Como testamos componentes isolados?"
  variant="identity"
>
- <Tag variant="mandatory">Mandatory</Tag> Cobertura mínima de 80% por classe/função
- <Tag variant="mandatory">Mandatory</Tag> Tempo de execução <1ms por teste
- <Tag variant="progressive">Progressive</Tag> Testes parametrizados para múltiplos cenários
- <Tag variant="conditional">Conditional</Tag> Mocks para dependências externas
</GroupSection>

<GroupSection
  icon="🔗"
  title="Testes de Integração"
  question="Como testamos interações entre componentes?"
  variant="integration"
>
- <Tag variant="mandatory">Mandatory</Tag> Cobertura mínima de 60% de fluxos críticos
- <Tag variant="mandatory">Mandatory</Tag> Use containers Docker para dependências
- <Tag variant="progressive">Progressive</Tag> Dados de teste realistas
</GroupSection>

<GroupSection
  icon="🎯"
  title="Testes End-to-End"
  question="Como testamos workflows completos?"
  variant="security"
>
- <Tag variant="mandatory">Mandatory</Tag> 100% dos fluxos críticos de paciente
- <Tag variant="mandatory">Mandatory</Tag> Padrão de Page Object Model (POM)
- <Tag variant="conditional">Conditional</Tag> Visual regression testing
</GroupSection>

</Section>

<Section id="coverage" number="4" title="Cobertura de Testes">

<Comparison>
  <ComparisonCard variant="good" label="Cobertura Adequada">
```
Unit tests: 80-90% (excludes trivial getters)
Integration: 60-70% (critical paths)
E2E: 30-40% (user journeys)
Total: 85%+
```
  </ComparisonCard>

  <ComparisonCard variant="bad" label="Cobertura Inadequada">
```
Unit tests: 40% (missing controllers)
Integration: 10% (only happy path)
E2E: 0% (none)
Total: 30%
```
  </ComparisonCard>
</Comparison>

</Section>

<Section id="implementation" number="5" title="Implementação">

<Timeline>
  <TimelineItem
    phase={1}
    title="Setup Inicial"
    period="Sprint 1"
    goal="Configurar infraestrutura de testes"
  >
    - Pytest/Jest setup
    - Coverage reporting
    - CI integration
  </TimelineItem>

  <TimelineItem
    phase={2}
    title="Testes Unitários"
    period="Sprint 2-3"
    goal="Atingir 80% cobertura"
  >
    - Cobertura mínima
    - Refatoração de código testável
  </TimelineItem>

  <TimelineItem
    phase={3}
    title="Testes de Integração"
    period="Sprint 4"
    goal="Validar integração de componentes"
  >
    - Docker fixtures
    - Database setup/teardown
  </TimelineItem>

  <TimelineItem
    phase={4}
    title="Testes E2E"
    period="Sprint 5+"
    goal="Cobertura de fluxos críticos"
  >
    - Selenium/Cypress
    - Visual regression
  </TimelineItem>
</Timeline>

</Section>

<Section id="governance" number="6" title="Governança">

<GroupSection
  icon="📋"
  title="Revisor Responsável"
  question="Quem garante conformidade?"
  variant="ownership"
>
- QA Lead responsável pela validação
- Rejeição de PRs sem testes adequados
- Relatório mensal de cobertura por equipe
</GroupSection>

</Section>

<Section id="faq" number="7" title="Perguntas Frequentes">

<FaqItem question="E se não puder atingir 80% de cobertura?">
Documente o motivo técnico, obtenha aprovação do QA Lead, e crie task para cobertura futura.
</FaqItem>

<FaqItem question="Como lidar com código legado sem testes?">
Comece com testes para novas funcionalidades. Para refatorações, aumente cobertura gradualmente (progressive).
</FaqItem>

<FaqItem question="Testes flaky (intermitentes) são aceitáveis?">
Não. Tests instáveis devem ser corrigidos ou removidos. Use retry apenas como último recurso (máx 2 tentativas).
</FaqItem>

</Section>

---

**Versão**: 2.1  
**Atualizado em**: 2024-02-27  
**Próxima revisão**: 2025-02-27  
**Dúvidas?** Contate o QA Team em qoa-team@einstein.br
```

## Tips for Using Components Effectively

1. **Import only what you use** - Don't import components you won't use
2. **Combine components** - Use DocHeader → Toc → Sections for professional docs
3. **Use variants** - Alert/KpiCard/GroupSection have variants for different contexts
4. **Semantic HTML** - Components generate accessible, semantic HTML automatically
5. **Markdown inside slots** - Content between component tags supports markdown syntax
6. **Props syntax** - Always use `{curly braces}` for non-string props: `phase={1}`, `variant="ok"`

---

For complete documentation, see `/sessions/inspiring-affectionate-turing/mnt/qoa-einstein/CLAUDE.md`
