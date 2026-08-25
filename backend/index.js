require('dotenv').config();





const express = require("express");

const mongoose = require("mongoose");


const jwt = require("jsonwebtoken");


const bodyParser = require("body-parser");
const cors = require("cors")
const users = require("./routes/user.js")
const dashboard = require("./routes/dashboard.js")
const cookieParser = require("cookie-parser");
const PORT  = process.env.PORT || 8010;

const uri = process.env.MONGO_URL;
const session = require("express-session");





const app = express()




 app.use(cors(
  {
  origin: ["http://localhost:5173", "http://localhost:5174"], 
  credentials: true                
}
 ));


 app.use(bodyParser.json());
 app.use(cookieParser());
const JWT_SECRET = "super_secret_zerodha_key";





const verifyToken = (req, res, next) => {

  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "No token, authorization denied" });
  }


  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
    
    req.userId = decoded.id;
    req.user = decoded; 
    next();
  });
};



app.use("/" , users);


app.use("/" ,  verifyToken , dashboard);

// Backend Route
app.get("/verifyToken", verifyToken, (req, res) => {
  
  res.status(200).json({ success: true, userId: req.userId });
});




app.use("/" ,  verifyToken , dashboard);












 



app.listen(PORT , ()=>{
    console.log("App started");

    mongoose.connect(uri);
    console.log("db connected");
});