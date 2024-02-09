const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const musicrouter=require("./controller/musicrouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://anjanajosephpassion:geditanjana.py@cluster0.a5ryr4o.mongodb.net/musicDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/music",musicrouter)
app.listen(3001,()=>{
    console.log("server running");
})