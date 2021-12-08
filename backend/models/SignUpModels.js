const mongoose = require('mongoose');

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

module.exports = mongoose.Schema('myTable', SignUpTemplate);