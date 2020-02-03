const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authn = require('../api/authMiddleware');
const userRouter = require('../api/userRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/userRouter', authn, userRouter);

module.exports = server