const Koder = require("../models/koder.model")
const mongoose = require("mongoose")

/* Usecase */

const getAll = () => {
  const koders = Koder.find({})
  return koders
}

const getById = (id) => {
  const koder = Koder.findById(id)
  return koder
}

module.exports = { getAll, getById }