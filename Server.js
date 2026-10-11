require('dotenv').config();
const express=require('express');
const cors = require('cors');
const connectDb = require('./Db');
const UserRoutes= require('./routes/UserRoutes');

const app=express();
const PORT = process.env.PORT||5000;
app.use(cors());
app.use(express.json());
app.use('/api/users',UserRoutes);

connectDb().then(()=>{
    app.listen(PORT ,()=>
    console.log(`App is running in ${PORT}`)
)
}
);