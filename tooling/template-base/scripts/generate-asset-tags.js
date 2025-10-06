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

  // Detect which routing mode is being used based on entry file sizes
  // Client routing entry is ~10x larger than server routing entry
  let useClientRouting = false;
  let clientEntrySize = 0;
  let serverEntrySize = 0;

  Object.keys(assets).forEach(key => {
    const asset = assets[key];
    if (!asset.file) return;

    if (key.includes('entry-client-routing')) {
      const filePath = path.join(__dirname, '..', 'dist', 'client', asset.file);
      if (fs.existsSync(filePath)) {
        clientEntrySize = fs.statSync(filePath).size;
      }
    } else if (key.includes('entry-server-routing')) {
      const filePath = path.join(__dirname, '..', 'dist', 'client', asset.file);
      if (fs.existsSync(filePath)) {
        serverEntrySize = fs.statSync(filePath).size;
      }
    }
  });

  // Client routing entry is significantly larger (contains full routing logic)
  // Server routing entry is small (just hydration)
  if (clientEntrySize > 0 && serverEntrySize > 0) {
    useClientRouting = clientEntrySize > serverEntrySize * 5; // Client entry is at least 5x larger
  }

  console.log(`Detected routing mode: ${useClientRouting ? 'Client' : 'Server'} Routing`);
  console.log(`  Client entry size: ${clientEntrySize} bytes`);
  console.log(`  Server entry size: ${serverEntrySize} bytes`);

  // Look for the main client entry and other entry files
  Object.keys(assets).forEach(key => {
    const asset = assets[key];
    if (!asset.file) return;

    // Check if it's a client-side JavaScript file
    // Include: entry files, renderer client, and essential page bundles
    if (asset.file.endsWith('.js')) {
      // Include ONLY the appropriate entry based on detected routing mode
      const isClientEntry =
        key.includes('entry-client-routing') || key.includes('/client-routing-runtime/entry');
      const isServerEntry =
        key.includes('entry-server-routing') || key.includes('/server-routing-runtime/entry');

      if ((useClientRouting && isClientEntry) || (!useClientRouting && isServerEntry)) {
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
