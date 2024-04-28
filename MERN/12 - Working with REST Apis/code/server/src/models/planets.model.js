const { parse } = require('csv-parse')
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
        .on('data', data => {
            if(isHabitualPlanet(data)) habitalPlanets.push(data)
        })
        .on('end', () => {
            console.log("done processing");
            console.log("Total no. of habitable planets: ", habitalPlanets.length) 
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

function getAllPlanets(){
    return habitalPlanets
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
}