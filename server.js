const express = require('express')
const server = express()
require('dotenv').config()

const sequelize = require('./db/index')
const post = require('./db/models/post')
const category = require('./db/models/category')
const postRouter = require('./routes/posts')

const PORT = process.env.PORT || 3001

server.use(express.json())
server.use('/api', postRouter)

server.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500

  res.status(statusCode).json({ error: error.message })
})

server.listen(PORT, async () => {
  try {
    await sequelize.sync()
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})
