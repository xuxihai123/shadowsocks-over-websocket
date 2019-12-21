const TCPRelay = require('./tcprelay').TCPRelay;
const server = require('commander');
const constants = require('./constants');
const throng = require('throng');
const log4js = require('log4js');
const logger = log4js.getLogger('server');
const config = require('./config.json');

server
    .version(constants.VERSION)
    .option('-m --method <method>', 'encryption method, default: aes-256-cfb')
    .option('-k --password <password>', 'password')
    .option('-s --server-address <address>', 'server address')
    .option('-u --websocket-uri <websocketUri>', 'websocket uri')
    .option('-p --server-port <port>', 'server port, default: 8388')
    .option('--log-level <level>', 'log level(debug|info|warn|error|fatal)', /^(debug|info|warn|error|fatal)$/i, 'info')
    .option('--log-file <file>', 'log file')
    .parse(process.argv);

throng({ workers: 1, master: startMaster, start: startWorker });

function startMaster() {
    logger.info('started master');
}

function startWorker(id) {
    logger.info(`started worker ${id}`);
    const options = {
        serverAddress: server.serverAddress || config.serverAddress || '127.0.0.1',
        serverPort: server.serverPort || config.serverPort || 8388,
        websocketUri: server.websocketUri || config.websocketUri || '/websocket',
        password: server.password || config.password || 'p@ssword',
        method: server.method || config.method || 'aes-256-cfb',
    };
    // console.log(options);
    var relay = new TCPRelay(options, false);

    relay.setLogLevel(server.logLevel);
    relay.setLogFile(server.logFile);
    relay.setServerName('server-' + id);
    relay.bootstrap();
}
