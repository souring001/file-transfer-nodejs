const net = require('net');
const settings = require('./settings');

const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen({ host: settings.SERVER_HOST, port: settings.SERVER_PORT }, () => {
  const address = server.address();
  console.log(`server bound ${address.address}:${address.port}`);
});
