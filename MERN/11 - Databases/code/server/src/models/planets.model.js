const { parse } = require('csv-parse')
const planets = require('./planets.mongo')

const fs = require('fs');
const habitalPlanets = [];

const isHabitualPlanet = planet => {
    // some code that specifies if a planet is habitable or not.
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

function loadPlanetsData(){
    return new Promise((resolve, reject) => {
        // because we are running this code in server.js surprisingly its taking the path from there.
        fs.createReadStream('./data/data.csv')
        .pipe(parse({
            comment: "#",
            columns: true
        }))
        .on('data', async (data) => {
            // this will push data in our local memory.
            // if(isHabitualPlanet(data)) habitalPlanets.push(data)

            // // this will push data in mongo db
            // if(isHabitualPlanet(data)) await planets.create({
            //     keplerName: data.kepler_name
            // })

             // this will push data in mongo db
             if(isHabitualPlanet(data)) savePlanet(data)
        })
        .on('end', async () => {
            console.log("done processing");
            // console.log("Total no. of habitable planets: ", habitalPlanets.length)
            const totalHabitablePlanets = (await getAllPlanets()).length 
            console.log('total no. of habitable planets', totalHabitablePlanets)
            console.log("in") 
            resolve()
        })
        .on('error', err => {
            console.log("Oops..", err)
            console.log("in error") 
            reject(err)
        })
    }) 
}

async function getAllPlanets(){
    return await planets.find({}, {
        '__v': 0, '_id': 0
    })
}

async function savePlanet(planet){
    try {
        await planets.updateOne({
            keplerName: planet.kepler_name
        }, {
            keplerName: planet.kepler_name
        }, {
            upsert: true
        })
    }catch(err) { 
        console.error(`couldn't save planet ${err} `)
    }
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
}