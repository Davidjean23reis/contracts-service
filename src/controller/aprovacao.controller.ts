import { Request, Response } from "express"
import ContractModel from "../model/Contract.model"
const aprovacaocontroller = {
    async aprovacao(req: Request, res: Response): Promise<Response> {
        try {
             const { id } = req.params
            const contracts= await ContractModel.findById(id)
            if(contracts.Status=="criação"){
            return res.json()
            }
            const aprovacaoContract = await ContractModel.findByIdAndUpdate({
                _id: id
            }, { Status: 'aprovacaoContract' },
                {
                    new: true
                })
            return res.json(aprovacaoContract)
        } catch (erro) {
            return res.json(erro);
        }
    }
}
export default aprovacaocontroller