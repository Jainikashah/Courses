// 1....
// const { get } = require("https");

// get("https://www.google.com", res => {
//     res.on("data", chunk => {
//         console.log("chunkssss: ", chunk.toString())
//     })
//     res.on("end", () => {
//         console.log("no more data")
//     })
// })




// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.writeHead(200,
//         {
//             'Content-Type': 'text/plain'
//         })

//         res.end("hello")
// })

// server.listen(3000, () => {
//     console.log("Listening on port 3000")}
//     )



const http = require('http')
const server = http.createServer((req, res) => {

    if(req.method === "POST"){
        req.on("data", (data) => {
            console.log("Reques: ", data)
        })
    }
    else if(req.method === "GET" && req.url === '/friends'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        res.end("Hey, Hi I'm your friend")
    }else if(req.url === '/messages'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.write("<p>hello</p>")
        res.end()
    }else{
        res.statusCode = 404;
        res.end()
    }
})

server.listen(3000, () => {
    console.log("listening on port 3000")
})




