#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONTENT_DIR = path.join(__dirname, '../src/content');

const CONTENT_TYPES = {
  policy: {
    dir: 'politicas',
    type: 'policy',
    description: 'Policy documentation'
  },
  standard: {
    dir: 'padroes',
    type: 'standard',
    description: 'Standards and patterns'
  },
  tool: {
    dir: 'ferramentas',
    type: 'tool',
    description: 'Tools documentation'
  },
  communication: {
    dir: 'comunicacoes',
    type: 'communication',
    description: 'Communications'
  },
  news: {
    dir: 'noticias',
    type: 'news',
    description: 'News and announcements'
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getCurrentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function getContentTypeKey(answer) {
  const normalized = answer.toLowerCase().trim();
  if (normalized === '1' || normalized === 'policy') return 'policy';
  if (normalized === '2' || normalized === 'standard') return 'standard';
  if (normalized === '3' || normalized === 'tool') return 'tool';
  if (normalized === '4' || normalized === 'communication') return 'communication';
  if (normalized === '5' || normalized === 'news') return 'news';
  return null;
}

function createFrontmatter(title, type) {
  const date = getCurrentDate();
  return `---
title: "${title}"
description: "Brief description of this ${type}"
date: ${date}
type: ${type}
status: draft
tags:
  - ${type}
author: "Your Name"
---
`;
}

async function main() {
  console.log('\n📝 Create New Content\n');
  console.log('Content types:');
  console.log('1. policy    - Policy documentation');
  console.log('2. standard  - Standards and patterns');
  console.log('3. tool      - Tools documentation');
  console.log('4. communication - Communications');
  console.log('5. news      - News and announcements\n');

  let contentType;
  let validSelection = false;

  while (!validSelection) {
    const typeAnswer = await question('Select content type (1-5 or type name): ');
    contentType = getContentTypeKey(typeAnswer);

    if (contentType && CONTENT_TYPES[contentType]) {
      validSelection = true;
    } else {
      console.log('❌ Invalid selection. Please choose 1-5 or type a valid name.\n');
    }
  }

  const title = await question('Content title: ');

  if (!title || title.trim().length === 0) {
    console.error('❌ Title is required\n');
    rl.close();
    process.exit(1);
  }

  const typeConfig = CONTENT_TYPES[contentType];
  const slug = slugify(title);
  const fileName = `${slug}.md`;
  const filePath = path.join(CONTENT_DIR, typeConfig.dir, fileName);
  const fileDir = path.dirname(filePath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, { recursive: true });
    console.log(`📁 Created directory: ${path.relative(process.cwd(), fileDir)}`);
  }

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.error(`❌ File already exists: ${path.relative(process.cwd(), filePath)}\n`);
    rl.close();
    process.exit(1);
  }

  // Create file with frontmatter
  const frontmatter = createFrontmatter(title, typeConfig.type);
  const content = `${frontmatter}
## Visão Geral

Adicione uma visão geral do conteúdo aqui.

## Seções Principais

### Seção 1

Conteúdo da primeira seção.

### Seção 2

Conteúdo da segunda seção.

## Conclusão

Resumo e próximos passos.
`;

  fs.writeFileSync(filePath, content, 'utf-8');

  console.log(`\n✅ Content created successfully!\n`);
  console.log(`📄 File: ${path.relative(process.cwd(), filePath)}`);
  console.log(`📝 Type: ${typeConfig.description}`);
  console.log(`🏷️  Slug: ${slug}`);
  console.log(`📅 Date: ${getCurrentDate()}\n`);
  console.log('Next steps:');
  console.log('1. Edit the file and add your content');
  console.log('2. Update the frontmatter (description, tags, author)');
  console.log('3. Change status from "draft" to "published" when ready\n');

  rl.close();
}

main().catch((error) => {
  console.error('❌ Error:', error.message);
  rl.close();
  process.exit(1);
});
