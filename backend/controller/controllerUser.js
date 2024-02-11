
const {
  getall,
  getOne,
  updateU,
  favorite,
  addfavorit,
  deletefavorit,
  updateImage,
  insertscore
} = require("../database/users");
const bycribt = require("bcrypt");

module.exports = {
  getAll: async (req, res) => {
    try {
      const results = await getall();
      console.log(results);
      res.status(200).json(results[0]);
    } catch (err) {
      console.log(err);
    }
  },

  search: async (req, res) => {
    const id = req.params.idlessons;
    try {
      const results = await getOne(id);
      res.status(200).json(results[0]);
    } catch (err) {
      console.log(err);
    }
  },

  update: async (req, res) => {
    const newname = req.body.name;
    const newpwd = req.body.pwd;
    const id = req.params.iduser;
    try {
      const hashpwd = await bycribt.hash(newpwd, 10);
      const result = updateU([newname, hashpwd, id]);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  },

  favoritList: async (req, res) => {
    let id = req.params.id;
    try {
      const results = await favorite(id);
      res.status(200).json(results[0]);
    } catch (err) {
      console.log(err);
    }
  },

  addfavoritelesson: async (req, res) => {
    const user = req.body.user;
    const lesson = req.body.lesson;
    try {
      const results = await addfavorit(user, lesson);
      res.status(200).json(results[0]);
    } catch (err) {
      console.log(err);
    }
  },

  deletefavless: async (req, res) => {
    const user = req.body.user;
    const lesson = req.body.lesson;
    try {
      const results = await deletefavorit([user, lesson]);
      res.status(200).json(results[0]);
    } catch (err) {
      console.log(err);
    }
  },


UpdateImage : async (req,res)=>{
  const id= req.body.id;
  const image =req.body.image;
  try{
    const result = await updateImage([image,id])
    res.status(200).send("updated")
  }catch(err){throw(err)}

},
InsertScore : async (req,res)=>{
  const score = req.body.score;
  const iduser = req.body.iduser;
  const name = req.body.name;
  try{
    const result = await insertscore([score,iduser,name])
    res.status(200).send('inserted !')
  }
  catch(err){
    throw(err)
  }
}
  
