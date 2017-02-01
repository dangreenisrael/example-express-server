const express = require('express');
const app = express();
const server = require('http').createServer(app);
module.exports = { app, server };

require('./routes');
require('./socketHandler');
server.listen(process.env.PORT || 5000);
