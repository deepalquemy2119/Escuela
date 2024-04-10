import { Request, Response } from "express";
import ModelTarea from "../models/tarea.model";
import  jwt from "jsonwebtoken";
import token from '../../auth/token'

const verificacionToken = function(req: Request, res: Response) {
  const token:any = req.headers.authorization?.split(" ")[1]
  const decoded: any =  jwt.verify(token,"secretKey")
 
  if(Date.now() > decoded.exp){
  return res.status(401).send({error:"token vencido"})
  }

}
export async function getAllTasks(req:Request, res: Response){
   
    try {
      const token:any = req.headers.authorization?.split(" ")[1]
      const decoded:any =  jwt.verify(token,"secretKey")
     
      if(Date.now() > decoded.exp){
      return res.status(401).send({error:"token vencido"})
      }
   
      verificacionToken(req,res)
        const tasks = await ModelTarea.findAll()
        res.json(tasks);
     
    } catch (error) {
        res.json({ message: error });
    }
}

 // crear una tarea
    
 export const createTaskPersona = async (req:any, res: Response) => {
      
        
       try {
        const token:any = req.headers.authorization?.split(" ")[1]
        const decoded:any =  jwt.verify(token,"secretKey")
       
        if(Date.now() > decoded.exp){
        return res.status(401).send({error:"token vencido"})
        }
           await ModelTarea.create(req.body);
           
      res.json({
        message: "Tarea creada de forma exitosa",
      });
    } catch (error) {
    
      res.json({ message: error });
    }
  };
  

    // Mostrar una tarea

    export const getOneTask = async (req:Request, res:Response) => {
        try {
          const token:any = req.headers.authorization?.split(" ")[1]
          const decoded:any =  jwt.verify(token,"secretKey")
         
          if(Date.now() > decoded.exp){
          return res.status(401).send({error:"token expired"})
          }
          const prestamo = await ModelTarea.findAll({
            where: {
              id: req.params.id,
            },
          });
           res.json(prestamo);
             } catch (error) {
          res.json({ message: error});
        }
      }
      
      export const getTaskPersona = async (req:Request, res:Response) => {
        try {
          const token:any = req.headers.authorization?.split(" ")[1]
          const decoded:any =  jwt.verify(token,"secretKey")
         
          if(Date.now() > decoded.exp){
          return res.status(401).send({error:"token expired"})
          }
          const prestamo = await ModelTarea.findAll({
            where: {
              personaID: req.params.id,
            },
          });
           res.json(prestamo);
             } catch (error) {
          res.json({ message: error});
        }
      }
      
      // actualizar un Prestamo
      
      export const editTaskPersona = async (req:Request, res:Response) => {
        try {
          const token:any = req.headers.authorization?.split(" ")[1]
          const decoded:any =  jwt.verify(token,"secretKey")
         
          if(Date.now() > decoded.exp){
          return res.status(401).send({error:"token expired"})
          }
          await ModelTarea.update(req.body, {
            where: { id: req.params.id }, 
          });
          res.json({
            message: "Prestamo Editado Correctamente",
          });
        } catch (error) {
          res.json({ message: error });
        }
      };
      
      // eliminar un Prestamo
      
      export const deleteTaskPersona = async (req: Request, res:Response) => {
        try {
          const token:any = req.headers.authorization?.split(" ")[1]
          const decoded:any =  jwt.verify(token,"secretKey")
         
          if(Date.now() > decoded.exp){
          return res.status(401).send({error:"token expired"})
          }
          verificacionToken(req,res)
          await ModelTarea.destroy({
            where: { id: req.params.id },
          });
          res.json({
            message: "Prestamo Eliminado",
          });
        } catch (error) {
          res.json({ message: error });
        }
      };