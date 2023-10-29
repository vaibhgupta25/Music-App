const mongoose = require("mongoose");

const PlayList = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref:"song"
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  collaborators:[
    {
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
  ]
});
const PlayListModel = new mongoose.model("PlayList",PlayList)
module.exports=PlayListModel
