const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/google', UserController.google)

module.exports = router