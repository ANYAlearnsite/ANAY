const Routeradmin = require ('express').Router()
const admincontroller=require('../controller/controllerADMIN');

const { Route } = require('react-router');




Routeradmin.get("/alltests",admincontroller.fetchalltests)
Routeradmin.get("/allusers",admincontroller.fetchallusers)
Routeradmin.get('/alllessons',admincontroller.fetchalllessons)
Routeradmin.get('/allvideoslessons',admincontroller.fetchallvideoslessons)
Routeradmin.post('/adduser',admincontroller.adduserrr)

Routeradmin.delete('/delet/:id',admincontroller.removeuser)
Routeradmin.put('/update/:id',admincontroller.updated)
Routeradmin.put('/updatelesson/:id',admincontroller.uplesson)
Routeradmin.delete('/delete/:id',admincontroller.dllesson)
Routeradmin.get("/one/:name",admincontroller.getoneus)
Routeradmin.post("/add",admincontroller.createlesson)
Routeradmin.get("/:category",admincontroller.searchcatego)

module.exports = Routeradmin