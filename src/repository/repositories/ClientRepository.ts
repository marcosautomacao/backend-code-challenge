import { ConnectionSource } from "../../orm.config";
import { Cliente } from "../entities/Cliente";


export const ClientRepository = ConnectionSource.getRepository(Cliente).extend({

    async getClienteMaisCompramPorData(data: string): Promise<any> {
        return this.query(`select c.id, c.nome, c.email, c.telefone, COUNT(*) as vendas 
            from cliente c join ordem o on c.id = o.id_cliente
                where DATE(o.data) = '${data}' group by c.id, c.nome;`);
        }
    })
