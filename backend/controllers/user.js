require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_zerodha_key";
const isProduction = process.env.NODE_ENV === "production";
const {UserModel} = require('../model/UserModel');


const cookieOptions = {
  httpOnly: true,
  secure: isProduction,                   // Render pe true (HTTPS), Local pe false (HTTP)
  sameSite: isProduction ? "none" : "lax", // Render cross-site pe 'none', Local pe 'lax'
  maxAge: 24 * 60 * 60 * 1000,
};


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

     res.cookie("token", token, cookieOptions)

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token
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

     res.cookie("token", token, cookieOptions);
  
    res.status(201).json({ success: true, message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};