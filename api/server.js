const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter');
const usersRouter = require('../resources/users/usersRouter');
const projectsRouter = require('../resources/projects/projectsRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/projects', projectsRouter);

server.get('/', (req, res) => {
        res.send({ message: "The server is alive!" });
  });

module.exports = server