// import { DaoInstancia } from "../db/dao.instancia.js";
export class ModelConfig {
    name = ""
    constructor(dao, name) {
        this.dao = dao
        this.name = name
    }

    getNameModels() {
        return this.name
    }
}