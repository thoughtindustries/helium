import react from '@vitejs/plugin-react';

// Create base config without vike
const baseConfig: Record<any, any> = {
  plugins: [react()],
  build: {
    manifest: true // Generate manifest.json for deployment
  },
  optimizeDeps: {
    include: ['dayjs', 'universal-cookie']
  },
  envPrefix: 'HELIUM_PUBLIC_'
};

// Export an async function that adds vike dynamically
export async function createTiConfig() {
  try {
    // Dynamically import vike to avoid CJS/ESM conflicts
    const vikeModule = await import('vike/plugin');
    const vike = vikeModule.default || vikeModule;
    baseConfig.plugins.push(vike());
  } catch (error) {
    console.warn('Failed to load vike plugin:', error);
    // Continue without vike if it fails to load
  }
  return baseConfig;
}

// Export both for compatibility
export default baseConfig;
export { baseConfig as tiConfig };
