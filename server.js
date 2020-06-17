const { parse } = require('url')
const next = require('next')
const express = require('express');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// 运行 dev 模式时，监听的端口
const PORT = process.env.PORT || 8040;

app.prepare().then(() => {
  const server = express();
  // const parsedUrl = parse(req.url, true)
  // const { pathname, query } = parsedUrl
  
  server.get('/', (req, res) => {
    const actualPage = '/home';
    app.render(req, res, actualPage)
  });
  
  server.get('*', (req, res) => {
    return handle(req, res)
  });
  
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`)
  })
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1)
});