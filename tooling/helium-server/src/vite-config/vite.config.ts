import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

const tiConfig: Record<any, any> = {
  plugins: [react(), ssr()],
  optimizeDeps: {
    include: ['dayjs', 'universal-cookie']
  },
  envPrefix: 'HELIUM_PUBLIC_'
};

export default tiConfig;
