import { Router } from "express";
import token  from "../../auth/token";
const router = Router()

import { getAllTasks,createTaskPersona, editTaskPersona, deleteTaskPersona, getOneTask, getTaskPersona  } from "../controlllers/task.controller";


router.route("/").get(token,getAllTasks)
router.get("/persona/:id",token, getTaskPersona)
router.get("/:id",token,getOneTask)
router.post("/",token, createTaskPersona)
router.put("/:id",token, editTaskPersona)
router.delete("/:id",token, deleteTaskPersona)

export default router