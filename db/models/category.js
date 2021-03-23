const { DataTypes } = require('sequelize')
const post = require('./post')
const sequelize = require('../index')

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
Category.hasOne(post)
module.exports = Category
