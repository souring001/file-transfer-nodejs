const dgram = require('dgram');
const fs = require('fs');
const settings = require('./settings');
const server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log('server error:\n' + err.stack);
  server.close();
});

server.on('message', (file, rinfo) => {
  fs.writeFileSync('./files/dst/file1', file);
  console.log('server got file from ' + rinfo.address + ':' + rinfo.port);
});

server.on('listening', () => {
  const address = server.address();
  console.log('server listening '+ address.address + ':' + address.port);
});

server.bind(settings.SERVER_PORT, settings.SERVER_HOST);
