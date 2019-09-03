const net = require('net');
const fs = require('fs');
const settings = require('./settings');

const fileStream = fs.createWriteStream('./files/dst/file1');

const server = net.createServer((socket) => {
  // 'connection' listener
  const clientAddress = socket.remoteAddress + ':' + socket.remotePort;
  console.log('client connected from ' + clientAddress);

  socket.pipe(fileStream);

  socket.on('end', () => {
    socket.end();
    console.log('client disconnected');
  });

  socket.on('data', (data) => {
    console.log(data);
    // socket.write(data);
  });
});

server.on('error', (err) => {
  throw err;
});

server.listen(settings.SERVER_PORT, settings.SERVER_HOST, () => {
  const address = server.address();
  console.log(`server bound ${address.address}:${address.port}`);
});
