const express = require('express');

const app = express()

function delay(duration){
    const startTime = Date.now()
    while(Date.now() - startTime < duration){
        // event loop is completely block
    }
}   

app.get('/', (req, res) => {
    res.send("Peformance Example")
})

app.get('/timer', (req, res) => {
    delay(9000)
    res.send("Ding Ding Ding");
})


app.listen(3000, () => {
    console.log("Listening on PORT ", 3000 )
})
