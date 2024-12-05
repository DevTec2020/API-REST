import express from "express"


 const PORT = 3333

 const app = express()
 // Avisando ao express que ele vai receber dados em JSON
 app.use(express.json())

/* Função da rota GET com parametros não nomeados (params)

 app.get("/products/:id/:user", (request, response) => {

    //recuperando os parametros fornecidos na rota
    const {id, user} = request.params

    // Retornando em tela os parametros não nomeados
    response.send(`Produto ${id} do usuário ${user}`)

 })

*/

// Função da rota GET com parametros nomeados (query)
 app.get("/products", (request, response) => {
    // /products?page=5&limit=20

    //recuperando os parametros fornecidos na rota
    const {page, limit} = request.query

    // Retornando em tela os parametros nomeados
    response.send(`Pagina ${page} de ${limit}`)

 })


 // Função da rota POST  (body)
 app.post("/products", (request, response) => {
    const {name, price} = request.body

    /* Para responder com um arquivo JSON basta colocar o codigo
    response.json({ name, price })
    */
    response.send(`O produto ${name} custa R$:${price}`)
 })




 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))