import express from "express"
import { routes } from "./routes";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.NODE_LOCAL_PORT, () => console.log("Server is running!"));