import { ConnectionSource } from "../../orm.config";
import { Produto } from "../entities/Produto";


export const ProdutoRepository = ConnectionSource.getRepository(Produto).extend({

    async getProdutoMaisVendidos(): Promise<any> {
        return this.query("select p.id, p.nome, COUNT(*) as vendas " 
            + "from produto p join ordem c on p.id = c.id_produto group by p.id, p.nome;");
        }
    })
