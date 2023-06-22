import express from "express";
import router from "../routes";
import cors from 'cors'
import errorHandler from "./errorHandler";

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", router);
  app.use(errorHandler);
  
  return app;
}

export default createServer;
