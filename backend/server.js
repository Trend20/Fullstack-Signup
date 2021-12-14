import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import routesUrl from './routes/routes';
import cors from 'cors';
const app = express();

// activate dotenv
config();


// connect serve to the database
connect(process.env.DATABASE_ACCESS, () =>{
  console.log('Database connected');
});

const PORT = process.env.PORT || 4000;


app.use(json());
app.use(cors());
// use the rotes as middleware
app.use('/app', routesUrl);
app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`);
})