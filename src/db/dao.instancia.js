
import { DAO } from "./dao.js";
import { Models } from "../models/models.js";
import { Controllers } from "../controllers/controllers.js";

export class DaoInstancia {
    instancia = ""
    constructor(instancia) {
        console.log('instancia :>> ', instancia);
        this.instancia = instancia
        this.dao = new DAO()
        this.models = new Models(this.dao)
        this.controllers = new Controllers(this.models)
    }

    get getName() {
        return this.instancia
    }

    /**
     * @param {string} name
     */
    set setName(name) {

        console.log('DaoInstancia -> name :>> ', name);

        this.instancia = name
    }

    async obtenerConnection() {
        const conn = await this.dao.obtenerConexion(this.instancia)
        // const models = new Models(this.dao)
        // const controllers = new Controllers(models)

        return conn
    }


}