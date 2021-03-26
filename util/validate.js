const Validator = require('jsonschema').Validator
let v = new Validator()

Validator.prototype.customFormats.imgFormat = function (input) {
  const reg = new RegExp(/\.(jpg|gif|png)$/)
  return input.match(reg) !== null
}
let postSchema = {
  type: 'object',
  properties: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    CategoryId: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      format: 'imgFormat',
    },
  },

  additionalProperties: false,
}
let postUpdateSchema = {
  type: 'object',
  properties: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    img: {
      type: String,
      format: 'imgFormat',
    },
  },

  additionalProperties: false,
}

let categorySchema = {
  type: 'object',
  properties: {
    name: {
      type: String,
      required: true,
    },
  },
  additionalProperties: false,
}

const validatePost = (instance) => {
  return v.validate(instance, postSchema).valid
}
const validateCategory = (instance) => {
  return v.validate(instance, categorySchema).valid
}
const validteUpdatedPost = (instance) => {
  return v.validate(instance, postUpdateSchema).valid
}

module.exports = { validatePost, validteUpdatedPost, validateCategory }
