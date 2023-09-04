const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const trackSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    }
},{timestamps:true})

const Track = mongoose.model('Track', trackSchema)
module.exports = Track;