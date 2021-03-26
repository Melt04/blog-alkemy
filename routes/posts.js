const router = require('express').Router()

const { createError } = require('../util/index')
const { validatePost, validteUpdatedPost } = require('../util/validate')

const {
  createPost,
  getPostById,
  getAllPost,
  deletePostById,
  updatePostById,
} = require('../controllers/posts')
router.get('/', async (req, res, next) => {
  try {
    const posts = await getAllPost()
    res.status(200).json(posts)
  } catch (e) {
    next(createError(e.message))
  }
})
router.post('/', async (req, res, next) => {
  const { newPost } = req.body
  try {
    if (validatePost(newPost)) {
      const post = await createPost(newPost)
      if (post) {
        return res.status(201).json(post)
      } else {
        return next(createError('Could not created Post.Try again Later'))
      }
    } else {
      return next(createError('Missing fields or bad format'), 400)
    }
  } catch (e) {
    next(createError(e.message))
  }
})
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const post = await getPostById(id)
    if (post.length > 0) {
      res.status(200).json(post)
    } else {
      next(createError('Post not found', 404))
    }
  } catch (e) {
    next(createError(e.message, 404))
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const post = await deletePostById(id)
    if (post) {
      res.status(200).json({ message: 'Post Deleted succesfully' })
    } else {
      next(createError('Post not found', 404))
    }
  } catch (e) {
    next(createError(e.message, 404))
  }
})
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params
  const { updatedPost } = req.body
  try {
    if (validteUpdatedPost(updatedPost)) {
      const [post] = await updatePostById(id, updatedPost)
      if (post > 0) {
        return res.status(200).json({ message: 'Updated succesfully' })
      }
      return next(createError('Could not updated Post', 404))
    } else {
      return next(createError('Missing fields or bad format', 400))
    }
  } catch (e) {
    next(createError(e.message))
  }
})
module.exports = router
