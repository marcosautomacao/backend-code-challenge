import { Request, Response } from "express";
import { OrdemService } from "../services/OrdemService";

export class OrdemController {

    servico: OrdemService;

    constructor(){
        this.servico = new OrdemService();
    }

    async getOrdens(req: Request, res: Response) {
        try {
            var result = await this.servico.getOrdens();
            return res.json(result);
        } catch (err) {
            console.log(err)
            return res.status(400).json(err);
        }
    }
    
    async getOrdem(req: Request, res: Response) {
        try {
            var result = await this.servico.getOrdemPorId(parseInt(req.params.id));
            return res.json(result);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async postOrdem(req: Request, res: Response) {
        try {
            var result = await this.servico.createOrdem(req.body);
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }

    async deleteOrdem(req: Request, res: Response) {
        try {
            var result = await this.servico.deleteOrdem(parseInt(req.params.id));
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
    
    async getOrdensPorCliente(req: Request, res: Response) {
        try {
            var result = await this.servico.getOrdens();
            return res.json(result.filter(i => i.cliente.id == parseInt(req.params.id)));
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
    
    async getOrdensPorData(req: Request, res: Response) {
        try {
            var result = await this.servico.getOrdens();
            return res.json(result.filter(i => 
                i.data.toDateString() == new Date(req.params.data).toDateString() && 
                i.cliente.id == parseInt(req.params.id)));
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
}