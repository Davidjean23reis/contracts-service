import mongoose, { Schema } from "mongoose";

const ContractsServices = new Schema(
  {
    Nome: String,
    Email: String,
    CPF: Number,
    Valordoemprestimo: Number,
    Rendamensal: Number,
    Datadenascimento: Number,
    Estadocivil: Number,
    Endereço: String,
  },

  { timestamps: true }
);

export default mongoose.model("Contractsservice",ContractsServices)
