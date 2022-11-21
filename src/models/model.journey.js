import { ModelConfig } from "./model.config.js";

export class ModelJourney extends ModelConfig {
    constructor(dao) {
        super(dao, 'ModelJourney')
        this.dao = dao
        // console.log('ModelJourney -> dao :>> ', this.dao);
        // console.log('ModelJourney -> dao :>> ', this.dao.connections);

        // this.getAll()
    }


    /**
     *  creo el journey a partir del objecto
     * 
     * @param {object} objJourney 
     * 
     */
    async create(objJourney) {

        const { strIpBD } = objJourney

        const conn = await this.dao.obtenerConexion(this.dao.instancia)

        try {

            // console.log('modelo objJourney :>> ', strIpBD);

            // console.log('this.dao :>> ', this.dao.obtenerConexion(strIpBD));


            // console.log('conn xxx :>> ', await conn);


            const [rows, fields] = await conn.query('desc DYALOGOCRM_WEB.DY_V_CONDIA')

            return { strMensaje: "this menssage", strEstado: "ok" }

        } catch (error) {

            console.error(error)

            return { strMensaje: `this menssage ${error}`, strEstado: "fallo" }

        }

    }


    /**
     * obtengo el journey por id 
     * 
     * @param {int} id 
     */
    getById(id) { }


    /**
     * editamos el journey por id 
     * 
     * @param {int} id 
     */
    edit(id) { }


    /**
     * retorna todos los journey
     * 
     * @returns Todos los journey
     */
    async getAll() {

        const conn = await this.dao.obtenerConexion(this.dao.instancia)

        // ejemplo de como hacer el query 
        // query dao
        // const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);

        try {

            // const [rows, fields] = await this.conn.execute('SELECT CANAL FROM DYALOGOCRM_WEB.DY_V_CONDIA WHERE AGENTE_ID = ? AND CANAL <> ? GROUP BY CANAL', [2007, ''])

            // console.log('this.dao :>> ', this.dao);

            // console.log('await conn :>> ', await conn);

            const [rows, fields] = await conn.query('desc DYALOGOCRM_WEB.DY_V_CONDIA')

            // console.log(' await this.conn.execute() :>> ', rows);

            return { rows, fields }

        } catch (error) {

            console.error('ModelJourney -> error', error)

            return { error }
        }

    }


    /**
     * Eliminamos un journey
     * 
     * @param {int} id 
     */
    delete(id) {

    }



}