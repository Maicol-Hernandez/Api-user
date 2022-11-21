import { RoutesConfig } from "./routes.config.js";
import { DaoInstancia } from "../db/dao.instancia.js";


export class JourneyRoutes extends RoutesConfig {

    constructor(router, controller) {
        super(router, 'JourneyRoutes')
        this.controller = controller

        // console.log('class -> JourneyRoutes -> controller :>> ', controller);
        // console.log('this.router.route :>> ', this.router.route);
    }

    configureRoutes() {

        this.router.route(`/journey`)
            .get(async (req, res) => {

                const { strIpBD } = req.body

                console.log('strIpBD :>> ', strIpBD);

                // const daoInstancia = new DaoInstancia(strIpBD)

                // console.log('this.dao :>> ', daoInstancia);

                // console.log('this.controller :>> ', );

                // this.dao.obtenerConexion(strIpBD)

                this.controller.models.dao.instancia = strIpBD

                const { strMensaje, strEstado } = await this.controller.getAll()
                if (strEstado === "ok" && strMensaje) {

                    res.status(200).send({ strMensaje: `List of journey`, data: rows });
                } else {
                    res.status(400).send({ strMensaje: `List of journey ${strMensaje}`, strEstado: `${strEstado}` });
                }


            })
            .post(async (req, res) => {

                const { strIpBD } = req.body


                this.controller.models.dao.instancia = strIpBD

                const { strMensaje, strEstado } = await this.controller.create(req.body)


                // console.log('res.body :>> ', req.body);

                console.log('strMensaje :>> ', strMensaje);


                if (strEstado === "ok" && strMensaje) {

                    res.status(200).send({ strMensaje: `Post to journey`, data: rows });
                } else {
                    res.status(400).send({ strMensaje: `Post to journey ${strMensaje}`, strEstado: `${strEstado}` });
                }

            });

        this.router.route(`/journey/:journeyId`).all((_req, _res, next) => {
            // this middleware function runs before any request to /journey/:journeyId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get(async (req, res) => {

                const { rows, fields } = await this.controller.getAll()

                if (rows && fields) {

                    res.status(200).send({ strMensaje: `GET requested for id ${req.params.journeyId}`, data: rows });

                } else {
                    const { error } = await this.controller.getAll()

                    // console.log('this.controller.getAll() :>> ', error);

                    res.status(200).send({ strMensaje: `GET requested for id ${req.params.userId} ${error}`, data: "" });

                }


            })
            .put((req, res) => {
                res.status(200).send(`PUT requested for id ${req.params.journeyId}`);
            })
            .patch((req, res) => {
                res.status(200).send(`PATCH requested for id ${req.params.journeyId}`);
            })
            .delete((req, res) => {
                res.status(200).send(`DELETE requested for id ${req.params.journeyId}`);
            });


        return this.router
    }
}