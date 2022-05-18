import express from "express"
import { routes } from "./routes";
import dotenv from 'dotenv';
import child_process  from "child_process";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.NODE_DOCKER_PORT, () => console.log("Server is running!"));

child_process.exec("yarn typeorm migration:run --dataSource ./src/orm.config.ts", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});