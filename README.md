# file-transfer-nodejs
File transfer server/client using TCP/UDP in Node.js


## Getting started
Create `settings.js`.

```js
exports.SERVER_PORT = 25252;
exports.CLIENT_PORT = 12345;
exports.SERVER_HOST = 'localhost';
exports.CLIENT_HOST = 'localhost';
```

Create `dst` directory.
```
mkdir files/dst
```

## Usage

TCP
```bash
node tcp-server.js &
node tcp-client.js
```

UDP
```bash
node udp-server.js &
node udp-client.js
```
