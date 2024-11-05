import  express, {Application}  from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import router from "./Routers/ProductRoutes";
import swaggerUI from "swagger-ui-express"; 
import swaggerSpec from "./swagger/swagger";


const app: Application = express(); 
const PORT = process.env.PORT ?? 3000; 

// Middleware 
app.use(cors()); 
app.use(express.json());

//Rutas 
app.use("/api/Products", router); // Rutas de productos 

//Documentacion swagger 
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec)); 

//Inicializacion de la base de datos y el servidor 
AppDataSource.initialize()
.then(() => {
    app.listen(PORT, () => {
        console.log(`servidor corriendo en http://localhost: ${PORT}\n `); 
        console.log(`Endpoints:`); 
        console.log(`API products http://localhost: ${PORT}/API/products\n`);
        console.log(`Documentacion`);
        console.log(`swagger en http://localhost:${PORT}/api-docs`);
    });
})
.catch((error) => console.log(error)); 


