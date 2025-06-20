const mongoose=require('mongoose')

// Schema--blueprint of doc
const userdoc=new mongoose.Schema({
      name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{ timestamps: true })

// model--representation of specific collection in mongoDB
const UsersFeedbackData = new mongoose.model('UsersData',userdoc)
module.exports = UsersFeedbackData