const { getAllLaunches, scheduleNewLaunch, abortLaunch, existLaunch } = require("../../models/launches.model")

async function httpGetAllLaunches(req, res) {
    return res.status(200).json(await getAllLaunches());
}

async function httpAddLaunch(req, res) {
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
    await scheduleNewLaunch(launch)
    return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res){
    const launchId = +req.params.id;
    const isexistLaunch = await existLaunch(launchId)
    if(!isexistLaunch) {
        return res.status(404).json({
            error: "Launch doesnt exist"
        })
    }
    const aborted = await abortLaunch(launchId)
    if(!aborted) {
        return res.status(400).json({
            error: "Laucnh not aborted"
        })
    }
    return res.status(200).json({
        ok: true
    })
}

module.exports = {
    httpGetAllLaunches,
    httpAddLaunch,
    httpAbortLaunch
}