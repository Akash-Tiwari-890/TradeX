const express = require("express");

const router = express.Router();
const userController  =   require("../controllers/user.js");


const {UserModel} = require('../model/UserModel');

router.post("/users/Login", userController.Login);


router.post("/users/Signup",userController.Signup );


module.exports =   router;