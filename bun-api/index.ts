import { env } from "bun";

const server = Bun.serve({
    port: env.PORT || 3000,
    async fetch(req) {
        const { method } = req;
        const { pathname } = new URL(req.url);

        if(method == 'GET' && pathname == '/hello') {
            return new Response('Hello, World!', { status: 200 });
        }

        return new Response('Not found', { status: 404 });
    }
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);