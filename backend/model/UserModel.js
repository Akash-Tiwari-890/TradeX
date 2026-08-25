const mongoose = require("mongoose");

const{userSchema} = require("../schemas/UserSchema");


const UserModel = new mongoose.model("user" , userSchema);

module.exports = {UserModel};