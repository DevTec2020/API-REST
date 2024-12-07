import {Request, Response, NextFunction} from "express"

// Middleware Global
export function myMiddleware( request: Request, response: Response, next: NextFunction){
    //o next: NextFunction faz seguir para a proxima requisição
    request.user_id = "23456"

    console.log("Passou pelo Middleware Global!")

    return next()
}