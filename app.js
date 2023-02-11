const express =require ('express');
const  mongoose = require ('mongoose');
const path = require('path');

const app =express(); 

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://ahmed:LG8njwIIgTOHbRqa@news.hl1cepz.mongodb.net/library?retryWrites=true&w=majority",
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

app.listen(process.env.PORT || 3000,() => console.log('server listen on port 3000'));

