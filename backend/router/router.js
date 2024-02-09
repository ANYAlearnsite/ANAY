const Routermain = require ('express').Router()
const controller = require ('../controller/controller')
const jwt = require ('jsonwebtoken')
const admincontroller=require('../controller/controllerADMIN');
const { Route } = require('react-router');

const authenticateToken = (req, res, next) => {
    const token = req.header('Autho');
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    //token.split(' ')[1]
    // need to  add this while im finish the front req !

    jwt.verify(token, process.env.KEY_JWT, (err, user) => {

      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
  
      req.user = user;
      next();
    });
  };
  
Routermain.post('/create',controller.sign_up_post)
// login user 
Routermain.post('/getuser',controller.GetUser)
// get all 
Routermain.get('/getusers',authenticateToken,controller.GetAll)

// Routermain.post('/signup',)
// Routermain.get('/login',)
// Routermain.post('/login',)
Routermain.get("/allusers",admincontroller.fetchallusers)
Routermain.get('/alllessons',admincontroller.fetchalllessons)
Routermain.get('/allvideoslessons',admincontroller.fetchallvideoslessons)
Routermain.post('/adduser',admincontroller.adduserrr)
Routermain.delete('/delet/:id',admincontroller.removeuser)
Routermain.put('/update/:id',admincontroller.updated)
Routermain.put('/updatelesson/:id',admincontroller.uplesson)
Routermain.delete('/delete/:id',admincontroller.dllesson)
Routermain.get("/one/:name",admincontroller.getoneus)
module.exports = Routermain