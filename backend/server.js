const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors());
const cat =[
    {id:1,name:"test", age :12 , gender:'male'},
    {id:2,name:"test", age :12 , gender:'male'},
    {id:3,name:"test", age :12 , gender:'male'},
    {id:4,name:"test", age :12 , gender:'male'},
    {id:5,name:"test", age :12 , gender:'male'},
    {id:6,name:"test", age :12 , gender:'male'},
    {id:7,name:"test", age :12 , gender:'male'},
    {id:8,name:"test", age :12 , gender:'male'},
    {id:9,name:"test", age :12 , gender:'male'},
    {id:10,name:"test", age :12 , gender:'male'},
    {id:11,name:"test", age :12 , gender:'male'},
   
]
const port = 9090;
app.get("/homepage",(req,res)=>{
    res.status(200).json({
        text:cat
    })
})

app.listen(port ,()=>{
    console.log("Server running on port " + port)
})