import { DataSource } from "typeorm";
import { Cliente } from "./repository/entities/Cliente";
import { Ordem } from "./repository/entities/Ordem";
import { Produto } from "./repository/entities/Produto";
import dotenv from 'dotenv';

dotenv.config();

// export const ConnectionSource = new DataSource({
//     migrationsTableName: 'migrations',
//     type: 'mysql',
//     host: "localhost",
//     port: 3307,
//     username: "root",
//     password: "123456",
//     database: "aplicacao_db",
//     logging: false,
//     synchronize: false,
//     name: 'default',
//     entities: [Produto, Cliente, Ordem],
//     migrations: ['src/database/migrations/', 'src/database/migrations/*.ts'], 
//     connectTimeout: 28800
// });
export const ConnectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: [Produto, Cliente, Ordem],
    migrations: ['src/database/migrations/', 'src/database/migrations/*.ts'], 
    connectTimeout: 28800
});

if (!ConnectionSource.isInitialized) {
    (
    ConnectionSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
)}
