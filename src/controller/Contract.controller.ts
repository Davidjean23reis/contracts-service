import { Request, Response } from "express";
import ContractModel from "../model/Contract.model";

const Contractcontroller = {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const contractsservice = await ContractModel.find();
      return res.json(contractsservice);
    } catch (error) {
      return res.json(error);
    }
  },

  async findyById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const contractsservice = await ContractModel.findById(id);
      return res.json(contractsservice);
    } catch (error) {
      return res.json(error);
    }
  },
  async create(req: Request, res: Response): Promise<Response> {
    try {
      if (!req.body.CPF) {
        return res.json({ message: "o campo cpf é obrigatorio" });
      }
      if (!req.body.Valordoemprestimo) {
        return res.json({ message: "o valor do emprestimo é obrigatório" });
      }

      if (!req.body.Email) {
        return res.json({ message: "o campo email é obrigatorio" });
      }
      const todosContractsQuestaonoBanco = await ContractModel.find();
      const contractsComCPFjaexiste = todosContractsQuestaonoBanco.find(
        (contract) => contract.CPF == req.body.CPF
      );
      const emailJaexiste = todosContractsQuestaonoBanco.find(
        (contract) => contract.Email == req.body.Email
      );

      if (contractsComCPFjaexiste) {
        return res.json({ message: "já existe um contrato com esse cpf" });
      }

      if (emailJaexiste) {
        return res.json({ message: "o email já existe" });
      }

      const newContract = req.body;
      newContract.Status = "criação";
      const createContracts = await ContractModel.create(newContract);

      return res.json(createContracts);
    } catch (error) {
      return res.json(error);
    }

  },
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const contractsservice = await ContractModel.findByIdAndUpdate(
        id,
        req.body
      );
      return res.json(contractsservice);
    } catch (error) {
      return res.json(error);
    }
  },
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const contractsservice = await ContractModel.findByIdAndDelete(id);
      return res.json(contractsservice);
    } catch (error) {
      return res.json(error);
    }

  },
};
export default Contractcontroller;
