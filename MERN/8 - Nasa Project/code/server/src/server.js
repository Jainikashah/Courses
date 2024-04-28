const http = require('http')

// one way:-
// const express = require('express')
// const app = express()
// app.listen()

// another and more recommendable way:-
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model')
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
async function startServer(){
    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log(`Listening of port ${PORT}...`)
    })
}

startServer()

