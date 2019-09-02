const dgram = require('dgram');
const settings = require('./settings');
const message = Buffer.from('Hello World!');
const client = dgram.createSocket('udp4');

client.bind(settings.CLIENT_PORT, settings.CLIENT_HOST);

client.send(message, settings.SERVER_PORT, settings.SERVER_HOST, (err) => {
  client.close();
});
