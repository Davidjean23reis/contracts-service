import { Router } from "express"
import Contractcontroller from "../controller/Contract.controller"

const router = Router()

router.get("/contracts", Contractcontroller.index)
router.get("/contracts/:id", Contractcontroller.findyById)
router.post("/contracts/", Contractcontroller.create)


export default router
