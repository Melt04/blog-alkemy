const { Sequelize } = require('sequelize')
const { DB_PORT, DB_NAME, DB_USER } = process.env
console.log(DB_USER)
const sequelize = new Sequelize(
  `mysql://${DB_USER}:@localhost:${DB_PORT}/${DB_NAME}`
)

module.exports = sequelize
