const mongoose = require('mongoose');

// define the schema
const SignUpTemplate = new mongoose.Schema({
  fullName:{
    type: String,
    required: [true, "fullName required"]
  },
  username:{
    type: String,
    required: [true, "username required"]
  },
  email:{
    type: String,
    required: [true, "email required"]
  },
  password:{
    type: String,
    required: [true, "password required"]
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.Schema('myTable', SignUpTemplate);