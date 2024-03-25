/* Las rutas son funciones. De express nos traemos la funcion Router */
import { Router } from 'express'
//import { deleteUser, getUser, getUsers, postUser, putUser } from '../controllers/usuario.controller';


const router = Router();

/* ---------------------- LOS END-POINTS -------------------  ---- */

// import { Request, Response } from "express"
// import Usuario from "../models/usuario.model";


// // -------------- GETusers ------------------
// export const getUsers = async (req:Request, res:Response) => {

//     const usuarios = await Usuario.findAll(); // el findAll --> devuelve una promise.

//     //console.log('Aca el get users..!!!');
    
//         res.json({usuarios})
// };


// //----------------- GETuserID ----------------
// export const getUser = async ( req:Request, res:Response ) => {

// /* El ID proviene de la req.params  */
//     const { id } = req.params;

//     // busqueda por PK
//     const usuario = await Usuario.findByPk(id);

//     if( usuario ) {
//         res.json(usuario);
//     }else{
//         res.status(404).json({
//             msg:`Ǹo existe el usuario ${ id }`
//         })
//     }
// }

// //------------------ POST ------------------
// export const postUser = async ( req:Request, res:Response ) => {

// /* el body proviene de la req */
//         const { body } = req;


// // para crear el usuario: try and catch

//         try {

//             const existEmail = await Usuario.findOne({
//                 where: {
//                     email: body.email  
//     // si el email de la base es = al email que viene en el 
//     //body, en la req(peticion)
//                 }
//             });

//             if(existEmail){
//             // el status 400, es una bad.request
//                 return res.status(400).json({
//                     msg: `Existe el email: ${ body.email }`
//                 });
//             }

//             const usuario = new Usuario();

//             await usuario.save();

//             res.json( usuario );

//         } catch (error) {
//             console.log(`El error del server: ${error}`);
            
//             res.status(500).json({
//                 msg: `Hable con el administrador `})
//             }


    
// }

// //---------------- PUT --------------
// // Actualizar : PUT
// export const putUser = async ( req:Request, res:Response ) => {

//     const { id } = req.params;
//     const { body } = req;
    

// //----- TRY -CATCH ------
// try {

//     const NoExistUser = await Usuario.findByPk( id );

//     if( !NoExistUser ){
//         return res.status(404).json({
//             msg: `No existe un usuario con ID ${ id } `
//         })
//     }
// //---------- Aca esperamos al NoExistUser --------
//     await NoExistUser.update( body );

//     //si todo sale bien
//     res.json( NoExistUser );



//     const existEmail = await Usuario.findOne({
//         where: {
//             email: body.email  
// // si el email de la base es = al email que viene en el 
// //body, en la req(peticion)
//         }
//     });

//     if(existEmail){
//     // el status 400, es una bad.request
//         return res.status(400).json({
//             msg: `Existe el email: ${ body.email }`
//         });
//     }

//     const usuario = new Usuario();

//     await usuario.save();

//     res.json( usuario );

// } catch (error) {
//     console.log(`El error del server: ${error}`);
    
//     res.status(500).json({
//         msg: `Hable con el administrador `})
//     }




// }

// //------------------ DELETE------------------
// export const deleteUser = ( req:Request, res:Response ) => {

//     const { id } = req.params;
//     res.json({ message: 'deleteUser', id })
// }



// /* ---------- Ruta GET ---------- */
// router.get('/',        getUsers);


// /* ---------- Ruta GET-ID ---------- */
// router.get('/:id',     getUser);


// /* ---------- Ruta POST ---------- */
// router.post('/',       postUser);


// /* ---------- Ruta PUT-ID ---------- */
// router.put('/:id',     putUser);


// /* ---------- Ruta DELETE-ID ---------- */
// router.delete('/:id',  deleteUser);



export default router;