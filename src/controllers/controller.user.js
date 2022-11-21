import { ControllerConfig } from "./controller.config.js";

export class ControllerUser extends ControllerConfig {
    constructor(models) {
        super(models, 'ControllerUser')
        this.models = models;
        // console.log('class Controllers -> models :>> ', models.models[ModelJourney()]);
        this.getAll()
    }

    async getAll() {
        return await this.models.getAll()
    }
}


