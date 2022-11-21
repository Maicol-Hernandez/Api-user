import 'dotenv/config'
import express from "express";
import { Router } from "express";
import cors from "cors";

import { DAO } from "./src/db/dao.js";
import { Models } from "./src/models/models.js";
import { Controllers } from "./src/controllers/controllers.js";
import { Routes } from "./src/routes/routes.js";


export class App {

  router = Router()

  constructor(app) {
    this.app = app
    this.routes = []
    this.config()
  }

  async config() {
    const dao = new DAO()
    // dao.obtenerConexion()
    const models = new Models(dao)
    // // console.log('models :>> ', models);
    const controllers = new Controllers(models)
    // // console.log('controllers :>> ', controllers);

    this.routes = new Routes(this.router, controllers).getRoutes

    // console.log('this.routes :>> ', this.routes);

    // console.log('this.router :>> ', this.router);

    this.app.disable('x-powered-by');
    // here we are adding middleware to allow cross-origin requests
    this.app.use(cors({
      origin: '*'
    }))
    // here we are adding middleware to parse all incoming requests as JSON 
    this.app.use(express.json());

    this.app.use("/api", this.router)
  }


}


