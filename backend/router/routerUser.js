const RouterUsers = require ('express').Router()
const controlleruser =require('../controller/controllerUser')
const {authenticateToken } = require('../auth/auth')

// get all lessons 
RouterUsers.get('/getAll',controlleruser.getAll)
//done
RouterUsers.get('/get/:idlessons',authenticateToken,controlleruser.search)
//  ----------------need to be more controlled !--------------------// 
RouterUsers.put('/put/:iduser',authenticateToken,controlleruser.update)
//done
RouterUsers.post('/add',authenticateToken,controlleruser.addfavoritelesson)
//done
RouterUsers.get('/get/fav/:id',authenticateToken,controlleruser.favoritList)
//done

RouterUsers.delete('/delete',authenticateToken,controlleruser.deletefavless)
//Ahmed cloudinary 
RouterUsers.put("/updateImage",authenticateToken,controlleruser.UpdateImage)  

//insert score test 
RouterUsers.post("/testresult",authenticateToken,controlleruser.InsertScore)


module.exports = RouterUsers