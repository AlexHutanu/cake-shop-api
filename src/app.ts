import express from 'express'
import bodyParser from "body-parser";
import 'reflect-metadata';
import cookieRoutes from './routes/cookie'
import {typeOrmContext} from "./db/type-orm.context";


const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} ${JSON.stringify(req.body)}`)
    console.log(process.env.DB_DATABASE)
    next()
})

app.use('/cookies', cookieRoutes)

const boostrap = async () => {
    try {
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