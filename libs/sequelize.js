import {Sequelize} from 'sequelize'
import {setupModels} from './../db/models/index.js'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const URI = process.env.DB_URI

console.log(URI)

// Conexion with database
// Pool and sequelize (ORM)
const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
  logging: true,
})
setupModels(sequelize)
// sequelize.sync(
//   // {force: true}
//   );

export default sequelize;