#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const CONTENT_DIR = path.join(__dirname, '../src/content');
const REQUIRED_FIELDS = ['title', 'type'];
const VALID_TYPES = ['policy', 'standard', 'tool', 'communication', 'news'];
const VALID_STATUSES = ['draft', 'published', 'archived', 'active', 'deprecated', 'beta'];

let errorCount = 0;
let fileCount = 0;

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return null;
  }
  try {
    return yaml.load(match[1]);
  } catch (error) {
    throw new Error(`Invalid YAML: ${error.message}`);
  }
}

function validateFrontmatter(file, frontmatter) {
  const errors = [];

  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!frontmatter[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate type
  if (frontmatter.type && !VALID_TYPES.includes(frontmatter.type)) {
    errors.push(`Invalid type: ${frontmatter.type}. Must be one of: ${VALID_TYPES.join(', ')}`);
  }

  // Validate status if present
  if (frontmatter.status && !VALID_STATUSES.includes(frontmatter.status)) {
    errors.push(`Invalid status: ${frontmatter.status}. Must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  // Validate date format if present
  if (frontmatter.date) {
    const dateString = String(frontmatter.date).trim();
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      errors.push(`Invalid date format: ${dateString}. Must be YYYY-MM-DD`);
    }
  }

  // Validate title is a string
  if (frontmatter.title && typeof frontmatter.title !== 'string') {
    errors.push(`Title must be a string, got: ${typeof frontmatter.title}`);
  }

  // Validate description is a string if present
  if (frontmatter.description && typeof frontmatter.description !== 'string') {
    errors.push(`Description must be a string, got: ${typeof frontmatter.description}`);
  }

  // Validate tags is array if present
  if (frontmatter.tags && !Array.isArray(frontmatter.tags)) {
    errors.push(`Tags must be an array, got: ${typeof frontmatter.tags}`);
  }

  return errors;
}

function processMdxFile(filePath) {
  fileCount++;
  const relativePath = path.relative(CONTENT_DIR, filePath);

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = extractFrontmatter(content);

    if (!frontmatter) {
      console.error(`❌ ${relativePath}: No frontmatter found`);
      errorCount++;
      return;
    }

    const errors = validateFrontmatter(filePath, frontmatter);

    if (errors.length > 0) {
      console.error(`❌ ${relativePath}:`);
      errors.forEach((error) => {
        console.error(`   - ${error}`);
      });
      errorCount++;
    } else {
      console.log(`✅ ${relativePath}`);
    }
  } catch (error) {
    console.error(`❌ ${relativePath}: ${error.message}`);
    errorCount++;
  }
}

function walkDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }
  
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.isFile() && file.name.endsWith('.mdx')) {
      processMdxFile(filePath);
    }
  }
}

function main() {
  console.log('Validating frontmatter in MDX content files...\n');

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }

  walkDirectory(CONTENT_DIR);

  console.log(`\n📊 Results: ${fileCount} files checked, ${errorCount} error(s)\n`);

  if (errorCount > 0) {
    console.error('❌ Frontmatter validation failed\n');
    process.exit(1);
  } else {
    console.log('✅ All frontmatter is valid\n');
    process.exit(0);
  }
}

main();
