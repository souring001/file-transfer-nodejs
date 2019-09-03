const net = require('net');
const fs = require('fs');
const settings = require('./settings');

const client = net.createConnection(settings.SERVER_PORT, settings.SERVER_HOST, () => {
  // 'connect' listener
  console.log('connected to server!');

  const fileStream = fs.createReadStream('./files/src/file1');
  fileStream.pipe(client);
  // client.write('world');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});
