const express = require('express')
const pg = require('pg')

// connection to our database
const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: 'Admin@123'
})

// // checking if the connection is successful by running a demo query. pool is used to write sql queries.
// pool.query('Select 1+1;').then((res) => {
//     console.log(res)
// })

const app = express()
// use to receive the form submission from the browser 
app.use(express.urlencoded({ extended: true }))

app.get('/posts', async (req, res) => {
    // gives us a list of records that exists in posts table
    const { rows } = await pool.query(`
        select * from posts    
    `)

    console.log(rows)

    // creating a html document, to see the posts we have and create a new post also.
    res.send(`
         <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>lng</th>
                    <th>lat</th>
                </tr>
            </thead>
            <tbody>
                ${rows.map(row => {
                    return`
                        <tr>
                            <td> ${row.id} </td>
                            <td> ${row.loc.x} </td>
                            <td> ${row.loc.y} </td>
                        </tr>
                    `
                }).join('')}
            </tbody>
         </table>   
         <form method="POST">
                <h3>Create post</h3>
                <div>
                    <label>lng</label>
                    <input name="lng" />
                </div>
                <div>
                    <label>lat</label>
                    <input name="lat" />
                </div>
                <button type="submit">Create</button>
         </form>
    `)
})

app.post('/posts', async (req, res) => {
    const { lng, lat } = req.body;
    await pool.query(`
        insert into posts (loc) values ($1)
    `, 
    [`(${lng},${lat})`])

    res.redirect('/posts')
})

app.listen(3005, () => {
    console.log("Listening on port 3005")
})