const pg = require("pg");

// // Normally we would create a pool like this:-
// const pool = new pg.Pool({
//     host: "localhost",
//     port: 5432, // and other config.
// })

// module.exports = pool;


class Pool {
    _pool = null;
    // to create a new pool
    connect(options){
        this._pool = new pg.Pool(options)
        return this._pool.query('SELECT 1 + 1')
    }
    // to end the pool
    close(){
        return this._pool.end()
    }
    // to run queries. HERE, THERE IS A REALLY BIGGGG SECURITY ISSUE, WE'LL SEE THIS LATER
    // query(sql){
    //     return this._pool.query(sql)
    // }
    
    // issue solved
    query(sql, params){
        return this._pool.query(sql, params)
    }
}

module.exports = new Pool();