#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const socketio = require('socket.io');
const WebSocket = require('../utils/sockets');
const debug = require('debug')('express-training:server');
const http = require('http');
const logger = require('../config/logger');
const dotenv = require("dotenv");
dotenv.config();

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
/**
 * Create HTTP server.
 */

const server = http.createServer(app);
const io = socketio(server);

/**
 * Create event on socket.io
 */
const client = new WebSocket();
client.connection(io);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  logger.Info(`🚀 Listening on port ${port}, visit http://localhost:${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
