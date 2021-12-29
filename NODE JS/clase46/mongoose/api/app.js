const express = require('express')
require('./db/mongoose')

const router = express.Router()
const cors = require('cors')
const port = 3001
const app = express()

app.use(express.json())
app.use(router)

app.use(cors())

const productRouter = require('./routers/products')
app.use(productRouter)

app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})

