import createPool from '@databases/pg'
import { sql } from '@databases/pg'
import express from 'express'

// postgresql portion

const db = createPool("postgres://postgres@localhost:5432/postgres")

// express.js portion

const app =  express()
const port = 8080

app.get('/', (req, res) => res.send('Hello, World!'))

app.get('/persons', async (req, res) => res.send(await db.query(sql`
    SELECT * FROM persons;
`)))

app.listen(port, () => console.log('listening'))