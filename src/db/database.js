import { createPool } from "mysql2/promise";

// obtener el cliente
export class Database {

    constructor(user, password, host, connectionLimit) {
        this.host = host
        this.user = user
        this.password = password
        this.connectionLimit = connectionLimit
    }

    getConnection() {
        // Creo la conexión 
        const { connectionLimit, host, user, password, charset } = this.config

        const pool = createPool({
            connectionLimit: connectionLimit,
            host: host,
            user: user, // e.g. 'my-db-user'
            password: password, // e.g. 'my-db-password'
            charset: charset

        });

        // console.log('pool :>> ', pool);

        return pool
    }

    get config() {
        const config = {
            connectionLimit: this.connectionLimit,
            host: this.host,
            user: this.user, // e.g. 'my-db-user'
            password: this.password, // e.g. 'my-db-password'
            charset: 'utf8mb4'
        }

        // console.log('config xx :>> ', config);

        return config
    }


}






