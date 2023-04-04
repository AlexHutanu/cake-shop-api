require('dotenv').config();
import { DataSource } from "typeorm"


export const typeOrmContext = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
/*    entities: ["src/entities/!*.ts"],*/
    logging: true,
    synchronize: true,
})