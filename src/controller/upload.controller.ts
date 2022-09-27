import { Request, Response } from "express"
import ContractModel from "../model/Contract.model"




const uploadcontroller = {
    async upload(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params
            if (!req.file) {
                return res.json({ message: " o arquivo deve ser enviado" })
            }
            const uploadContract = await ContractModel.updateOne({
                _id: id
            },  { Status: 'uploadimagens'})
            return res.json(uploadContract)

        } catch (erro) {
            return res.json(erro);
        }
    }


}

export default uploadcontroller