import { read } from "./response.mjs"
import { send } from "./request.mjs"

const request = (url, data) => {
    send(url, data)
    return read()
}

console.log(request('www', 'helo'))