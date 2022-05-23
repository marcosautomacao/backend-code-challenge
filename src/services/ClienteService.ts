import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Cliente } from "../repository/entities/Cliente";
import { ClientRepository } from "../repository/repositories/ClientRepository";

export class ClienteService {

    clienteRepo: Repository<Cliente> | any
    
    constructor() {
        this.clienteRepo = ClientRepository;
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
        return this.clienteRepo.getClienteMaisCompramPorData(data);
    }
}
    