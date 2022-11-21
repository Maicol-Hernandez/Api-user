
import { ControllerJourney } from "./controller.journey.js";
import { ControllerUser } from "./controller.user.js";

export class Controllers {
    controllers = {}
    constructor(models) {
        this.modelJourney = models.models.ModelJourney;
        this.modelUser = models.models.ModelUser;
        this.getControllers;

        // console.log('class Controllers -> models :>> ', models.models);
    }

    get getControllers() {
        this.controllers.ControllerUser = new ControllerUser(this.modelUser)
        this.controllers.ControllerJourney = new ControllerJourney(this.modelJourney)

    }


}