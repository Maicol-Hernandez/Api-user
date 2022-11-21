export class ControllerConfig {
    name = ""
    constructor(models, name) {
        this.models = models
        this.name = name
    }

    getNameController() {

        return this.name
    }
}