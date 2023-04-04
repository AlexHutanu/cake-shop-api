import express from 'express'
import bodyParser from "body-parser";
import 'reflect-metadata';
import {typeOrmContext} from "./db/type-orm.context";
require('dotenv').config();


const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${JSON.stringify(req.body)}`)
    console.log(process.env.DB_DATABASE)
    next()
})

const boostrap = async () => {
    try {
        console.log(process.env.DB_HOST)
        console.log(process.env.DB_DATABASE)
        console.log(process.env.DB_PORT)
        console.log(process.env.DB_PASSWORD)
        console.log(process.env.DB_USER)
        await typeOrmContext.initialize()
        console.log('Database connected')
        app.listen(PORT, () => {
            console.log('Server started on port 3000')
        })
    } catch (e) {
        console.log(e)
    }
}

(() => boostrap())()