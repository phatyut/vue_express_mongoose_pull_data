const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(cors());
const cat =[
    {id:1,name:"test1", age :4 , gender:'male',gmail:"test1@gmail.com"},
    {id:2,name:"test2", age :4 , gender:'male',gmail:"test2@gmail.com"},
    {id:3,name:"test3", age :4 , gender:'male',gmail:"test3@gmail.com"},
    {id:4,name:"test4", age :4 , gender:'male',gmail:"test4@gmail.com"},
    {id:5,name:"test5", age :4 , gender:'male',gmail:"test5@gmail.com"},
    {id:6,name:"test6", age :4 , gender:'male',gmail:"test6@gmail.com"},
    {id:7,name:"test7", age :4 , gender:'male',gmail:"test7@gmail.com"},
    {id:8,name:"test8", age :4 , gender:'male',gmail:"test8@gmail.com"},
    {id:9,name:"test9", age :4 , gender:'male',gmail:"test9@gmail.com"},
    {id:10,name:"test10", age :4 , gender:'male',gmail:"test10@gmail.com"},
    {id:11,name:"test1", age :4 , gender:'male',gmail:"test11@gmail.com"},
   
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