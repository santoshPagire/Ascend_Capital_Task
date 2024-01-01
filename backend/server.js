const express = require('express');
const cors =require('cors');
const mysql=require("mysql");
const db=require('./database');
const app =express();

app.use(express.json());
app.use(cors());

app.get('/login',function(req,res){
    let sql="SELECT * FROM login";
    db.query(sql,function(err,result){
        if(err) throw err;
        res.send(result);
    });
});

app.post('/signup',(req,res)=>{
    const sql="INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    
    db.query(sql, [values],(err,data)=>{
        if(err) 
        {
            return res.json("Error");
        }
        
            return res.json(data);
       
    })

})
   
app.post("/login",(req,res)=>{
    const sql="SELECT * FROM login WHERE `email`=? AND `password`=?";
    
    db.query(sql, [req.body.email,req.body.password],(err,data)=>{
        if(err) 
        {
            return res.json("Error");
        }
        if(data.length >0){
            return res.json("Login Successfull");
        }else{
            return res.json("Login Failed");
        }
       
    })

})



app.listen(8081, function(){
    console.log("server started");
    db.connect(function(err){
        if(err) throw err;
        console.log("database connected");
    })
})