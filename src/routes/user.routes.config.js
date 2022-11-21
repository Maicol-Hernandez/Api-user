import { RoutesConfig } from "./routes.config.js";

export class UserRoutes extends RoutesConfig {

    constructor(router, controller) {
        super(router, 'UserRoutes')
        this.controller = controller

        // console.log('controller :>> ', controller);

    }

    configureRoutes() {

        this.router.route(`/users`)
            .get(async (_req, res) => {
                const { rows, fields } = await this.controller.getAll()
                res.status(200).send({ strMensaje: `List of users`, data: rows });

            })
            .post((_req, res) => {
                res.status(200).send(`Post to users`);
            });

        this.router.route(`/users/:userId`).all((_req, _res, next) => {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get(async (req, res) => {
                const { rows, fields } = await this.controller.getAll()

                if (rows && fields) {

                    res.status(200).send({ strMensaje: `GET requested for id ${req.params.userId}`, data: rows });

                } else {
                    const { error } = await this.controller.getAll()

                    // console.log('this.controller.getAll() :>> ', error);

                    res.status(200).send({ strMensaje: `GET requested for id ${req.params.userId} ${error}`, data: "" });

                }

            })
            .put((req, res) => {
                res.status(200).send(`PUT requested for id ${req.params.userId}`);
            })
            .patch((req, res) => {
                res.status(200).send(`PATCH requested for id ${req.params.userId}`);
            })
            .delete((req, res) => {
                res.status(200).send(`DELETE requested for id ${req.params.userId}`);
            });


        return this.router
    }
}