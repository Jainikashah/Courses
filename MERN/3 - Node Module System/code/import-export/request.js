const TIMEOUT = 500;
function encrypt(data){
    return "encrypted data"
}

function send(url, data){
    console.log(`Sending ${encrypt(data)} to ${url}`)
}

module.exports = {
    send,
    TIMEOUT
}
console.log("in request js file")