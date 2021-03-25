const createError = (message, statusCode = 500) => {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}
const validateImg = (text) => {
  const reg = new RegExp(/\.(jpg|gif|png)$/)

  return text.match(reg) !== null
}

module.exports = { createError, validateImg }
