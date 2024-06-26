const express = require('express');
const messageController = require('../controllers/messages.controller');

const messageRouter = express.Router()
messageRouter.get('/', messageController.getMessages)
messageRouter.get('/image', messageController.getImage)
messageRouter.post('/', messageController.postMessage)

module.exports = messageRouter