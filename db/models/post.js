const { DataTypes } = require('sequelize')

const sequelize = require('../index')

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    defaultValue: 'null',
  },
})

module.exports = Post
