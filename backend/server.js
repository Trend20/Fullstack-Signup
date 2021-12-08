const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrl = require('./routes/routes');
const cors = require('cors');

// activate dotenv
dotenv.config();


// connect serve to the database
mongoose.connect(process.env.DATABASE_ACCESS, () =>{
  console.log('Database connected');
});

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
// use the rotes as middleware
app.use('/app', routesUrl);
app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
})