const express = require('express')
const cors = require ('cors')
const Routermain = require('./router/router.js')
const Routeradmin= require('./router/routeradmin.js')


const PORT = 3600
const app = express()
app.use(express.json())

app.use(express.static(__dirname + '../public'))
app.use(cors())



app.use("/",Routermain)
app.use("/admin",Routeradmin)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})