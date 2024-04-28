const launchesDatabase = require("./launches.mongo");
const planets = require("./planets.mongo");
const DEFAULT_FLIGHT_NUMBER = 100;
// map works a lot like js object but it lets us mp any value to any other value. Like no, string, even functions could be the key. It also preservs the order we entered key-value in, which is not guaranteed in js obj.
const launches = new Map()


// EXAMPLE MODEL
// const launch = {
//     flightNumber: 100,
//     mission: 'Kepler mx',
//     rocket: 'Explorer ISI',
//     launchDate: new Date("Decemeber 27, 2030"),
//     target: 'Kepler-442 b',
//     customer: ['NASA', 'ZTM'],
//     upcoming: true,
//     success: true
// };
// // { 100: { ... }}
// launches.set(launch.flightNumber, launch);


let latestFlightNumber = 100;

async function getAllLaunches(){
    // takes the value of launches and convert it into an array.
    // console.log(Array.from(launches.values()))
    
    // in local memmory code
    // return Array.from(launches.values())

    // mongo db code
    return await launchesDatabase.find({}, { '_id': 0, '__v': 0 })
}

// function addNewLaunch(launch){
//     // incrementing latestflightno as it the unique value in our data.
//     latestFlightNumber++;
//     launches.set(
//         latestFlightNumber, 
//         // assigning the data we get from the client to the data thta is defined in server which tpgether will create our entire data object.
//         Object.assign(launch, {
//             flightNumber: latestFlightNumber,
//             customer: ['NASA', 'ZTM'],
//             upcoming: true,
//             success: true
//         }) )    
// }


async function scheduleNewLaunch(launch){
    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['NASA', 'ZTM'],
        flightNumber: await getLatestFlightNumber() + 1
    })
    await saveLaunch(newLaunch)
}


async function abortLaunch(launchId){
    // const aborted = launches.get(launchId)
    // aborted.upcoming = false;
    // aborted.success = false
    // return aborted

    const aborted =  await launchesDatabase.updateOne({
        flightNumber: launchId
    }, {
        upcoming: false,
        success: false
    })
    return aborted.modifiedCount === 1;
}

async function existLaunch(launchId){
    return await launchesDatabase.findOne({
        flightNumber: launchId
    })
}

async function saveLaunch(data){
    const planet = await planets.findOne({
        keplerName: data.target
    })
    console.log(data, planet)
    if(!planet){
        throw new Error('No matching planets found')
    }

    // await launchesDatabase.updateOne({
    //     flightNumber: data.flightNumber,
    // }, data, {
    //     upsert: true
    // })
    
    // will remove setOnInsert property from reponse
    await launchesDatabase.findOneAndUpdate({
        flightNumber: data.flightNumber,
    }, data, {
        upsert: true
    })
}

async function getLatestFlightNumber() {
    const latestLaunch = await launchesDatabase
    .findOne({})
    .sort('-flightNumber')

    if(!latestLaunch) return DEFAULT_FLIGHT_NUMBER

    return latestLaunch.flightNumber;
}

module.exports = {
    launches,
    getAllLaunches,
    // addNewLaunch,
    abortLaunch,
    scheduleNewLaunch,
    existLaunch
}