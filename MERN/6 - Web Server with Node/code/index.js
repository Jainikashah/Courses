// // 1. Creating our first server
const http = require('http');
const PORT = 3000; 
// const server = http.createServer((req, res) => {
//     // req - has the data, headers that client sent. Its a readable stream
//     // res - we can add data, headers to it that needs to send back to client - a writeable stream

//     res.writeHead(200, {
//         'Content-Type': 'text/plain',

//         // // lets us pass js obj
//         // 'Content-Type': 'application/json'
//     })

//     // needs to be written for each request we get. Even if its empty
//     res.end('Helloo! I am your first server talking..!'); 

//     // for application/json content type
//     res.end(JSON.stringify({
//         id: "1",
//         name: "jainika"
//     }))
// });

// server.listen(PORT, () => {
//     console.log("Listening on port ", PORT)
// });




// // 2. Creating endpoints
// const server = http.createServer();
// server.on('request', (req, res) => {
//     if(req.url === '/welcome'){
//         res.writeHead(200, {
//             'Content-Type': 'text/plain' 
//         });
//         res.end("Hellooo, This is your first server talking..!")
//     }
//     else if(req.url === '/friends'){
//         // another way of defining headers & statusCode. If we dont mention any statuscode, it by defaults to 200.
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html')
//         res.write('<html>')
//         res.write('<body>');
//         res.write('<ul>')
//         res.write('<li> Friend 1 </li>')
//         res.write('<li> Friend 2 </li>')
//         res.write('</ul>')
//         res.write('</body>')
//         res.write('</html')
//         res.end()
//     }else{
//         res.writeHead(400, {
//             'Content-Type': 'text/plain' 
//         });
//         res.end()
//     }
// })

// server.listen(PORT, () => {
//     console.log("Listening on port ", PORT)
// });



// // 3. Parameterized URLs
// const server = http.createServer();
// const friendDB = [
//     {
//         id: "0",
//         name: "N. Modi"
//     },
//     {
//         id: "1",
//         name: "Karishma Mehta"
//     },
//     {
//         id: "2",
//         name: "Ashneer Grover"
//     },
//     { 
//         id: "3",
//         name: "Aman gupta"
//     }
// ]

// server.on('request', (req, res) => {
//     const items = req.url.split('/')
//     if(req.url === '/welcome'){
//         res.writeHead(200, {
//             'Content-Type': 'text/plain' 
//         });
//         res.end("Hellooo, This is your first server talking..!")
//     }
//     else if(items[1] == 'friends' ){
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json')
//         if(items.length == 3) {
//             // we'll get the url param as string, so + will convert it into number
//             const frIndex = +items[2]
//             res.end(JSON.stringify(friendDB[frIndex]))
//         }else{
//             res.end(JSON.stringify(friendDB))
//         }
//     }
//     else{
//         res.writeHead(400, {
//             'Content-Type': 'text/plain' 
//         });
//         res.end()
//     }
// })


// // 4. POsting data to server
const server = http.createServer();
const friendDB = [
    {
        id: "0",
        name: "N. Modi"
    },
    {
        id: "1",
        name: "Karishma Mehta"
    },
    {
        id: "2",
        name: "Ashneer Grover"
    },
    { 
        id: "3",
        name: "Aman gupta"
    }
]
server.on('request', (req, res) => {
    const items = req.url.split('/')

    if(req.method === 'POST' && items[1] == 'friends' ){
        // we get data as a buffer so converting it to string.
        req.on("data", (data) => {
            const newFriend = data.toString()
            console.log(`request data: ${newFriend}`)
            friendDB.push(JSON.parse(newFriend))
        });
        // readable.pipe(writeable) - here, we'll get the data we passed in browser.
        req.pipe(res)
        res.end();
    }
    if(req.method === 'GET' && req.url === '/welcome'){
        res.writeHead(200, {
            'Content-Type': 'text/plain' 
        });
        res.end("Hellooo, This is your first server talking..!")
    }
    else if(req.method === 'GET' && items[1] == 'friends' ){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        if(items.length == 3) {
            // we'll get the url param as string, so + will convert it into number
            const frIndex = +items[2]
            res.end(JSON.stringify(friendDB[frIndex]))
        }else{
            res.end(JSON.stringify(friendDB))
        }
    }
    else{
        res.writeHead(400, {
            'Content-Type': 'text/plain' 
        });
        res.end()
    }
})



server.listen(PORT, () => {
    console.log("Listening on port ", PORT)
});
