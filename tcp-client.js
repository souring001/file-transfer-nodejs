const net = require('net');
const settings = require('./settings');

const client = net.createConnection(settings.SERVER_PORT, settings.SERVER_HOST, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('disconnected from server');
});
