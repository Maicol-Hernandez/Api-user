import 'dotenv/config'
import express from "express";
import { App } from "./app.js";
import { createServer } from "http";

class Server {

    constructor(app) {
        // super(app)
        this.port = process.env.PORT || 8080
        this.name = process.env.NAME || 'World'

        this.app = app

        // console.log('app :>> ', app);
    }

    get createServer() {
        const httpServer = createServer(this.app.app)
        return httpServer
    }
    // ruta 
    getServer() {
        this.app.app.get('/', (req, res) => {


            // console.log('req :>> ', req.headers.host);
            // console.log('req :>> ', req);
            // console.log('this.app :>> ', this.app);

            res.send(`Primera prueba de servicio NODE en ejecucion ${this.name}! V3 prueba`)



        })
    }
    // iniciar servidor
    startUp() {
        // this.app.config()
        this.createServer.listen(this.port, () => {
            this.app.routes.forEach(route => {
                console.log(`Routes configured for ${route.getName()}`);
            });
            // console.log('this.app.routes :>> ', this.app.routes);

            console.log(`DY JOURNEY esta corriendo en el puerto ${this.port}`);
        })

    }
}

const app = new App(express())
const serve = new Server(app)
serve.getServer()
serve.startUp()

