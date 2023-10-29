const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require('passport')

const {getToken} = require('../utils/helper')



router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, userName,mobile } = req.body;
    //check user already exists or not
    // //console.log(req.body)
    const user = await User.findOne({ email: email }).maxTimeMS(20000);
    // //console.log(user)

  if (user) {
    return res.status(403).json({ error: "already exists" });
  }
  //hashing
  const hashPassword = await bcrypt.hash(password, 10);

  //create a new user
  const newUserData = {
    email,
    password: hashPassword,
    firstName,
    lastName,
    userName,
    mobile,
  };
  const token = await getToken(email,newUser);
  const newUser = await User.create({...newUserData,token});
  //console.log(newUser)
  //creating token using jwt to return to the user
  const userToReturn = {...newUser.toJSON(),token};
  //console.log(`before deleting ${userToReturn}`)
  delete userToReturn.password;
  //console.log(`after deleting ${userToReturn}`)

  return res.status(200).json(userToReturn)


});

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    console.log(email+password)
    const user = await User.findOne({email:email});

    if(!user){
      // //console.log(user);
      return res.status(403).json({error:"invalid credentials"})
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    //console.log(isPasswordValid);
    if(!isPasswordValid){
      return res.status(403).json({error:"invalid credentials"})
    }
    const token = await getToken(email,user);
    const userToReturn = {...user.toJSON(),token};
    //console.log(`before deleting ${userToReturn.password}`)
    delete userToReturn.password;
    //console.log(`after deleting ${userToReturn.password}`)
    return res.status(200).json(userToReturn)
    
})

module.exports=router;
