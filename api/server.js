const express = require('express');
const cors = require('cors');
const server = express();
const restrict = require('../auth/restricted-middleware');
const UserRouter = require('../users/user-router');
const StudentsRouter = require('../students/students-router');
const MessagesRouter = require('../messages/messages-router');
const ProjectsRouter = require('../projects/projects-router');

server.use(express.json());
server.use(cors());

server.use('/users', UserRouter);
server.use('/students', restrict, StudentsRouter);
server.use('/messages', restrict, MessagesRouter);
server.use('/projects', restrict, ProjectsRouter);
// global middleware - the restrict variable applies it to every single endpoint

server.get('/', (req, res) => {
	res.send('Is this thing on?');
});

module.exports = server;
