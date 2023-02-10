const express =require ('express');
const  mongoose = require ('mongoose');
const path = require('path');

const app =express(); 

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://https://final-cup0.onrender.com/news",
{useNewUrlParser:true , useUnifiedTopology: true}, (err) => {
    if (err){
     console.log(err)
     return
    }else{
        console.log('connecting to DB')
    }
});

//user routes
const user_routes = require("./routers/userrouter");
app.use('/news',user_routes)

app.listen(process.env.PORT || 3000,() => console.log('server listen on part 3000'));

