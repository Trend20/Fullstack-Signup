import mongoose from 'mongoose'

const SigninTemplate = new mongoose.Schema({
   email: {
     type: String,
     required: true
   },
   password:{
     type: String,
     required: true
   }
})

module.exports = mongoose.model('signInTable', SigninTemplate);