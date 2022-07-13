const mongoose = require("mongoose")

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlengt: 3,
        maxlenght: 20,
        required: true
    },
    edad: {
        type: Number,
        min: 18,
        max: 150,
    },
    gen: {
    type: String, 
    required: true   
    },
    modulo: {
        type: String
    },
    hobbies: {
        type: [String]
    },
    sexo:{
        type: String,
        enum: ["f", "m", "o"]
    }
})

const Koder = mongoose.model("koders", koderSchema) // --> "koders", es el nombr de la colección
const Koder2 = mongoose.model("koders", koderSchema)

module.exports = {Koder, Koder2}