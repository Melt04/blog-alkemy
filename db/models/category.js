const { DataTypes } = require('sequelize')
const post = require('./post')
const sequelize = require('../index')

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
Category.hasMany(post, {
  foreignKey: {
    allowNull: false,
  },
})
module.exports = Category
