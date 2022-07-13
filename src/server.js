const express = require("express")
const routerKoders = require("./routes/koder.route")
const app = express()

/* Middlewares */
app.use(express.json())

// Middleware de ruta

app.use("/koders", routerKoders)

/* Endpoint */
app.get("/",(request, response) => {
    response.json({
        message:"Enpoint de Home, bienvenido a nuestro API de clean architecture"
    })
})

/* Exportar  */
// Solo se puede exportar una cosa por archivo, puede ser obj, función, arreglo
module.exports = app // --> a esta app ya se le aplico use y get arriba