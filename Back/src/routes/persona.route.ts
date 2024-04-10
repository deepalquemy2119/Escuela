import { Router } from "express";
import { getLoginPersona ,getAllPersonas,  getPersona, createPersona, editPersona, deletePersona } from "../controlllers/persona.controller";
import token from "../../auth/token";

const router = Router()

router.post("/auth/login", getLoginPersona)  

router.route("/").get(token,getAllPersonas)
router.get("/:id",token,getPersona)
router.post("/", createPersona)
router.put("/persona/:id",token, editPersona)
router.delete("/persona/:id", token,deletePersona)

export default router
