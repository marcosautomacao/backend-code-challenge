import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

export class ClienteController {
    
    servico: ClienteService;

    constructor(){
        this.servico = new ClienteService();
    }

    async getClientes(req: Request, res: Response) {
        try {
            var result = await this.servico.getClientes();
            return res.json(result);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
    
    async getCliente(req: Request, res: Response) {
        try {
            var result = await this.servico.getClientePorId(parseInt(req.params.id));
            return res.json(result);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async postCliente(req: Request, res: Response) {
        try {
            var result = await this.servico.createCliente(req.body);
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }

    async deleteCliente(req: Request, res: Response) {
        try {
            var result = await this.servico.deleteCliente(parseInt(req.params.id));
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
    
    async getClienteMaisCompramPorData(req: Request, res: Response) {
        try {
            var result = await this.servico.getClienteMaisCompramPorData(req.params.data);
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
}