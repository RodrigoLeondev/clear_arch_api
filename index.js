require('dotenv').config()
const mongoose = require("mongoose")
const server = require("./src/server")

/* Process */
// .env 
// Variables de entorno 
// Variable que podemos utilizar en node

// console.log("process env", process.env)
// mongodb+srv://Rod:Galaxya5a@kodemia.zty8zli.mongodb.net/kodemia


// Destructurar las variables de entorno que estan en .env
const { 
    DB_USER, 
    DB_PASSWORD, 
    DB_HOST, 
    DB_NAME
} = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then(()=>{
  console.log("Connected to DB")
    server.listen(8080, (request, response) => {
      console.log("Servidor encendido")
  })
})
.catch((err)=> {
  console.log("Hubo un error", err)
})