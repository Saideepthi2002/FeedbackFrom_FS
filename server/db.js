const mongoose=require('mongoose')
require('dotenv').config()

const mongodbURL=process.env.MONGODBURL
// console.log(mongodbURL)

const connectDB=async()=>{
    try{
        await mongoose.connect(mongodbURL)
        console.log('MongoDB connected Sucessfully')
    }    
    catch(err){
        console.error('MongoDB connection failed:',err.message);
        process.exit(1)
    }
}

module.exports=connectDB
