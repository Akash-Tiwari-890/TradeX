const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "super_secret_zerodha_key";

const {UserModel} = require('../model/UserModel');



module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found with this email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Password" });
    }

   
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

   res.cookie("token" , token,{
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "lax", 
      maxAge: 24 * 60 * 60 * 1000 
    });

    return res.status(200).json({
      success: true,
      message: "Login successful"
    });

  } catch (err) {
    return res.status(500).json({ message: "Server Error during login" });
  }
};




module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

  
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword
    });

    // 3. Generate JWT Token
    const token = jwt.sign(
      {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

  
    res.cookie("token", token, {
      httpOnly: true, 
      secure: false,   
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000 
    });

  
    res.status(201).json({ success: true, message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};