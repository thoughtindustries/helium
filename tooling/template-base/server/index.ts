const isProduction = process.env.NODE_ENV === 'production';
const { setupHeliumServer } = require('@thoughtindustries/helium-server');
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  let viteDevServer;

  if (!isProduction) {
    const vite = require('vite');
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    });
  }

  const port = process.env.PORT || 3000;
  const app = await setupHeliumServer(root, viteDevServer, port);

  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
