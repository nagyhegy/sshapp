const http = require('http');

const config = require('./config/app.js');
const router = require('./services/router.js')

const server = http.createServer(router  .handle);

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
}); 