const mongoose = require('mongoose')

const User = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    mobile:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    likedSongs:{
        type:String,
        default:""
    },
    likedPlaylist:{
        type:String,
        default:""
    },
    subscribedArtist:{
        type:String,
        default:""
    }
})

const userModel = new mongoose.model("User",User);
module.exports = userModel;