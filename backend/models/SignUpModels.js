// import { Schema } from 'mongoose';
const mongoose = require('mongoose');
// const { Schema} = mongoose;

// define the schema
const SignUpTemplate = new mongoose.Schema({
  fullName:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('myTable', SignUpTemplate);