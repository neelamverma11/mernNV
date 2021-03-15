const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// 4. dotenv
dotenv.config({path:'./config.env'});



// 3. database connection
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection successfull...`);
}).catch((err)=> console.log(`not connection...`));

// 2.  middleware

const middleware = (req, res, next) => {
    console.log(`hello my middleware...`);
    next();
}

app.get('/', (req, res) => {
    res.send(`hello my world....`);
});
app.get('/about', middleware, (req, res) => {
    console.log(`hello my about`);
    res.send(`connection about succefull.......`);
});
app.get('/contact', (req, res) => {
    res.send(`connection contact succefull.......`);
});

app.listen(3000, () => {
    console.log(`server port no 3000`);
});