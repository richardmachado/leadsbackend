

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('../users/users-router');
const loginRouter = require('../auth/auth-router');
const leadsRouter = require('../leads/leads-router');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', loginRouter);

server.use('/api/users', usersRouter);
server.use('/api/leads', leadsRouter);



server.get('/', (req, res) => {
	res.send("<h1>server is running</h1>");
});



module.exports = server;
