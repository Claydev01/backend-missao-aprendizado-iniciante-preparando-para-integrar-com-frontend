const { MongoClient } = require('mongodb')

// Preparamos as informações de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-integrar-com-frontend'

const client = new MongoClient(dbUrl)

function getDatabase(){
 return client.db(dbName)

}

async function connectTodatabase() {
  // Realizamos a conexão com o banco de dados

  console.log('Conectando ao banco de dados...')
  await client.connect()
  console.log('Banco de dados conectado com sucesso!')

 
  
}
function getDatabase() {
  return client.db(dbName)
}
  
module.exports ={
  connectTodatabase,
  getDatabase
}