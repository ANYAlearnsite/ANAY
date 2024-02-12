const db=require('../database/dbADMIN')



const fetchAllLessons = async(req , res)=>{
    try {
        const less = await db.getalllessons()
        res.json(less)
    } catch (error) {
        throw error
    }
}


module.exports={fetchAllLessons}