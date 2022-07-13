const express = require("express");
const app = require("../server");
const { getAll, getById } = require("../usecases/koder.usecase")

const router = express.Router()

// /koders
router.get("/", async (request, response) => {
  try {
    const koders = await getAll(); // useCase

    response.json({
      success: true,
      data: {
        koders
      }
    })
  }catch(err) {
    response.status(400)
    response.json({
      success: false,
      message: err.message
    })
  }
})

// Get By Id
router.get("/:id", async (request, response) => {
    // Tratamos nuestras sean lo mas tontas posibles
    const { id } = request.params
  
    try {
      const koder = await getById(id)
      response.json({
        success: true,
        data: {
          koder
        }
      })
    } catch(error) {
      // No se encontro
      response.status(error.status || 500) // Not found
      response.json({
        success:false,
        message: error.message
      })
    }
  })



module.exports = router