import {Request, Response} from "express"
import { AppError } from "../utils/AppError"
import {z} from "zod"

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
        const bodySchema = z.object({
            name: z
                .string({required_error: "Name is required!"})
                .trim()
                .min(6, {message: "Name must be 6 or more characters"}),
            price: z
                .number({required_error: "Price is required!"})
                .positive({message: "Price must be positive"}),
        })

        const {name, price} = bodySchema.parse(request.body)

        /** 
        if (!name){
            throw new AppError("Nome do produto é obrigatório!")
        }

        if (name.trim().length < 6 ){
            throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres!")
        }

        if (!price){
            throw new AppError("Preço do produto é obrigatório!")
        }

        if (price < 0){
            throw new AppError("Preço do produto não pode ser menor que zero!")
        }
        */

        /* 
        Para responder com um arquivo JSON basta colocar o codigo :
        
        response.json({ name, price })
    
        Para Responder por texto em tela :
    
        response.send(`O produto ${name} custa R$:${price}`)
        */
 
        //throw new Error("erro ao tentar criar um produto")
        //throw new AppError("Erro ao tentar criar o produto!")

        response.status(201).json({name, price, user_id: request.user_id })
    }

}

export { ProductsController }