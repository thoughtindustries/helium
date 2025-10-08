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

  // Detect which routing mode is being used by reading the server bundle
  let useClientRouting = false;

  // Try to read the actual routing mode from the server bundle
  const serverEntryPath = path.join(process.cwd(), 'dist', 'server', 'entry.mjs');
  if (fs.existsSync(serverEntryPath)) {
    const serverEntry = fs.readFileSync(serverEntryPath, 'utf-8');
    const match = serverEntry.match(/"usesClientRouter":\s*(true|false)/);
    if (match) {
      useClientRouting = match[1] === 'true';
      console.log(
        `Detected routing mode from server bundle: ${
          useClientRouting ? 'Client' : 'Server'
        } Routing`
      );
    }
  }

  // Fallback: Check if both entry files exist (they always do in Vike)
  if (!fs.existsSync(serverEntryPath)) {
    console.log(
      'Warning: Could not detect routing mode from server bundle, defaulting to Server Routing'
    );
    useClientRouting = false;
  }

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
