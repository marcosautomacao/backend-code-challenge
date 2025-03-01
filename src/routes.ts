import { Router } from "express";
import { ClienteController } from "./controllers/ClienteController";
import { OrdemController } from "./controllers/OrdemController";
import { ProdutoController } from "./controllers/ProdutoController";

const routes = Router();
const produtoController = new ProdutoController();

routes.get("/produto", produtoController.getProdutos.bind(produtoController));
routes.get("/produto/maisvendidos", produtoController.getProdutoMaisVendidos.bind(produtoController));
routes.get("/produto/:id", produtoController.getProduto.bind(produtoController));
routes.post("/produto", produtoController.postProdutos.bind(produtoController));
routes.delete("/produto/:id", produtoController.deleteProdutos.bind(produtoController));

const clienteController = new ClienteController();

routes.get("/cliente", clienteController.getClientes.bind(clienteController));
routes.get("/cliente/:id", clienteController.getCliente.bind(clienteController));
routes.post("/cliente", clienteController.postCliente.bind(clienteController));
routes.delete("/cliente/:id", clienteController.deleteCliente.bind(clienteController));
routes.get("/cliente/MaisCompramPorData/:data", clienteController.getClienteMaisCompramPorData.bind(clienteController));

const ordemController = new OrdemController();

routes.get("/Ordem", ordemController.getOrdens.bind(ordemController));
routes.get("/Ordem/:id", ordemController.getOrdem.bind(ordemController));
routes.post("/Ordem", ordemController.postOrdem.bind(ordemController));
routes.delete("/Ordem/:id", ordemController.deleteOrdem.bind(ordemController));
routes.get("/Ordem/cliente/:id", ordemController.getOrdensPorCliente.bind(ordemController));
routes.get("/Ordem/cliente/:id/:data", ordemController.getOrdensPorData.bind(ordemController));

export { routes };