require("dotenv").config();
const express = require("express");
const bcrypt=require("bcrypt");
const session = require("express-session");
const cookieParser=require("cookie-parser");
const passport=require("passport");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "/views/admin"));

app.use(cookieParser());
app.use(
  session({
    key:"user_id",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//--------Database--------//
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://localhost:27017/BizChat",
  { useNewUrlParser: true, family: 4 },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("BizChat connected to Database");
    }
  }
);


const adminRouter = require("./router/admin/routes");
app.use("/admin", adminRouter);


app.listen(3000, () => {
  console.log("listening at port 3000");
});
