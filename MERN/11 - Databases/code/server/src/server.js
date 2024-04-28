const http = require('http')
const mongoose = require('mongoose');

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://admin-jainika:s6nsqPdI8bpKqJjD@cluster0.xjmjly0.mongodb.net/nasa?retryWrites=true&w=majority"

const server = http.createServer(app);

mongoose.connection.once("open", () => {
    console.log("MongoDB Connection Ready!")
})

mongoose.connection.on("error", (err) => {
    console.error("Oops! we have an error!", err)
})

async function startServer(){
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log(`Listening of port ${PORT}...`)
    })
}

startServer()
