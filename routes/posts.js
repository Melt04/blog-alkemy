const router = require('express').Router()

router.get('/posts', (req, res) => {})
router.post('/posts', (req, res) => {
  console.log(req.body)
  res.send('Hola')
})

module.exports = router
