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

    // Check if it's a client-side JavaScript file
    // Include: entry files, renderer client, and essential page bundles
    if (asset.file.endsWith('.js')) {
      // Always include entry-client-routing (main entry)
      if (key.includes('entry-client-routing') || key.includes('/client-routing-runtime/entry')) {
        // Add first (main entry)
        const scriptPath = asset.file.startsWith('assets/')
          ? `/${asset.file}`
          : `/assets/${asset.file}`;
        if (!assetTags.scripts.includes(scriptPath)) {
          assetTags.scripts.unshift(scriptPath);
        }
      }
      // Always include the renderer default page client (main React bundle)
      else if (
        key.includes('renderer_default.page.client') ||
        key.includes('renderer/default.page.client') ||
        asset.file.includes('renderer_default.page.client')
      ) {
        // Add after entry
        const scriptPath = asset.file.startsWith('assets/')
          ? `/${asset.file}`
          : `/assets/${asset.file}`;
        if (!assetTags.scripts.includes(scriptPath)) {
          assetTags.scripts.push(scriptPath);
        }
      }
    }
  });

  // Look for CSS files
  Object.keys(assets).forEach(key => {
    const asset = assets[key];
    if (asset.file && asset.file.endsWith('.css')) {
      const stylePath = asset.file.startsWith('assets/')
        ? `/${asset.file}`
        : `/assets/${asset.file}`;
      assetTags.styles.push(stylePath);
    }
  });

  // Write asset-tags.json
  fs.writeFileSync(outputPath, JSON.stringify(assetTags, null, 2));
  console.log('Generated asset-tags.json with:', assetTags);
} catch (error) {
  console.error('Error generating asset tags:', error);
  process.exit(1);
}
