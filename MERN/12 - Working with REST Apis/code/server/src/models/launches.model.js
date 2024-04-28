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

function getAllLaunches(){
    // takes the value of launches and convert it into an array.
    console.log(Array.from(launches.values()))
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    // incrementing latestflightno as it the unique value in our data.
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        // assigning the data we get from the client to the data thta is defined in server which tpgether will create our entire data object.
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customer: ['NASA', 'ZTM'],
            upcoming: true,
            success: true
        }) )    
}

function abortLaunch(launchId){
    const aborted = launches.get(launchId)
    aborted.upcoming = false;
    aborted.success = false
    return aborted
}

function existLaunch(launchId){
    return launches.has(launchId)
}

module.exports = {
    launches,
    getAllLaunches,
    addNewLaunch,
    abortLaunch,
    existLaunch
}