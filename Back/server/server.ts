import express, { Application } from 'express'
import  cors from 'cors' 
import morgan from 'morgan'

/* El userRoutes: es el alias que toma todos los datos que 
provengan desde user.route, y lo uso en server.ts */
//import userRoutes from '../routes/user.route'

// Import de la DDBB
//import db from '../db/connection';



class Server {

    private app: Application;  // app: es ahora de tipo Express
    private PORT: string;

    /* Objeto que me conecta el server con el user.route*/
    private rutaPaths = { users: '/route/users' }


    constructor(){
        this.dbConnection();
        this.app = express();
        this.PORT = process.env.PORT || '3000';
        this.middlewares();
        
        //Declaramos Metodo para definir mis rutas
        this.routes();

    }



/*  -------------- To Do Base de datos -----------------*/
// recordar agregarlo a los midd
async dbConnection() {
    try {
        await db.authenticate();
        console.log(`On line database..!!`);
        
    } catch (error) {
        throw new Error(`Error al conectar a la DB:  ${error}`);
        
    }
};





/*  MIDD: son funciones que, se ejecutan antes de que pasen nuestras rutas  */
middlewares(){

        this.app.use( morgan('dev'))
        // CORS
        this.app.use( cors({ }) );
    
        // Lectura del Body.Parseo
        this.app.use( express.json() )

        // Carpeta Publica. Se usa para servir contenido Estático.
        this.app.use(express.static('public')) // apunta al html de la folder public
}


/* Creacion del metodo routes. Acá podemos 
definir todas las rutas que deseamos. */

routes(){
    this.app.use(this.rutaPaths.users, userRoutes)
}



/*  Levantamos el Server */
    listen(){ this.app.listen( this.PORT, () => {
            console.log(`Server run on port:  ${this.PORT}`);
            } )
    }
}

export default Server;