const {Koder} = require("../models/koder.model")
const mongoose = require("mongoose")

/* Usecase */

const getAll = () => {
  const koders = Koder.find({})
  return koders
}

const getById = async (id) => {
  const koder = await Koder.findById(id)
  return koder
}

module.exports = { getAll, getById }