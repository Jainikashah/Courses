const { getAllLaunches, addNewLaunch, abortLaunch, existLaunch } = require("../../models/launches.model")

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddLaunch(req, res) {
    const launch = req.body;

    console.log(launch)
    if(!launch.target || !launch.mission || !launch.rocket || !launch.launchDate){
        console.log("in if")
        return res.status(400).json({
            error: "Missing required launch property"
        })
    }

    launch.launchDate = new Date(launch.launchDate)

    // one way to check date:
    // if(launch.launchDate.toString() === 'Invalid Date'){

    // another and better way:
    // isNaN(actualDate) - returns false; bcoz it converts the value as date.valueOf() which retruns the timestamp only if the date is valid.  - January 16, 2023 (will work)
    // isNaN(falseDate) - returns true
    if(isNaN(launch.launchDate)){
        res.status(400).json({
            error: "Invalid date"
        })
    }
    addNewLaunch(launch)
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res){
    const launchId = +req.params.id;
    
    if(!existLaunch(launchId)) {
        return res.status(404).json({
            error: "Launch doesnt exist"
        })
    }
    const aborted = abortLaunch(launchId)
    return res.status(200).json(aborted)
}

module.exports = {
    httpGetAllLaunches,
    httpAddLaunch,
    httpAbortLaunch
}