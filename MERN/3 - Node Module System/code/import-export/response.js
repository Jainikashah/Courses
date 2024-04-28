function decrypt(){
    return "decrypted data"
}

function read(){
    return decrypt()
}

console.log(module)  // prints all the info abt the current module. Like isLoaded, exports, etc.
module.exports = {
    read
}