import { Router } from "express";
import Contractcontroller from "../controller/Contract.controller";
import multer from "multer";
import { storage } from "../config/upload";
import uploadcontroller from "../controller/upload.controller";
import aprovacaocontroller from "../controller/aprovacao.controller";

const upload = multer({ storage: storage });
const router = Router();

router.get("/contracts", Contractcontroller.index);
router.get("/contracts/:id", Contractcontroller.findyById);
router.post("/contracts/", Contractcontroller.create);
router.put("/contracts/:id", Contractcontroller.update);
router.delete("/contracts/:id", Contractcontroller.delete)
router.post("/upload/:id", upload.single("file"), uploadcontroller.upload)
router.get("/aprovacao/:id",aprovacaocontroller.aprovacao)

export default router;
