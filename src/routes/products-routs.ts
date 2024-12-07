import { Router } from "express";
import { myMiddleware } from "../middleware.ts/my-middleware"

const productsRoutes = Router()

/* Função da rota GET com parametros não nomeados (params)

 productsRoutes.get("/products/:id/:user", (request, response) => {

    //recuperando os parametros fornecidos na rota
    const {id, user} = request.params

    // Retornando em tela os parametros não nomeados
    response.send(`Produto ${id} do usuário ${user}`)

 })

*/

// Função da rota GET com parametros nomeados (query)
productsRoutes.get("/", (request, response) => {
    // /products?page=5&limit=20

    //recuperando os parametros fornecidos na rota
    const {page, limit} = request.query

    // Retornando em tela os parametros nomeados
    response.send(`Pagina ${page} de ${limit}`)

 })


 // Função da rota POST  (body)



 // Middleware global (Aplica para todas as rotas abaixo.)
 //app.use(myMiddleware)



 // Com Middleware local em uma rota especifica (myMiddleware)
 productsRoutes.post("/",myMiddleware, (request, response) => {
    const {name, price} = request.body

    /* 
    Para responder com um arquivo JSON basta colocar o codigo :
    
    response.json({ name, price })

    Para Responder por texto em tela :

    response.send(`O produto ${name} custa R$:${price}`)
    */


    

    response.status(201).json({name, price, user_id: request.user_id })
 })

 export { productsRoutes }