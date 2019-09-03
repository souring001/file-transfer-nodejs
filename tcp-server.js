const net = require('net');
const settings = require('./settings');

const server = net.createServer((socket) => {
  // 'connection' listener
  const clientAddress = socket.remoteAddress + ':' + socket.remotePort;
  console.log('client connected from ' + clientAddress);

  socket.on('end', () => {
    console.log('client disconnected');
  });
  socket.write('hello ');

  socket.on('data', (data) => {
    socket.write(data);
    socket.write('!');
  });

  socket.on('end', () => {
    socket.end();
  });
  // c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(settings.SERVER_PORT, settings.SERVER_HOST, () => {
  const address = server.address();
  console.log(`server bound ${address.address}:${address.port}`);
});
