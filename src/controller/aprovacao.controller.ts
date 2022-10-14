import { Request, Response } from "express"
import ContractModel from "../model/Contract.model"
const aprovacaocontroller = {
    async aprovacao(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params
            const contracts = await ContractModel.findById(id)
            if (!contracts) {
                return res.json({ message: "contrato não encontrado" })
            }
            if (contracts.Status == "uploadimagens") {
                const result = getStatus()
                console.log('result', result)
                const aprovacaoContract = await ContractModel.findByIdAndUpdate({
                    _id: id
                }, { Status: result },
                    {
                        new: true
                    })
                return res.json(aprovacaoContract)
            }
            return res.json({ message: " esse contrato deve enviar os documentos primeiro" })

        } catch (erro) {
            return res.json(erro);
        }
    },
}
const getStatus=() :string => {
    const r = Math.floor(Math.random() * 10);
    console.log(r,'a')

    if (r % 2 == 0) {
        return 'aprovação'
    }
    return 'reprovado'
}
export default aprovacaocontroller