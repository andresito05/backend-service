import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";

export const AppDataSource = new DataSource({
    type: "sqlite", // tipo de base de datos
    database: "database.sqlite", //nombre de base de datos 
    synchronize: true, // sincronizacion activa
    logging: false, //sin incio de sesion en la base
    entities: [Product],  // se agrega las entidades creadas 
    migrations:[], 
    subscribers:[],
    
}); 