import express, { Request, Response } from "express";
import "./config/database";
import router from "./routes";

const server = express();
server.use(express.json());
server.use(router)

server.listen(4000, () => {
  console.log(" o servidor esta rodando na porta 4000");
});
