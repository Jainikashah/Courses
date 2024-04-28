const friendsDB = require('../models/friends.model');
function getFriends(req, res) {
    res.json(friendsDB)
}

function postFriend(req, res){
    if(req.body.name){
        const newFriend = {
            name: req.body.name,
            id: friendsDB.length
        }
        friendsDB.push(newFriend)
        res.json(newFriend)
    }else{
        return res.status(400).json({
            error: 'Name property doesnt exist'
        })
    }
}


function getFriend(req, res) {
    const id = +req.params.friendId;
    const friend = friendsDB[id]
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(400).json({
            error: "Friend doesnt exist"
        })
    }
}

module.exports = {
    getFriend,
    getFriends,
    postFriend
}
