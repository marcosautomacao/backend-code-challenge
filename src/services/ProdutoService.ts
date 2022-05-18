import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ConnectionSource } from "../orm.config";
import { Produto } from "../repository/entities/Produto";

export class ProdutoService {

    produtoRepo: Repository<Produto>

    constructor() {
        this.produtoRepo = ConnectionSource.getRepository(Produto);
    }

    async getProdutos(): Promise<Produto[]> {
        return this.produtoRepo.find();
    }

    async createProduto(produto: Produto): Promise<Produto> {

        return this.produtoRepo.save(produto);
    }

    async updateProduto(produto: Produto): Promise<UpdateResult> {

        return this.produtoRepo.update(produto.id, produto);
    }

    async deleteProduto(id: number): Promise<DeleteResult> {
        return this.produtoRepo.delete(id);
    }

    async getProdutoPorId(produtoId: number): Promise<Produto> {
        return this.produtoRepo.findOneBy({ id: produtoId });
    }
    
    async getProdutoMaisVendidos(): Promise<any> {
        return this.produtoRepo.query("select p.id, p.nome, COUNT(*) as vendas " 
            + "from produto p join ordem c on p.id = c.id_produto group by p.id, p.nome;");
    }
}