const { Worker, workerData,  isMainThread } = require('worker_threads')

// __filename refers to the current threads file. 
if(isMainThread){
    console.log(`in main thread ${process.pid}`)
    new Worker(__filename, {
        workerData: [10, 2, 3, 1]
    });
    new Worker(__filename, {
        workerData: [3, 4, 1, 2]
    });
}else {
    // same id
    console.log(`in worker ${process.pid}`)
    // this workerdata comes from the import we made.
    console.log(`Worker data: ${ workerData.sort() }`)
}