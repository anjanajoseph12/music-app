const express=require("express")
const musicmodel=require("../model/musicmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let music=new musicmodel(data)
    let result=await music.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await musicmodel.find()
    res.json(data)
    })
    module.exports=router