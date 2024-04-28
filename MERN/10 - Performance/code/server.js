// //1. time taking blockig exmaple
// const express = require('express')

// const app = express()
// const PORT = 8000

// // a naive delay function using a while loop:-
// function delay(duration){
//     const startTime = Date.now()
//     while(Date.now() - startTime < duration){
//         // event loop is completely block
//     }
// }   

// app.get('/', (req, res) => {
//     res.send("Peformance Example")
// })

// app.get('/timer', (req, res) => {
//     delay(9000)
//     res.send("Ding Ding Ding");
// })

// app.listen(PORT, () => {
//     console.log("Listening on PORT ", PORT )
// })



// // 2. CLustering processes. Performance improvement 
// const express = require('express')
// const cluster = require('cluster')
// cluster.schedulingPolicy = cluster.SCHED_RR
// const os = require('os');

// const app = express()
// const PORT = 8000

// // a naive delay function using a while loop:-
// function delay(duration){
//     const startTime = Date.now()
//     while(Date.now() - startTime < duration){
//         // event loop is completely block
//     }
// }   

// app.get('/', (req, res) => {
//     res.send(`Peformance Example ${process.ppid} `)
// })

// app.get('/timer', (req, res) => {
//     delay(9000)
//     res.send("Ding Ding Ding");
// })

// console.log("server.js running....")
// if(cluster.isMaster){
//     // console.log('master has been started');
//     // cluster.fork()
//     // cluster.fork()
//     const NUM_WORKERS = os.cpus().length;
//     for(let i=0; i< NUM_WORKERS; i++){
//         cluster.fork()
//     }

// }else{
//     console.log("worker process started")
//     app.listen(PORT, () => {
//         console.log("Listening on PORT ", PORT )
//     })
// }




// 3. Using PM2. Performance improvement - No cluster related code required.
const express = require('express');
const app = express();

function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    //event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(4000);
  res.send(`Yeahp Yup Yup! ${process.pid}`);
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(3000);


