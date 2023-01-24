import {Sequelize} from 'sequelize'

const db_name = process.env.DB_NAME
const db_password = process.env.DB_PASSWORD
const db_user = process.env.DB_USER

const URI = `mysql://${db_user}:${db_password}@${db_name}-mysql.services.clever-cloud.com:3306/${db_name}`

// Conexion with database
// Pool and sequelize (ORM)
const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
  logging: true,
})

export default sequelize;