const Routermain = require ('express').Router()
const controller = require ('../controller/controller')



Routermain.post('/create',controller.sign_up_post)
// login user 
Routermain.post('/getuser',controller.GetUser)

// Routermain.post('/signup',)
// Routermain.get('/login',)
// Routermain.post('/login',)

module.exports = Routermain