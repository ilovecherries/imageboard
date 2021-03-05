import createPool from '@databases/pg'
import { sql } from '@databases/pg'
import express, { response } from 'express'

// postgresql portion

const db = createPool("postgres://postgres@localhost:5432/postgres")

// express.js portion

const app =  express()
const port = 8080

app.get('/', (req, res) => res.send('Hello, World!'))

app.get('/persons', async (req, res) => res.send(await db.query(sql`
    SELECT * FROM persons;
`)))

// get a thread by ID and the posts inside of it
app.get('/thread', async (req, res) => {
    let threadId = req.query.id || -1

    if (threadId < 0) {
        res.status(400)
        res.send('there is no id present')
    }

    res.send(await db.query(sql`
        SELECT * FROM posts
        WHERE parent_id=${threadId};
    `))
})

app.get('/threads', async (req, res) =>
    res.send(await db.query(sql`
        SELECT * FROM threads;
    `)))

app.listen(port, () => console.log('listening'))