const cat = require('../db/models/category')
const getAllCategories = () => {
  return cat.findAll({})
}

const getCategoryById = (id) => {
  return cat.findOne({ where: { id } })
}

const createCategory = (newCategory) => {
  return cat.create(newCategory)
}

module.exports = { getAllCategories, getCategoryById, createCategory }
