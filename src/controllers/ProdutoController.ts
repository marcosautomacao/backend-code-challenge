import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";

export class ProdutoController {
    
    servico: ProdutoService;

    constructor(){
        this.servico = new ProdutoService();
    }

    async getProdutos(req: Request, res: Response) {
        try {
            var result = await this.servico.getProdutos();
            return res.json(result);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
    
    async getProduto(req: Request, res: Response) {
        try {
            var result = await this.servico.getProdutoPorId(parseInt(req.params.id));
            return res.json(result);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async postProdutos(req: Request, res: Response) {
        try {
            var result = await this.servico.createProduto(req.body);
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
    
    async putProdutos(req: Request, res: Response) {
        try {
            var result = await this.servico.updateProduto(req.body);
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }

    async deleteProdutos(req: Request, res: Response) {
        try {
            var result = await this.servico.deleteProduto(parseInt(req.params.id));
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
    
    async getProdutoMaisVendidos(req: Request, res: Response) {
        try {
            var result = await this.servico.getProdutoMaisVendidos();
            return res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
}