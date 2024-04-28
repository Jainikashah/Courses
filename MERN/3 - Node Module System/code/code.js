// 1 - USING HTTPS 
// const http = require('https');

// const req = http.request('https://www.google.com', res => {
//     res.on('data', (chunk) => {
//         console.log("chunks", chunk);
//     })
//     res.on('end', () => {
//         console.log("no more data");
//     })
// })

// req.end()



// 2 - USING GET METHOD
const { get } = require('https');
get('https://www.google.com', res => {
    res.on('data', (chunk) => {
        console.log("chunks", chunk);
    })
    res.on('end', () => {
        console.log("no more data");
    })
})