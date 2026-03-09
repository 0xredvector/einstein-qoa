import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const config = {
  distDir: path.join(__dirname, 'dist'),
  outputDir: __dirname,
  files: [
    {
      source: 'index.html',
      output: 'preview-home.html',
      title: 'Home'
    },
    {
      source: 'padroes/estrategia-tagging/index.html',
      output: 'preview-tagging.html',
      title: 'Tagging Strategy'
    }
  ]
};

// Helper function to find CSS file
function findCssFile(distDir) {
  const astroDir = path.join(distDir, '_astro');
  const files = fs.readdirSync(astroDir);
  const cssFile = files.find(f => f.startsWith('global.') && f.endsWith('.css'));
  if (!cssFile) {
    throw new Error('Global CSS file not found in dist/_astro/');
  }
  return cssFile;
}

// Helper function to read CSS content
function readCss(distDir, cssFilename) {
  const cssPath = path.join(distDir, '_astro', cssFilename);
  return fs.readFileSync(cssPath, 'utf8');
}

// Helper function to fix relative URLs
function fixRelativeUrls(html) {
  // Replace href="/path/" with href="#"
  html = html.replace(/href="\/[^"]*\/"/g, 'href="#"');
  // Replace href="/path.html" with href="#"
  html = html.replace(/href="\/[^"]*\.html"/g, 'href="#"');
  // But keep special links like sitemap, etc.
  html = html.replace(/href="#\/sitemap/g, 'href="/sitemap');
  
  return html;
}

// Helper function to inline CSS
function inlineCss(html, cssContent, cssFilename) {
  // Create style tag with CSS content
  const styleTag = `<style>${cssContent}</style>`;
  
  // Find and replace the link tag with the style tag
  const linkPattern = new RegExp(
    `<link[^>]*rel="stylesheet"[^>]*href="/_astro/${cssFilename.replace(/\./g, '\\.')}?"[^>]*>`,
    'i'
  );
  
  if (!linkPattern.test(html)) {
    console.warn(`Warning: Could not find CSS link for ${cssFilename}`);
  }
  
  return html.replace(linkPattern, styleTag);
}

// Main function
function createPreviews() {
  try {
    // Find CSS file
    const cssFilename = findCssFile(config.distDir);
    console.log(`Found CSS file: ${cssFilename}`);
    
    // Read CSS content
    const cssContent = readCss(config.distDir, cssFilename);
    console.log(`CSS file size: ${(cssContent.length / 1024).toFixed(2)} KB\n`);
    
    // Process each file
    config.files.forEach(({ source, output, title }) => {
      const sourcePath = path.join(config.distDir, source);
      const outputPath = path.join(config.outputDir, output);
      
      console.log(`Processing: ${source}`);
      
      // Read HTML
      let html = fs.readFileSync(sourcePath, 'utf8');
      
      // Inline CSS
      html = inlineCss(html, cssContent, cssFilename);
      
      // Fix relative URLs
      html = fixRelativeUrls(html);
      
      // Write output
      fs.writeFileSync(outputPath, html, 'utf8');
      
      // Get file size
      const stats = fs.statSync(outputPath);
      const sizeKb = (stats.size / 1024).toFixed(2);
      
      console.log(`✓ Created: ${output} (${sizeKb} KB)\n`);
    });
    
    console.log('Preview files created successfully!');
    
  } catch (error) {
    console.error('Error creating previews:', error.message);
    process.exit(1);
  }
}

// Run
createPreviews();
