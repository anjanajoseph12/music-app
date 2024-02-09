const mongoose=require("mongoose")
const musicScheme=new mongoose.Schema(
    {
        name:String,
        movie:String,
        singer:String
    }
)

module.exports=mongoose.model("music",musicScheme)