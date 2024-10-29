import  Express, {Application}  from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import swaggerUi from "swagger-ui-express"; 

const app: Application = Express(); 
const PORT = process.env.PORT ?? 3000; 
// Middleware 

app.use(cors()); 
app.use(Express.json());