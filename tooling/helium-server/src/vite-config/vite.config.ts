import react from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';

const tiConfig: Record<any, any> = {
  plugins: [react(), ssr()],
  optimizeDeps: {
    include: ['dayjs']
  }
};

export default tiConfig;
