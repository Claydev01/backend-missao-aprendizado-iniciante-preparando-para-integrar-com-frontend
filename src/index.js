require('dotenv').config()
const express = require('express')
const { connectTodatabase } = require('./db/database-connection')

//Routers
const personagemRouter = require('./personagem/personagem.router')
//const { MongoClient, ObjectId } = require('mongodb')



// Declaramos a função main()
async function main() {
// conectamos no Db
 await connectTodatabase()
  
 //Inicializamos o express

 const app = express()
  ///middlewares
  // Sinalizo para o Express que estamos usando JSON no Body
 app.use(express.json())

//Endpoint de  Hello World
 app.get('/', function (req, res) {
    res.send('Hello World')
  })

  //Routers
  app.use('/personagem', personagemRouter)


  app.listen(3000, function (){
    console.log('Servidor rodando em http:localhost:3000')
  })
 }

// Executamos a função main()
main()
