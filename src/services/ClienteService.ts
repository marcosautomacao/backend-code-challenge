import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { ConnectionSource } from "../orm.config";
import { Cliente } from "../repository/entities/Cliente";

export class ClienteService {

    clienteRepo: Repository<Cliente>

    constructor() {
        this.clienteRepo = ConnectionSource.getRepository(Cliente);
    }

    async getClientes(): Promise<Cliente[]> {
        return this.clienteRepo.find();
    }

    async createCliente(produto: Cliente): Promise<Cliente> {

        return this.clienteRepo.save(produto);
    }

    async updateCliente(produto: Cliente): Promise<UpdateResult> {

        return this.clienteRepo.update(produto.id, produto);
    }

    async deleteCliente(id: number): Promise<DeleteResult> {
        return this.clienteRepo.delete(id);
    }

    async getClientePorId(produtoId: number): Promise<Cliente> {
        return this.clienteRepo.findOneBy({ id: produtoId });
    }
    
    async getClienteMaisCompramPorData(data: string): Promise<any> {
        console.log(data)
        return this.clienteRepo.query(`select c.id, c.nome, COUNT(*) as vendas from cliente c join ordem o on c.id = o.id_cliente
             where DATE(o.data) = '${data}' group by c.id, c.nome;`);
    }
}