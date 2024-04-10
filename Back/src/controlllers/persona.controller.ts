import { Request, Response } from "express";
import ModelPersona from "../models/persona.model";
import jwt from "jsonwebtoken"



export const getLoginPersona = async (req: Request, res: Response) => {

    const SECRET = process.env.SECRET;

        try {
            const persona = req.body;
            const { name, password } = persona;

            const personaExist: any = await ModelPersona.findOne({
            where: {
                name: name,
                password: password
            }
            });

    if (!personaExist) {
      res.status(403).json({ messge: "Persona No encontrada" });
      return;
    }

    if (personaExist.password === password) {
      const token = jwt.sign(
        {
          user: personaExist,
          exp: Date.now() + 5000
        },
        `${SECRET}`
      );

      const decoded: any = jwt.verify(token, `${SECRET}`);
      console.log("soy el decodificador:", decoded);


      res.status(200).json({
        idPersona: decoded.user.idPersona,
        status: 200,
        success: true,
        message: "Logueo exitoso..!!",
        token: token
      });
    } else {
      res.status(404).json({
        status: 404,
        success: false,
        message: "Password incorrecta..!!"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Error en el servidor..!!"
    });
  }
};

// mostrar Todos los user

export const getAllPersonas = async (req: Request, res: Response) => {
  try {
    const persona = await ModelPersona.findAll();

    res.json(persona);
  } catch (error) {
    res.json({ message: error });
  }
};

// mostrar una persona

export const getPersona = async (req: Request, res: Response) => {

  try {

    const persona = await ModelPersona.findAll({
      where: {
        idPersona: req.params.id,
      },
    });
    res.json(persona[0]); // de aca saco toda la persona 
  } catch (error) {
    res.json({ message: error });
  }
};

// crear una nueva persona

export const createPersona = async (req: Request, res: Response) => {

  try {
    const correo = await ModelPersona.findAll({
      where: {
        correo: req.body.correo,
      }
    },
    );
    const persona = await ModelPersona.findAll({
      where: {
        name: req.body.name,
      }
    },
    );
    if (correo.length != 0) return res.status(403).json({ message: "el correo esta uso" })
    if (persona.length != 0) return res.status(403).json({ message: "el nombre esta uso" })
    await ModelPersona.create(req.body);


    res.json({
      message: "Persona creada de forma correcta"
    });
  } catch (error) {
    res.json({ message: error });
  }
};

// actualizar una persona

export const editPersona = async (req: Request, res: Response) => {
  try {

    await ModelPersona.update(req.body, {
      where: { idPersona: req.params.id },
    });
    res.json({
      message: "Persona editada de forma exitosa..!!",
    });
  } catch (error) {
    res.json({ message: error });
  }
};

// eliminar una persona

export const deletePersona = async (req: Request, res: Response) => {
  try {

    await ModelPersona.destroy(
      {
        where: { idPersona: req.params.id },
      }
    );
    res.json({
      message: "Persona Eliminada..!!",
    });
  } catch (error) {
    res.json({ message: error });
  }
};

