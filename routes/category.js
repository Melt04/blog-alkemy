const router = require('express').Router()
const {
  getAllCategories,
  createCategory,
} = require('../controllers/categories')

const { createError } = require('../util/index')
const { validateCategory } = require('../util/validate')
router.get('/', async (req, res, next) => {
  try {
    const categories = await getAllCategories()
    return res.status(200).json(categories)
  } catch (e) {
    return next(createError('Something  went wrong'))
  }
})
router.post('/', async (req, res, next) => {
  const { newCatogory } = req.body
  try {
    if (validateCategory(newCatogory)) {
      const category = await createCategory(newCatogory)
      if (category) {
        return res.status(200).json({ message: 'Category created succsefully' })
      } else {
        return next(createError('Could not created Category.Try again later'))
      }
    } else {
      return next(createError('Missing fields or bad format', 400))
    }
  } catch (e) {
    return next(createError('Something  went wrong'))
  }
})
module.exports = router
