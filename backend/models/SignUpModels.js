// import { Schema } from 'mongoose';
import { Schema, model } from 'mongoose';
// const { Schema} = mongoose;

// define the schema
const SignUpTemplate = new Schema({
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

export default model('myTable', SignUpTemplate);