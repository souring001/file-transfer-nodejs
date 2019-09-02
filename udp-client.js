const dgram = require('dgram');
const settings = require('./settings');
const message = Buffer.from('Hello World!');
const client = dgram.createSocket('udp4');
client.send(message, settings.dstPort, settings.dstIp, (err) => {
  client.close();
});
