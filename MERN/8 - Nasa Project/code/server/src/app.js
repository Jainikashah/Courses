const express = require('express')
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const app = express()

// parse incoming json to a js object.
app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

// By doing below, cors will allow all cross-origin requests.
// app.use(cors())

app.use(cors({
    // we can have multiple sites in our whitelisting; refer docs of cors npm package.
    origin: 'http://localhost:3000'
}))
app.use(morgan('combined'))

// app.use(planetsRouter)
// app.use(launchesRouter)

// shorter way; no need to write /launches every route of launch.
app.use('/launches', launchesRouter)
app.use('/planets', planetsRouter)



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
module.exports = app