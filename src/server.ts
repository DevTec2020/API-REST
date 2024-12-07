import express from "express"
import { routes } from "./routes"

 const PORT = 3333

 const app = express()
 // Avisando ao express que ele vai receber dados em JSON
 app.use(express.json())


 app.use(routes)

 app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))