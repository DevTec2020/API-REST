import { Router } from "express";
import { myMiddleware } from "../middleware.ts/my-middleware"
import { ProductsController } from "../controllers/ProductsController"; 

const productsRoutes = Router()
const productsController = new ProductsController()

/* Função da rota GET com parametros não nomeados (params)

 productsRoutes.get("/products/:id/:user", (request, response) => {

    //recuperando os parametros fornecidos na rota
    const {id, user} = request.params

    // Retornando em tela os parametros não nomeados
    response.send(`Produto ${id} do usuário ${user}`)

 })

*/

// Função da rota GET com parametros nomeados (query)
productsRoutes.get("/", productsController.index)
    // /products?page=5&limit=20



 // Função da rota POST  (body)



 // Middleware global (Aplica para todas as rotas abaixo.)
 //app.use(myMiddleware)



 // Com Middleware local em uma rota especifica (myMiddleware)
 productsRoutes.post("/",myMiddleware,productsController.create)

 export { productsRoutes }