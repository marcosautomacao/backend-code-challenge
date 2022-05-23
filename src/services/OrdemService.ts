import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Ordem } from "../repository/entities/Ordem";
import { OrdemRepository } from "../repository/repositories/OrdemRepository";

export class OrdemService {

    ordemRepo: Repository<Ordem>

    constructor() {
        this.ordemRepo = OrdemRepository;
    }

    async getOrdens(): Promise<Ordem[]> {
        return this.ordemRepo.find({ relations: ["cliente", "produto"]});
    }

    async createOrdem(ordem: Ordem): Promise<Ordem> {

        return this.ordemRepo.save(ordem);
    }

    async updateOrdem(ordem: Ordem): Promise<UpdateResult> {

        return this.ordemRepo.update(ordem.id, ordem);
    }

    async deleteOrdem(id: number): Promise<DeleteResult> {
        return this.ordemRepo.delete(id);
    }

    async getOrdemPorId(ordemId: number): Promise<Ordem> {
        return this.ordemRepo.findOneBy({ id: ordemId });
    }
}