import { DataSource } from "typeorm";
import { Cliente } from "./repository/entities/Cliente";
import { Ordem } from "./repository/entities/Ordem";
import { Produto } from "./repository/entities/Produto";

export const ConnectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '123456',
    database: 'aplicacao_db',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: [Produto, Cliente, Ordem],
    migrations: ['src/database/migrations/', 'src/database/migrations/*.ts'], 
});

ConnectionSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })