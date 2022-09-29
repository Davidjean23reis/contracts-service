import mongoose, { Schema } from "mongoose"

const Contractsservices = new Schema(
  {
    Name: String,
    Email: String,
    CPF: Number,
    Valordoemprestimo: Number,
    Rendamensal: Number,
    Datadenascimento: String,
    Estadocivil: String,
    Endereço: String,
    Status: String,
     },

  { timestamps: true }
)

export default mongoose.model("Contractsservice",Contractsservices)
