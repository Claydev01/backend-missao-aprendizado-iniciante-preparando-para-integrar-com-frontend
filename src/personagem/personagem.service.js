const { ObjectId } = require('mongodb')
const { getDatabase } = require('../db/database-connection')

function getCollection() {
  //Acessamos a lista de personagem na collection do MongoDB
  return getDatabase().collection('personagem')
}
function readAll() {
  return getCollection().find().toArray()
}

/**
 * 
 * @param {string} id 
 * @returns 
 */

function readById(id) {
  // retorna o item na collection usando o ID
  return getCollection().findOne({ _id: new ObjectId(id) })
}

function create(newItem) {
  //adicionamos na collection
  return getCollection().insertOne(newItem)
}


/**
 * 
 * @param {string} id 
 * @returns 
 */
function updateById(id, newItem) {
  // Atualizamos na collection o novoItem pelo ID
  return getCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: newItem }
  )
}

/**
 * 
 * @param {string} id 
 * @returns 
 */

async function deleteById(id) {
  // Remover o item da collection usando o ID
 return getCollection().deleteOne({ _id: new ObjectId(id) })
}
module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}