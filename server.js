const http = require('http');
const app = require('./app');
require('dotenv').config();

require('./mailer'); 

const port = process.env.PORT || 8000;

const server = http.createServer(app); 

server.listen(port);