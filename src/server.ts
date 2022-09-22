import express, { Request, Response } from "express";
import "./config/database";

const server = express();
server.use(express.json());
server.get("/", (req: Request, res: Response) => {
  return res.send("wello word");
});

server.listen(4000, () => {
  console.log(" o servidor esta rodando na porta 4000");
});
