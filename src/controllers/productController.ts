import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product"; 

const productRepository = AppDataSource.getRepository(Product);

// obtener (get) de todos los productos 
export const getAllproducts = async(req: Request, res: Response) => {
     try {
        const products = await productRepository.find({

        });
        res.json(products);
     } catch (error){

     } 
        res.status(500).json({ message: "error al obtener los productos"});
     }
 

// obtener (get) un producto por ID
export const getProductByID = async(req: Request, res: Response) => {
    try { 
        const product = await productRepository.findOneBy({
         id:parseInt(req.params.id)   
        });

        if(product) {
            res.json(product);
        }else {
                res.status(404).json({ message: "Producto no encontrado."})
            }
        
    } catch(error){
        res.status(500).json({ message: "error al obtener los productos"});  

    }
    
} 


// crear (POST) un producto 
export const createProduct = async( req : Request, res : Response ) => {  
    try{ 
        const{name,description,price} = req.body; // sacando los datos del request 
        const product = new Product(); 
        product.name = name;
        product.description = description; 
        product.price = price; 
        await productRepository.save(product); 
        res.status(201).json(product); 
 }   catch(error) {
    res.status(500).json({
        message: "error al crear el prodcuto."
    });
 }
 };


 // Actualizar (PUT) un producto 
export const UpdateProduct = async( req : Request, res : Response ) => {  
    try { 
        const {name,description,price} = req.body 
        const product = await productRepository.findOneBy({
            id:parseInt(req.params.id)   
           });
           if (product) {
            product.name = name ?? product.name; 
            product.description = description ?? product.description;  
            product.price = price ?? product.price;
            await productRepository.save(product);
            res.json(product);
           } else {
            res.status(404).json({
                message: "Producto no encontrado."
            });
           }
} catch(error) {
    res.status(500).json({
        message:"Error al actualizar el producto."
    });

}

};

// Borrar (DELETE) un producto 
export const DeleteProduct = async( req : Request, res : Response ) => {  
    try{ 
        const product = await productRepository.findOneBy({
            id:parseInt(req.params.id)   
           });
           if (product) {
            await productRepository.remove(product);
            res.json({
                message: "Producto eliminado."
            });
           } else {
            res.status(404).json({
                message: "Producto no encontrado."
            });
           }
} catch(error) {
    res.status(500).json({
        message:"Error al borrar el producto."
    });
}

}; 