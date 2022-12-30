const express=require('express');
const axios=require("axios");
const cors=require("cors");




const app=express();
app.use(cors());
app.use(express.static("LIVEUPDATE"));

const headers={ 
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
}


app.listen(process.env.PORT || 5000,()=>{
    console.log("Port listened at 5000");
})

app.get("/leetcode",(req,res)=>{
       
    axios.get("https://leetcode.com/"+req.query.name,headers).then((result)=>{
           res.send(result.data);
       }).catch((err)=>{
           res.send(err.message);
       });
})

app.get("/codechef",(req,res)=>{

    axios.get("https://codechef.com/users/"+req.query.name,headers).then((result)=>{
        res.send(result.data);
    }).catch((err)=>{
        res.send(err.message);
    });

});



app.get("/codeforce",(req,res)=>{

    axios.get("https://codeforces.com/profile/"+req.query.name,headers).then((result)=>{
        res.send(result.data);
    })
})

app.get("/codeCount",(req,res)=>{
    res.sendFile(__dirname+"/client.js")
})

