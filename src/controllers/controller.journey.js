import { ControllerConfig } from "./controller.config.js";

export class ControllerJourney extends ControllerConfig {
    constructor(model) {
        super(model, 'ControllerJourney')
        this.models = model;
        // console.log('class Controllers -> models :>> ', model);
        // this.getAll()
    }


    /**
     * creo el journey a partir del objecto
     * 
     * @param {object} objJourney
     * @returns {object} response, strMensaje y strEstado 
     */
    create(objJourney) {

        // console.log('objJourney :>> ', objJourney);

        const res = this.models.create(objJourney)
        // console.log('res :>> ', res);
        return res

    }


    /**
     * obtengo el journey por id 
     * 
     * @param {int} id 
     */
    getById(id) { }


    /**
     * editamos el journey por id 
     * 
     * @param {int} id 
     */
    edit(id) { }


    /**
     * retorna todos los journey
     * 
     * @returns Todos los journey
     */
    async getAll() {

        return await this.models.getAll();
    }


    /**
     * Eliminamos un journey
     * 
     * @param {int} id 
     */
    delete(id) {

    }


}


