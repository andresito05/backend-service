import { Router,  } from "express";
import {
    getAllproducts,
    getProductByID,
    createProduct,
    UpdateProduct,
    DeleteProduct
} from "../controllers/productController";

const router = Router();

router.get("products/",getAllproducts); // Trae todos los productos
router.get("products/:id",getProductByID);//Trae solo un producto 
router.post("products/:id",createProduct); //  Crea un producto 
router.put("products/:id",UpdateProduct); // Actualiza un producto 
router.delete("products/:id",DeleteProduct); //Borrar un producto 

export default router;