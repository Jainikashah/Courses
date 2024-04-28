const pg = require('pg')

// connection to our database
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: 'Admin@123'
})

// updating the columns by taking the lng, lat of that record where its null
pool.query(`
    update posts set loc = point(lng, lat) where loc is null;
`).then(() => {
    console.log("update complete")
    pool.end()
})
.catch(err => {
    console.log(err.message)
})