import { ConnectionSource } from "../../orm.config";
import { Ordem } from "../entities/Ordem";

export const OrdemRepository = ConnectionSource.getRepository(Ordem);
