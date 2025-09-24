#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Read the Vike assets.json to find the main entry points
const assetsPath = path.resolve(__dirname, '../dist/assets.json');
const outputPath = path.resolve(__dirname, '../dist/asset-tags.json');

try {
  // Check if assets.json exists
  if (!fs.existsSync(assetsPath)) {
    console.error('assets.json not found at:', assetsPath);
    process.exit(1);
  }

  // Read assets.json
  const assets = JSON.parse(fs.readFileSync(assetsPath, 'utf-8'));

  // Find the main client entry and CSS files
  const assetTags = {
    scripts: [],
    styles: []
  };

  // Look for the main client entry and other entry files
  Object.keys(assets).forEach(key => {
    const asset = assets[key];
    if (!asset.file) return;

    // Check if it's a client-side entry file - Vike puts these under node_modules
    if (
      (key.includes('/client-routing-runtime/entry') ||
        key.includes('renderer_default.page.client') ||
        key.includes('entry-client-routing')) &&
      asset.file.endsWith('.js')
    ) {
      assetTags.scripts.push(`/assets/${asset.file}`);
    }
  });

  // Look for CSS files
  Object.keys(assets).forEach(key => {
    const asset = assets[key];
    if (asset.file && asset.file.endsWith('.css')) {
      assetTags.styles.push(`/assets/${asset.file}`);
    }
  });

  // Write asset-tags.json
  fs.writeFileSync(outputPath, JSON.stringify(assetTags, null, 2));
  console.log('Generated asset-tags.json with:', assetTags);
} catch (error) {
  console.error('Error generating asset tags:', error);
  process.exit(1);
}
