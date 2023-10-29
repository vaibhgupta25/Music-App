const mongoose = require('mongoose')

const Songs = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    track:{
        type:String, 
        required:true 
    },
    artist:{
        type:String,
        // required:true
    }
})

const SongModel = new mongoose.model("Song",Songs)
module.exports = SongModel