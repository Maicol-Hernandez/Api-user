import 'dotenv/config'
import { createPool } from "mysql2/promise";


const connections = [

  //Conexion para la instancia DEV
  // {
  //   async config() {
  //     return createPool({
  //       user: process.env.DB_USER,
  //       password: process.env.DB_PASS,
  //       socketPath: process.env.DEV_CONN,
  //       // host: process.env.DB_HOST || 'host',
  //       ...config,
  //     });
  //   },
  //   strIp: "interno"
  // },

  {

    async config() {
      // Note: Saving credentials in environment variables is convenient, but not
      // secure - consider a more secure solution such as
      // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
      // keep secrets safe.
      return createPool({
        user: process.env.DB_USER, // e.g. 'my-db-user'
        password: process.env.DB_PASS, // e.g. 'my-db-password'
        // database: process.env.DB_NAME, // e.g. 'my-database'
        socketPath: process.env.DEV_CONN, // e.g. '/cloudsql/project:region:instance' /cloudsql/dyalogocc:us-east1:dy-mysql-dev
        // Specify additional properties here.
        // host: process.env.DB_HOST || 'host',
        // ...config,
      });
    },
    strIp: "interno"
  },



  //Conexion para la instancia de QA
  {
    async CON_DB() {
      return createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        socketPath: process.env.QA_CONN,
        // host: process.env.DB_HOST || 'host',
      });

    },
    strIp: "QA"
  }

]



// createUnixSocketPool initializes a Unix socket connection pool for
// a Cloud SQL instance of MySQL.
// const createUnixSocketPool = 

export { connections }



