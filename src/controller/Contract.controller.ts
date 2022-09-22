import { Request, Response } from "express"
import ContractModel from "../model/Contract.model"

const Contractcontroller = {
  async index(req: Request, res: Response): Promise<Response> {
    let contractsservice = await ContractModel.find()
    return res.json(contractsservice);
  },

  async findyById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let contractsservice = await ContractModel.findById(id)
    return res.json(contractsservice)
  },

  async create(req: Request, res: Response): Promise<Response> {
    const {
      Name,
      Email,
      CPF,
      Valordoemprestimo,
      Rendamensal,
      Datadenascimento,
      Estadocivil,
      Endereço } = req.body
    
    let contractsservice = await ContractModel.create(req.body)
    return res.json(contractsservice)
  },
}

export default Contractcontroller
