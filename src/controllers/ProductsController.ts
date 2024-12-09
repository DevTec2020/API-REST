import {Request, Response} from "express"

class ProductsController {
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro especifico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * remove - DELETE para deletar um registro.
     */

    index(request: Request, response: Response){
    // /products?page=5&limit=20

    //recuperando os parametros fornecidos na rota
    const {page, limit} = request.query

    // Retornando em tela os parametros nomeados
    response.send(`Pagina ${page} de ${limit}`)
    }


    create(request: Request, response: Response){
        const {name, price} = request.body

        /* 
        Para responder com um arquivo JSON basta colocar o codigo :
        
        response.json({ name, price })
    
        Para Responder por texto em tela :
    
        response.send(`O produto ${name} custa R$:${price}`)
        */
    
        response.status(201).json({name, price, user_id: request.user_id })
    }

}

export { ProductsController }