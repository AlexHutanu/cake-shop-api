import {Cookie} from "../entities/cookie";
import {Users} from "../entities/user";
require('dotenv').config();
import { DataSource } from "typeorm"

export const typeOrmContext = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Cookie, Users],
    synchronize: true,
})
