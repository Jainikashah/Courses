// help you test express apps 
const request = require('supertest')
const buildApp = require('../../app')
const userRepo = require('../../repos/user-repo')
const pool = require('../../pool')

const { randomBytes } = require('crypto');
const { default: migrate } = require('node-pg-migrate')
const format = require('pg-format')

// will run the below code before anything else.
beforeAll(async () => {
    // Randomly generating a rolename 
    
    const roleName = 'a' + randomBytes(4).toString('hex');  // creates an alphanumeric string of numbers and letters. It alsways has to start with a letter, and so we just added a trick by adding 'a' at front.

    // Connecting to pg
    await pool.connect({
        host: "localhost",
        port: 5432,
        database: "socialnetwork-test",
        user: "postgres",
        password: "Admin@123"
    })

    //  Create a new role
    // ----- one way, but to prevent sql injection, there's another way. though this is testing mode, and sql attack is not of any harm here, but just incase ----
    // await pool.query(`
    //     Create role ${roleName} with login password '${roleName}' 
    // `)

    // we could use, our $1, $2 synatx as well, but remembr they dont let us replace identifiers only values.
    // use FORMAT module for to do so.
    // %I - means its an identifier - like tablename, schemaname, dbname, columnnames, etc
    // %L - means its a literal value.
    await pool.query(format(
        'Create role %I with login password %L', [roleName, roleName]
    ))


    // Create a schema with the same name
    // --- replacing the below for preventing sql injection --- 
    // await pool.query(`
    //         Create schema ${roleName} authorization ${roleName}
    //     `)
    await pool.query(format(
        'Create schema %I authorization %I', roleName, roleName
    ))

    // Dsiconnect entirely from pg
    await pool.close()

    // Run migration files programmaically in new schema. Need migrate package to run migration files programmatically
    await migrate({
        schema: roleName, // schema name would be rolename righ
        direction: 'up', // could be up or down, whichever block we want to run 
        log: () => {},  // empty log function will remove every log, that migrate will print. since we in testing mode, we dont want any logs, so pass an empty ()
        noLock: true,  // by default we are only allowed to run 1 migration, to remove that, we add noLock true. 
        dir: 'migrations', // the folder wehre all the migration files are stored
        databaseUrl: { // the config for our schema
            host: "localhost",
            port: 5432,
            database: "socialnetwork-test",
            user: roleName,
            password: roleName
        }
    })

    // Connect to pg as the newly created role
    await pool.connect({ 
        host: "localhost",
        port: 5432,
        database: "socialnetwork-test",
        user: roleName,
        password: roleName
    })
})

// will run the below code after everything else.
afterAll(() => {
    return pool.close()
})

it('create a user', async () => {
    const startingCount = await userRepo.count();
    expect(startingCount).toEqual(0)

    await request(buildApp())
    .post('/users')
    .send({ username: 'testuser', bio: 'testbio' })
    .expect(200)

    const finishCount = await userRepo.count();
    expect(finishCount).toEqual(1)
})