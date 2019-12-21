const TCPRelay = require('./tcprelay').TCPRelay;
const local = require('commander');
const constants = require('./constants');
const config = require('./config.json');

local
    .version(constants.VERSION)
    .option('-m --method <method>', 'encryption method, default: aes-256-cfb')
    .option('-k --password <password>', 'password')
    .option('-s --server-address <address>', 'server address')
    .option('-p --server-port <port>', 'server port, default: 8388')
    .option('-u --websocket-uri <websocketUri>', 'websocket uri')
    .option('-b --local-address <address>', 'local binding address, default: 127.0.0.1')
    .option('-l --local-port <port>', 'local port, default: 1080')
    .option('--tls <tls>', 'http tls, default: false')
    .option('--log-level <level>', 'log level(debug|info|warn|error|fatal)', /^(debug|info|warn|error|fatal)$/i, 'info')
    .option('--log-file <file>', 'log file')
    .parse(process.argv);

var options = {
    localAddress: local.localAddress || config.localAddress || '127.0.0.1',
    localPort: local.localPort || config.localPort || 1080,
    serverAddress: local.serverAddress || config.serverAddress || '127.0.0.1',
    serverPort: local.serverPort || config.serverPort || 8388,
    websocketUri: local.websocketUri || config.websocketUri || '/websocket',
    password: local.password || config.password || 'p@ssword',
    method: local.method || config.method || 'aes-256-cfb',
    tls: local.tls || false,
};
// console.log(options);
var relay = new TCPRelay(options, true);

relay.setLogLevel(local.logLevel);
relay.setLogFile(local.logFile);
relay.bootstrap();
