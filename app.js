const express =require ('express');
const  mongoose = require ('mongoose');
const path = require('path');

const app =express(); 

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://Ahmed:01214548429@test.0zokfyo.mongodb.net/library?retryWrites=true&w=majority",
{useNewUrlParser:true , useUnifiedTopology: true}, (err) => {
    if (err){
     console.log(err)
     return
    }else{
        console.log('connecting to DB')
    }
});
app.use(express.static(path.join( __dirname  ,'images' )));

//user routes
const user_routes = require("./routers/userrouter");
app.use('/news',user_routes)

app.listen(process.env.PORT || 3000,() => console.log('server listen on port 3000'));

