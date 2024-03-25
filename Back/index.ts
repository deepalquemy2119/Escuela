import express, { Response, Request } from 'express';
import db from './DDBB/connection'
 
const app = express();

const port = 3000;


/* --------- Servidor corriendo, for the Client ---------  */
app.get( '/', (req: Request, res: Response ) => {
    res.json(`Server run ..!!` )
})


/* --------- Peticiones for the Client ----------- */

// app.get('/user/:id', (req: Request, res: Response) => {
//     const id = parseInt(req.params.id)
//     const user: User | undefined = getUser(id)
//     if (user) {
//         res.send(user)
//     } else {
//             res.status(404).send(`Usuario no encontrado`)
//                 }
//             })

//-------------------------


app.listen( port, () => {
    console.log(`Server run on port: ${ port }` )
})