import reactRefresh from '@vitejs/plugin-react-refresh';
import ssr from 'vite-plugin-ssr/plugin';

const tiConfig: Record<any, any> = {
  plugins: [reactRefresh(), ssr()],
  optimizeDeps: {
    include: ['dayjs', 'universal-cookie']
  }
};

export default tiConfig;
