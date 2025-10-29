import mongoose from "mongoose";

const skillSchema= new mongoose.Schema({
    name: {type: String , required: true},
    level: {type: String, required : true}
})


export default mongoose.models.Skill || mongoose.model("Skill", skillSchema)