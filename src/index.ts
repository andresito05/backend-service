import  Express, {Application}  from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import router from "./Routers/ProductRoutes";
import swaggerUi from "swagger-ui-express"; 
import swaggerSpace from "./swagger/swagger";


const app: Application = Express(); 
const PORT = process.env.PORT ?? 3000; 

// Middleware 
app.use(cors()); 
app.use(Express.json());

//Rutas 
app.use("/api/",router); // Rutas de productos 

//Documentacion swagger 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpace)); 

//Inicializacion de la base de datos y el servidor 
AppDataSource.initialize()
.then(() => {
    app.listen(() => {
        console.log(`servidor corriendo en http://localhost: ${PORT}\n `); 
        console.log(`Endpoints:`); 
        console.log(`API products http://localhost: ${PORT}/API/products\n`);
        console.log(`Documentacion`);
        console.log(`swagger en http://localhost:${PORT}/api-docs`);
    });
})
.catch((error) => console.log(error)); 


