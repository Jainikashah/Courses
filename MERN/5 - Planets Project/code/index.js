// const parse = require('csv-parse')
const { parse } = require('csv-parse')
const fs = require('fs');


// // 1. CONVERTS CSV INTO ARRAY OF OBJECTS
// const results = [];

// // createReadStream creates a readable stream that emits events that you can listen to
// fs.createReadStream('./data.csv')
// // pipe - creates a readable stream to writeable stream. here it takes the value of createReadStream and pipe it into writeable and assign the values. 
// // readable.pipe(writeable)
// // 
// .pipe(parse({
//     comment: "#",
//     columns: true
// }))
// .on('data', data => {
//     results.push(data)
// })
// .on('end', () => {
//     console.log("done processing");
//     console.log(results)   
// })
// .on('error', err => {
//     console.log("Oops..", err)
// })



// // 2. A LIST OF HABITUAL PLANETS:-
const habitalPlanets = [];

const isHabitualPlanet = planet => {
    // some code that specifies if a planet is habitable or not.
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

fs.createReadStream('./data.csv')
.pipe(parse({
    comment: "#",
    columns: true
}))
.on('data', data => {
    if(isHabitualPlanet(data)) habitalPlanets.push(data)
})
.on('end', () => {
    console.log("done processing");
    console.log("names: ", habitalPlanets.map(planet => {
        return planet['kepler_name']
    }))
    console.log("Total no. of habitable planets: ", habitalPlanets.length)  
})
.on('error', err => {
    console.log("Oops..", err)
})

