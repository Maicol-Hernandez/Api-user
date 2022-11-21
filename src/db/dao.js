import { connections } from "./connections.js";


export class DAO {

    ipInstancia = ""

    constructor() {

        // console.log('super() :>> ', super() );
        this.connections = connections
        // this.ipInstancia = this.ipInstancia
        // this.daoInstancia = new DaoInstancia()
        // console.log('DAO -> ipInstancia :>> ', this.ipInstancia);

        // console.log('connections :>> ', connections);
        // this.connection = this.obtenerInstancia(this.connections.CON_DB_DEV())
    }

    async obtenerInstancia(strIpInstancia) {

        console.log('strIpInstancia :>> ', strIpInstancia);

        try {

            const ipInstancia = this.connections.filter((connection) => connection.strIp == strIpInstancia)

            const [{ config }] = ipInstancia

            // console.log('connection :>> ', config() );
            // console.log('ipInstancia :>> ', confi);

            // console.log('instanciaxxx :>> ', this.connections);

            const pool = await config()

            return pool

        } catch (error) {

            // console.error("error catch", error)

            return error
        }

    }

    async obtenerConexion(ipInstancia) {

        // console.log(' this.daoInstancia.getName :>> ', this.daoInstancia);

        console.log('this.ipInstancia :>> ', this.ipInstancia);

        const conn = await this.obtenerInstancia(ipInstancia || 'interno')

        // const [rows, files] = await conn.query('desc DYALOGOCRM_SISTEMA.USUARI')

        // console.log('rows :>> ', rows);

        // console.log('conn :>> ', conn);


        return conn
    }

}

// const dao = new DAO()
// dao.setNameInstancia = 'interno'
// console.log('dao -> dao.daoInstancia.getName :>> ', dao.daoInstancia.getName);
// console.log('dao -> dao.daoInstancia.getName :>> ', dao.getName);

// dao.obtenerConexion('intern')

// const models = new Models(dao)
// console.log('models :>> ', models);
// export const controllers = new Controllers(models)
// console.log('controllers :>> ', controllers);