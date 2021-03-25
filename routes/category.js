const router = require('express').Router()
const {
  getAllCategories,
  createCategory,
} = require('../controllers/categories')

const { createError } = require('../util/index')

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
    const category = await createCategory(newCatogory)
    if (category) {
      return res.status(200).json({ message: 'Category created succsefully' })
    } else {
      return next(createError('Could not created Category.Try again later'))
    }
  } catch (e) {
    console.log(e.message)
    return next(createError('Something  went wrong'))
  }
})
module.exports = router
