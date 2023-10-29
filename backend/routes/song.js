const router = require("express").Router();
const passport = require("passport");
const song = require("../models/song");
const jwt = require("jsonwebtoken");
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
require("dotenv").config();


router.post(
  "/create",
  async (req, res) => {
    const { name, thumbnail, track,token } = req.body;
    console.log(token)
    if (!name || !thumbnail || !track) {
      return res.status(301).json({ error: "insufficient details" });
    }
    const user = await User.findOne({token:token});
    console.log(user)
    // const artist = `${user.firstName}+ ${user.lastName}`
    // console.log(artist);
    const songDetails = { name, thumbnail, track };
    const songCreated = await song.create(songDetails);
    return res.status(200).json(songCreated.toJSON());
  }
); 

router.get(
  "/get/mysongs",
  async (req, res) => {
    const songs = await song.find({ artist: req.user._id });
    return res.status(200).json({ data: songs });
  }
  );
  
  router.get("get/artist",async ( req, res)=>{
    const artistId = req.body;
    const songs = await song.find({_id:artistId});
    return res.status(200).json({songs:songs});
  });
  
  router.get('/get/songName',async ( req, res)=>{
    const songName = req.body;
    const songs = song.find({name:songName});
    return res.status(200).json({songs:songs});
  })
  
    
    module.exports = router;
