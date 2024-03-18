const express  = require('express');
const app = express();//app is a backend application

app.get("/",(req,res)=>{
    res.send("Welcome to my Alex's backend application");
});//forward slash means the context root or the applications, or the url without

app.get("/alex",(req,res)=>{
    res.send("Hello Alex!");
});


app.listen(3000,()=>{
    console.log("Listening");
});