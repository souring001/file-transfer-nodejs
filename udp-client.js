const dgram = require('dgram');
const fs = require('fs');
const settings = require('./settings');
const client = dgram.createSocket('udp4');

const file = fs.readFileSync('./files/src/file1');
// console.log(file);

const message = Buffer.from('Hello World!');
// console.log(message);

client.bind(settings.CLIENT_PORT, settings.CLIENT_HOST);

client.send(file, settings.SERVER_PORT, settings.SERVER_HOST, (err) => {
  client.close();
});
