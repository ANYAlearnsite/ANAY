
const db = require('../database/db');
const bycribt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

// console.log(sec,'ssss');

module.exports = {
    sign_up_post: async (req, res) => {
        try {
            const p = req.body.pwd
            const hashpwd = await bycribt.hash(p, 10,)
            const result = db.singup([req.body.name,hashpwd,req.body.role])
                res.status(200).send('user cerated !')
        }
        catch (err) {
            console.log('err in creating user ', err);
        }
    },
    GetUser: async (req, res) => {
        try {
           
            const result = await db.getuser(req.body.name);
          
            console.log('2',req.body.pwd);
            if (result && result.length > 0 ) {
                
                const test = bycribt.compare(req.body.pwd,result[0][0].pwd);
                if (!test) {
                    console.log('user credentials not matched');
                } else {
                    const jwt_user = jwt.sign({
                        //payload ! 
                        user : result[0]
                    } ,process.env.KEY_JWT ,{
                        // token time for expire ! 
                        expiresIn : 3000000
                    })
                    res.status(200).json({jwt_user});
                }
            }
            else{
                res.status(500).send('not found')
            }
          
        } catch (err) {
            console.log('err in getting user ', err);
        }
    }
    

}