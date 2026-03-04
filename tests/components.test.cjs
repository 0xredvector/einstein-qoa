const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');

const REQUIRED_COMPONENTS = [
  'DocHeader.astro',
  'Toc.astro',
  'Section.astro',
  'KpiGrid.astro',
  'KpiCard.astro',
  'Alert.astro',
  'Tag.astro',
  'Badge.astro',
  'GroupSection.astro',
  'Justification.astro',
  'Comparison.astro',
  'ComparisonCard.astro',
  'Tree.astro',
  'RiskMatrix.astro',
  'RiskCell.astro',
  'Flow.astro',
  'FlowStep.astro',
  'FlowArrow.astro',
  'Timeline.astro',
  'TimelineItem.astro',
  'ExampleCode.astro',
  'FaqItem.astro',
];

describe('Component Library', () => {
  test('components directory exists', () => {
    expect(fs.existsSync(COMPONENTS_DIR)).toBe(true);
  });

  REQUIRED_COMPONENTS.forEach(component => {
    test(`${component} exists`, () => {
      const filePath = path.join(COMPONENTS_DIR, component);
      expect(fs.existsSync(filePath)).toBe(true);
    });

    test(`${component} has content`, () => {
      const filePath = path.join(COMPONENTS_DIR, component);
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(content.length).toBeGreaterThan(10);
    });
  });
});
