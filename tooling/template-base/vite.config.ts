import { tiConfig } from '@thoughtindustries/helium-server';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  return tiConfig();
});
