import { version } from "os";
import swaggerJSDoc, { Options} from "swagger-jsdoc";
const swaggerOptions : Options = { 
  definition : {
    openapi : "3.0.0",
    info : {
        title : "Backend service API - andres felipe ",
        version : "1.0.0",
        description : "API para catalogo de productos "
    },
    server : [
        {
            url :"http://localhost:3000/"
        }
    ]
  },
  apis: [
    "./src/routers/productRouter.ts"
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions); 

export default swaggerSpec; 