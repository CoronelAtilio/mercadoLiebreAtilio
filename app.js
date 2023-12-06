const express = require('express');
const app = express();
const path = require('path');
const port = 4000;
const carpetaPublic = path.resolve(__dirname, "./public");
app.use(express.static(carpetaPublic));

app.listen(port,()=>{
    console.log(`puerto ${port} funcionando`);
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"))    
})

app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))    
})

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))    
})
