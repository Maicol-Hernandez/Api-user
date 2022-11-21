import express from "express";

import { JourneyRoutes } from "./journey.routes.config.js";
import { UserRoutes } from "./user.routes.config.js";

import { readdirSync } from 'fs'
import { fileURLToPath } from 'url';
import path from "path";


export class Routes {

    routes = []

    constructor(router, controllers) {
        this.router = router
        this.routes = this.routes
        this.controllerJourney = controllers.controllers.ControllerJourney
        this.controllerUser = controllers.controllers.ControllerUser
        // this.getRoutes

        // console.log('controllers :>> ', controllers.controllers);

        // console.log(' :>> ', this.router);
    }

    get getfileURLToPath() {
        const __filename = fileURLToPath(import.meta.url);
        return __filename
    }

    get getDirName() {
        const PATH_ROUTER = path.dirname(this.getfileURLToPath)
        // console.log('PATH_ROUTER :>> ', PATH_ROUTER);
        return PATH_ROUTER
    }

    /**
     * @param {(fileName: string) => any} fileName index.ts, journey.ts a journey le quito el ['journey','.ts']
     * @returns journey, index
     */

    cleanFileName(fileName) {
        const file = fileName.split('.').shift()
        return file;
    }

    getReaddirSync() {

        readdirSync(this.getDirName).filter(async (fileName) => {
            const cleanName = this.cleanFileName(fileName)
            if (cleanName !== "index") {

                console.log(cleanName);
                router.use(`/${cleanName}`)
                // const moduleRouter = await import(`${cleanName}`)

                // router.use(`/${cleanName}`, moduleRouter.router)
            }
        })
    }

    get getRoutes() {
        this.routes.push(new JourneyRoutes(this.router, this.controllerJourney), new UserRoutes(this.router, this.controllerUser));
        return this.routes
    }

}


