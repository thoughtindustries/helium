import react from '@vitejs/plugin-react';

// Base Helium Vite configuration (without vike to avoid CJS/ESM loading issues)
// This config contains required settings that all Helium apps should use
export const baseConfig: Record<any, any> = {
  plugins: [react()],
  build: {
    manifest: true // REQUIRED: Generate manifest.json for deployment
  },
  optimizeDeps: {
    include: ['dayjs', 'universal-cookie']
  },
  envPrefix: 'HELIUM_PUBLIC_', // Only variables with this prefix are exposed to client
  ssr: {
    // REQUIRED: Bundle these ESM-only packages for SSR compatibility
    noExternal: ['@apollo/client', 'graphql', 'use-debounce']
  },
  resolve: {
    dedupe: ['@apollo/client'] // Prevent multiple Apollo instances
  }
};

// Factory function to create config with vike plugin
// Uses dynamic import to avoid ESM/CJS compatibility issues
// Templates call this to get the complete config
export async function createVikeConfig() {
  try {
    const vikeModule = await import('vike/plugin');
    const vike = vikeModule.default || vikeModule;

    // Deep clone baseConfig to prevent shared references between consumers
    // Note: We can't clone plugins (they contain functions), so we handle them separately
    // This ensures that if one consumer modifies nested objects (e.g., resolve.alias),
    // it won't affect other consumers or the original baseConfig
    const { plugins, ...serializableConfig } = baseConfig;
    const clonedConfig = structuredClone(serializableConfig);

    return {
      ...clonedConfig,
      plugins: [...plugins, vike()] // Use original plugins array (safe - replaced not mutated)
    };
  } catch (error) {
    // FAIL FAST: If vike can't load, throw a clear error
    throw new Error(
      `Failed to load vike plugin. SSR will not work without it.\n` +
        `Original error: ${error instanceof Error ? error.message : String(error)}\n\n` +
        `This is usually caused by:\n` +
        `1. vike not being installed (run: npm install)\n` +
        `2. ESM/CJS compatibility issues with dependencies\n` +
        `3. Corrupted node_modules (try: rm -rf node_modules && npm install)`
    );
  }
}

// Export legacy tiConfig for backwards compatibility
// Deprecated: Use createVikeConfig() instead
export const tiConfig = baseConfig;
export default tiConfig;
