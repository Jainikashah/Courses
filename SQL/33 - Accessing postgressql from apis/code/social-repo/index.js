const app = require('./src/app');
const pool = require('./src/pool');

// connecting to our db:-
pool.connect({
    host: "localhost",
    port: 5432,
    database: "socialnetwork",
    user: "postgres",
    password: "Admin@123"
})
    .then(() => {
        app().listen(3005, () => {
            console.log("Listening on port 3005")
        })
    })
    .catch(err => console.error(err))

