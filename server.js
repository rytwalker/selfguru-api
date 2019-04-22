const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const messagesRoute = require('./routes/api/messages');
const usersRoute = require('./routes/api/users');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/messages', messagesRoute);
server.use('/api/users', usersRoute);

const port = process.env.PORT || 5000;

server.listen(port, console.log(`Server running on port: ${port}`));
