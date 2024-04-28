const { send } = require('./request')
const { read } = require('./response')
const { TIMEOUT } = require('./request')  // to see the caching

function request(url, data){
    send(url, data)
    return read()
}

console.log(request('www', 'helo'))
console.log(TIMEOUT)

console.log("require cache obj", require.cache)