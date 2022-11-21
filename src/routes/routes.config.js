import express from 'express';

export class RoutesConfig {
    // router = express();
    name = "";

    constructor(router, name) {
        this.router = router;
        this.name = name;
        this.configureRoutes()
    }
    getName() {
        return this.name;
    }

}