const express = require('express');
const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router()

friendsRouter.use((req, res, next) => {
    console.log(req.ip) // sends us the ip address
    next()
})

// here, /friends inside app.use() becomes the root for all our friendsRouter methods. So if we omit /friends from friendsRouter methods, its fine.
friendsRouter.get('/', friendsController.getFriends)
friendsRouter.post('/', friendsController.postFriend)
friendsRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendsRouter