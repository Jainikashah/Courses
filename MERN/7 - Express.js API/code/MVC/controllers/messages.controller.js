const path = require('path')
function getMessages(req, res) {
    res.send('<ul><li>helo albert</li></ul>')
}

// send file needs absolute path. and so we use path lib, so that will work on every OS. like windows uses:- fol1\file2. whereas linux & mac uses fol1/file2
// __dirname - points to the controller folder ie. the current folder this file is in
// .. means that our file is 1 level up the folder.
function getImage(req, res){
    console.log(__dirname)
    res.sendFile(path.join(__dirname, '..', 'public', 'img.png'))
}
function postMessage(req, res) {
    console.log("Updating messages")
}

module.exports = {
    getMessages,
    postMessage,
    getImage
}