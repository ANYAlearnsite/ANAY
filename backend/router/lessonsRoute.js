const RouterLessons = require ('express').Router()
const lessonsController = require ('../controller/lessonController')


RouterLessons.get('/getLessons' , lessonsController.fetchAllLessons) 
 
module.exports = RouterLessons