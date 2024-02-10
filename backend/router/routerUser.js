const RouterUsers = require ('express').Router()
const controller=require('../controller/controllerUser')

RouterUsers.get('/getAll',controller.getAll)
RouterUsers.get('/get/:idlessons',controller.search)
RouterUsers.put('/put/:iduser',controller.update)
RouterUsers.post('/add',controller. addfavoritelesson)
RouterUsers.delete('/delete/:iduser',controller.deletefavless)
RouterUsers.get('/get/fav/:id',controller.favoritList)

module.exports = RouterUsers