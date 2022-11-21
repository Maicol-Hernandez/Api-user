import { ModelConfig } from "./model.config.js";

export class ModelUser extends ModelConfig {
    constructor(dao) {
        super(dao, 'ModelUser')
        this.dao = dao
        // console.log('models journey  :>> ', this.dao);
    }

    async getAll() {

        // ejemplo de como hacer el query 
        // query dao
        // const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);

        try {

            // const [rows, fields] = await this.conn.execute('SELECT CANAL FROM DYALOGOCRM_WEB.DY_V_CONDIA WHERE AGENTE_ID = ? AND CANAL <> ? GROUP BY CANAL', [2007, ''])

            const [rows, fields] = await this.dao.query('desc DYALOGOCRM_SISTEMA.USUARI')

            // console.log(' await this.conn.execute() :>> ', rows);
            return { rows, fields }
        } catch (error) {

            // console.error('ModelUser -> error', error)

            return { error }
        }

    }

}