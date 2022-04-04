const isProduction = process.env.NODE_ENV === 'production';
import { setupHeliumServer } from '@thoughtindustries/helium-server';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import vite from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  let viteDevServer;

  if (!isProduction) {
    // const vite = require('vite');
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    });
  }

  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const app = await setupHeliumServer(root, viteDevServer, port);

  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
