const Routermain = require ('express').Router()
const controller = require ('../controller/controller')
const jwt = require ('jsonwebtoken')


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

module.exports = Routermain