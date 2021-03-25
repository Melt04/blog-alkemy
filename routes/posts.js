const router = require('express').Router()

const createError = require('../util/index')

const {
  createPost,
  getPostById,
  getAllPost,
  deletePostById,
  updatePostById,
} = require('../controllers/posts')
router.get('/posts', async (req, res, next) => {
  try {
    const posts = await getAllPost()
    res.status(200).json(posts)
  } catch (e) {
    next(createError(e.message))
  }
})
router.post('/posts', async (req, res, next) => {
  const { newPost } = req.body
  try {
    const post = await createPost(newPost)
    if (post) {
      return res.status(201).json(post)
    } else {
      next(createError('Could not created Post.Try again Later'))
    }
  } catch (e) {
    next(createError(e.message))
  }
})
router.get('/posts/:id', async (req, res, next) => {
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

router.delete('/posts/:id', async (req, res, next) => {
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
router.patch('/posts/:id', async (req, res, next) => {
  const { id } = req.params
  const { newPost } = req.body
  try {
    const [updatedPost] = await updatePostById(id, newPost)

    if (updatedPost > 0) {
      return res.status(200).json({ message: 'Updated succesfully' })
    }
    next(createError('Post not found', 404))
  } catch (e) {
    next(createError(e.message))
  }
})
module.exports = router
