const net = require('net');
const settings = require('./settings');

const client = net.createConnection({ host: settings.SERVER_HOST, port: settings.SERVER_PORT }, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world!\r\n');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});
