const pool = require("../pool");
const toCamelCase = require("./utils/to-camelcase")

class userRepo {
    static async find(){
        const { rows } = await pool.query('SELECT * FROM users')
        
        // will convert kebabcase (sql columnnames) to camelcase
        return toCamelCase(rows);
    }
    static async findById(id){
        // REALLY BIG SECURITY ISSUE
        // const { rows } = await pool.query(`SELECT * FROM users where id = ${id}`)
        
        const { rows } = await pool.query(`SELECT * FROM users where id = $1`, [id])

        return toCamelCase(rows)[0] // to get the first row only; though it will either be 1 or null rows only 
    }
    static async insert(username, bio){
        const { rows } = await pool.query(`INSERT INTO users (username, bio) VALUES ($1, $2) returning *`,
        [username, bio]); 
        return toCamelCase(rows)[0]
    }
    static async update(id, username, bio){
        const { rows } = await pool.query(`UPDATE users SET username = $1, bio = $2 WHERE id = $3 returning *`, 
        [username, bio, id])
        return toCamelCase(rows)[0]
    }
    static async delete(id){
        const { rows } = await pool.query(`DELETE from users WHERE id = $1 returning *`, [id])
        return toCamelCase(rows)[0]
    }

    static async count(){
        const { rows } = await pool.query(`SELECT count(*) from users`);
        // rows == [{ count: 2384 }] // result is so
        return parseInt(rows[0].count)
    }
}

module.exports = userRepo;

// Other ways:-
// 2. 
// class userRepo {
//      find(){
//     }
//     findById(){
//     }
// }
// module.exports = new userRepo();

//3.
// module.exports = {
//     find(){...},
//     findById(){...}
// }