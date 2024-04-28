// // 1. get and post via express
// const express = require('express');

// const app = express()
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Helloooooooo')
// })

// app.get('/messages', (req, res) => {
//     res.send('<ul><li>helo albert</li></ul>')
// })

// app.get('/friends', (req, res) => {
//     res.send({
//         id: "1",
//         name: "sir issac"
//     })
// })

// app.post('/messages', (req, res) => {
//     console.log("Updating messages")
// })

// app.listen(PORT, () => {
//     console.log("Listening on port: ", PORT)
// })




// // // 2. Parametrized URLs.
// const friends = [
//     {
//         id: 0,
//         name: "Albert"
//     },
//     {
//         id: 1,
//         name: "Issac"
//     }
// ]

// const express = require('express');

// const app = express()
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Helloooooooo')
// })

// app.get('/friends', (req, res) => {
//     // .json makes sure the data is treated as a json object and not other content type like html/plain, etc
//     res.json(friends)
// })

// app.get('/friends/:friendId', (req, res) => {
//     const id = +req.params.friendId;
//     const friend = friends[id]
//     if(friend){
//         // either of below friend is ok
//         // res.json(friend)
//         res.status(200).json(friend)
//     }else{
//         res.status(400).json({
//             error: "Friend doesnt exist"
//         })

//         // for only sending the status with no data
//         // res.sendStatus(404)
//     }
// })

// app.listen(PORT, () => {
//     console.log("Listening on port: ", PORT)
// })




// // 3. Middle wares
// const friends = [
//     {
//         id: 0,
//         name: "Albert"
//     },
//     {
//         id: 1,
//         name: "Issac"
//     }
// ]

// const express = require('express');

// const app = express()
// const PORT = 3000;

// app.use((req, res, next) => {
//     const start = Date.now()
//     // console.log(`${req.method} ${req.url}`)
//     next()
//     const delta = Date.now() - start;
//     console.log(`It took ${delta} ms to run the function`)
// })


// app.get('/', (req, res) => {
//     res.send('Helloooooooo')
// })

// app.get('/friends', (req, res) => {
//     res.json(friends)
// })

// app.get('/friends/:friendId', (req, res) => {
//     const id = +req.params.friendId;
//     const friend = friends[id]
//     if(friend){
//         res.status(200).json(friend)
//     }else{
//         res.status(400).json({
//             error: "Friend doesnt exist"
//         })

//         // for only sending the status with no data
//         // res.sendStatus(404)
//     }
// })



// // 4. Sending a post request:-

// express.json() will look at the req content-type, and if it is application/json, then it will convert it to a js object. So that we dont always have to parse it, like we did earlier with native node.
// app.use(express.json());

// app.post('/friends', (req, res) => {
//     // no need to check for req.body because express.json() will always send js obj, even if data is empty or not json too. It will atleast pass {} empty obj. So below code wont break.
//     if(req.body.name){
//         const newFriend = {
//             name: req.body.name,
//             id: friends.length
//         }
//         friends.push(newFriend)
//         res.json(newFriend)
//     }else{
//         return res.status(400).json({
//             error: 'Name property doesnt exist'
//         })
//     }
// })




// // 5. MVC Pattern Code
// const messageController = require('./MVC/controllers/messages.controller');
// const friendsController = require('./MVC/controllers/friends.controller')

// app.use(express.json());

// app.get('/messages', messageController.getMessages)
// app.post('/messages', messageController.postMessage)

// app.get('/friends', friendsController.getFriends)
// app.post('/friends', friendsController.postFriend)
// app.get('/friends/:friendId', friendsController.getFriend)



// // 6. Express Routers:
// const friendsRouter = require('./MVC/routes/friends.router');
// const messageRouter = require('./MVC/routes/messages.router');

// app.use(express.json());

// app.use('/friends', friendsRouter);

// app.use('/messages', messageRouter)

// app.listen(PORT, () => {
//     console.log("Listening on port: ", PORT)
// })



// ----------------------------------- PRACTICE --------------------------------------

const express = require("express");
const app = express()

const PORT = 3000;
const friends = [
    {
        id: 0,
        name: "Dev1"
    },
    {
        id: 1,
        name: "Dev2"
    }
];


app.use((req, res, next) => {
    console.log("in md3")
    next();
})
app.use((req, res, next) => {
    console.log("in md1")
    next();
})
app.use((req, res, next) => {
    console.log("in md2")
    next();
})

app.get('/', (req, res) => {
    res.send("helllo")
})

app.get('/messages', (req, res) => {
    res.send("<ul><li>helooo</li><ul>")
})

app.get('/friends', (req, res) => {
    res.json(friends) 
})

app.get('/friends/:friendId', (req, res) => {
    const id = req.params.friendId
    const friend = friends[id]
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(400).json({
            error: "Friend doesnt exits"
        })
    }
})

app.post('/messages', (req, res) => {
    console.log("updating messages")
})

app.listen (PORT, () => {
    console.log("Listening on port ", PORT)
})