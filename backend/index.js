const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/user");
const authRoute = require("./routes/auth");
const songRoute = require("./routes/song");
const cors = require("cors");

const url = `mongodb+srv://${process.env.mongodb_username}:${encodeURIComponent(
  process.env.mongodb_Password
)}@cluster0.bhdaymj.mongodb.net/?retryWrites=true&w=majority`;
const secretKey = process.env.secretOrKey;

app.use(express.json());
app.use(cors());
const port = 8080;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect"))
  .catch((e) => console.log(e));

app.use("/auth", authRoute);
app.use("/song", songRoute);

app.listen(port, () => console.log("listening"));
