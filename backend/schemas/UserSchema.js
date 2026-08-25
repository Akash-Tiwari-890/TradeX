const { Schema } = require("mongoose");



const passportLocalMongoosePkg = require("passport-local-mongoose");
const passportLocalMongoose = passportLocalMongoosePkg.default || passportLocalMongoosePkg;
const userSchema = new Schema({

    username:{
        type: String,
        requird:true
    },
    email : {
        type : String,
        required : true,
    },

    password: {
        type: String,
        required: true 
    }


});



module.exports = {userSchema};