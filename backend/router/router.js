const Routermain = require ('express').Router()
const controller = require ('../controller/controller')
const {authenticateToken} = require('../auth/auth')

Routermain.post('/create',controller.sign_up_post)
// login user 
Routermain.post('/getuser',controller.GetUser)

// get all 
Routermain.get('/getusers',authenticateToken,controller.GetAll)

// Routermain.post('/signup',)
// Routermain.get('/login',)
// Routermain.post('/login',)

module.exports = Routermain