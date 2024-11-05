import { Router } from "express";
import {
    getAllproducts,
    getProductByID,
    createProduct,
    UpdateProduct,
    DeleteProduct
} from "../controllers/productController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: products 
 *   description: crud relacionado con preductos 
 */

/**
 * @swagger 
 * /api/products:
 *   get: 
 *    summary: obtener todos los productos 
 *    tags: [products]
 *    responses: 
 *     200:
 *      description: lista de productos 
 */
router.get("/",getAllproducts); // Trae todos los productos

/**
 * @swagger
 * /api/products/{id}:
 *    get: 
 *      summary: obtener productos por ID 
 *      tags: [products]
 *      parameters: 
 *        - in: path
 *          name: id
 *          required: true 
 *          schema: 
 *            type: integer
 *          description: ID del producto 
 *      responses:
 *        200:
 *          description: Detalles del producto
 *        404: 
 *          description: Producto no encontrado 
 */
router.get("/:id",getProductByID);//Trae solo un producto 

/**
 *  @swagger 
 *  /api/products:
 *     post: 
 *       summary: crea un nuevo producto
 *       tags: [products]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object 
 *               required:
 *                 - name: 
 *                 - description 
 *                 - price
 *               properties:    
 *                 name: 
 *                   type: string
 *                 description: 
 *                   type: string 
 *                 price: 
 *                   type: number 
 *       responses:
 *         201: 
 *           description: producto creado 
 *         500: 
 *           description: Error en el servidor 
 */
router.post("/",createProduct); //  Crea un producto 
router.put("/:id",UpdateProduct); // Actualiza un producto 
router.delete("/:id",DeleteProduct); //Borrar un producto 

export default router;