import express, {Request, Response, NextFunction} from "express"

import { routes } from "./routes"

import { AppError } from "./utils/AppError"

 const PORT = 3333

 const app = express()
 // Avisando ao express que ele vai receber dados em JSON
 app.use(express.json())


 app.use(routes)

 /**
  * 400 (Bad request): Erro do cliente.
  * 500 (Internal Server Error): Erro Interno do servidor.
  */

 app.use((error: any, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError){
        return response.status(error.statusCode).json({ message: error.message})
    }

    response.status(500).json({ message: error.message})
 })

 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))