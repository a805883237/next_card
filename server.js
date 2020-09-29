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

  // 将路径A，导向路径B
  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // 设置路由重定向
  // const redirects = [
  //   { from: '/old-link-1', to: '/new-link-1' },
  //   { from: '/old-link-2', to: 'https://externalsite.com/new-link-2' },
  // ]
  // redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
  //   server[method](from, (req, res) => {
  //     res.redirect(type, to)
  //   })
  // })
  
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

// 报错退出进程
// process.on('unhandledRejection', error => {
//   console.error('unhandledRejection', error);
//   process.exit(1) // To exit with a 'failure' code
// });