const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');
const VALID_TYPES = ['policy', 'standard', 'tool', 'communication', 'news'];
const VALID_STATUSES = ['active', 'published', 'draft', 'deprecated', 'beta'];

function findMdxFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdxFiles(fullPath));
    } else if (entry.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const lines = match[1].split('\n');
  const data = {};
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    if (value.startsWith('[')) {
      try {
        value = JSON.parse(value.replace(/'/g, '"'));
      } catch {
        value = value.slice(1, -1).split(',').map(s => s.trim().replace(/"/g, ''));
      }
    }
    data[key] = value;
  }
  return data;
}

const mdxFiles = findMdxFiles(CONTENT_DIR);

describe('Content Collection Validation', () => {
  test('content directory exists', () => {
    expect(fs.existsSync(CONTENT_DIR)).toBe(true);
  });

  test('at least one MDX file exists', () => {
    expect(mdxFiles.length).toBeGreaterThan(0);
  });

  mdxFiles.forEach(file => {
    const relative = path.relative(CONTENT_DIR, file);

    describe(relative, () => {
      const content = fs.readFileSync(file, 'utf-8');
      const frontmatter = parseFrontmatter(content);

      test('has valid frontmatter', () => {
        expect(frontmatter).not.toBeNull();
      });

      if (frontmatter) {
        test('has title', () => {
          expect(frontmatter.title).toBeDefined();
          expect(frontmatter.title.length).toBeGreaterThan(0);
        });

        test('has valid type', () => {
          expect(frontmatter.type).toBeDefined();
          expect(VALID_TYPES).toContain(frontmatter.type);
        });

        test('has valid status if present', () => {
          if (frontmatter.status) {
            expect(VALID_STATUSES).toContain(frontmatter.status);
          }
        });

        test('tags is array if present', () => {
          if (frontmatter.tags) {
            expect(Array.isArray(frontmatter.tags)).toBe(true);
          }
        });
      }
    });
  });
});
