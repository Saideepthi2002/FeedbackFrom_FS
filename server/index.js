const express=require('express')
const app=express()
const cors=require('cors')

app.use(cors())

const connectDB=require('./db')
require('dotenv').config()
app.use(express.json())


connectDB()
// calling the mongodb connection file
const userData=require('./router/userRouter')
app.use('/userData',userData)

const port=process.env.PORT||3000

app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`)
})

