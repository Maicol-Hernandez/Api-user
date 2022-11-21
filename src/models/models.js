import { ModelJourney } from "./model.journey.js";
import { ModelUser } from "./model.user.js";


export class Models {
    models = {}
    constructor(dao) {
        this.dao = dao;
        this.getModels;
        // console.log('dao :>> ', dao);
    }

    get getModels() {
        this.models.ModelJourney = new ModelJourney(this.dao)
        this.models.ModelUser = new ModelUser(this.dao)

        // this.models.push()
    }



}

