const post = require('../db/models/post')

const getAllPost = () => {
  return post.findAll({
    attributes: ['id', 'title', 'img', 'categoryId', 'createdAt'],
    order: [['createdAt', 'DESC']],
  })
}

const createPost = (newPost) => {
  return post.create(newPost)
}
const getPostById = (id) => {
  return post.findAll({ where: { id } })
}

const deletePostById = (id) => {
  return post.destroy({ where: { id } })
}
module.exports = { getAllPost, createPost, getPostById, deletePostById }
