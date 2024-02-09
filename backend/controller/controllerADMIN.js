const db=require('../database/dbADMIN')

const fetchallusers= async (req,res)=>{
try{
    const data=await db.getallusers()
res.status(200).json(data)
}
catch{(err)=>{
console.log(err);
}}
}
const fetchalllessons=async(req,res)=>{
    try{
        const data=await db.getalllessons()
        res.status(200).json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
}
const fetchallvideoslessons=async(req,res)=>{
    try{
        const data=await db.getvideoslessons()
        res.status(200).json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
}

const adduserrr=async(req,res)=>{
    try{
        const newone=req.body
        await db.adduser(newone)
        res.status(201).send("user added successfully !")
    }
    catch{(err)=>{
        console.log(err);
    }}
}

const removeuser=async(req,res)=>{
    try{
        const id=req.params.id
        const data=   await db.deluser(id)
res.json(data)  
  }
    catch{(err)=>{
        console.log(err);
    }}
}
const updated=async(req,res)=>{
    try{
        let id=req.params.id
        let role=req.body.role
        await db.updrole(role,id)
        res.send('updated ')
    }
    catch{(err)=>{
        console.log(err);
    }}
}
const uplesson=async(req,res)=>{
try{
    let id=req.params.id
    let newurl=req.body.urlvid
    await db.updatelesson(newurl,id)
    res.send("updated")
}
catch{(err)=>{
    console.log(err);
}}
}
const dllesson=async(req,res)=>{
    try{
        const id=req.params.id
        await db.deletelesson(id)
        res.send('lesson deleted')
    }
    catch {(err)=>{
        console.log(err);
    }}
}
const getoneus=async(req,res)=>{
    try{
        let username=req.params.name
        const data=await db.getoneuser(username)
        res.json(data)
    }
    catch{(err)=>{
        console.log(err);
    }}
}

module.exports={fetchallusers,fetchalllessons,fetchallvideoslessons,adduserrr,removeuser,updated,uplesson,dllesson,getoneus}