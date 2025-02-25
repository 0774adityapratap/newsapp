import User from "../models/User.js";
import bcrypt from "bcrypt";
export const login = async ( req,res) => {
  
};
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    return res.status(401).json({
      message: "User already exists",
    });
  }
  const hashPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
  });
  res.status(201).json({
    message: "User created successfully",
    data: newUser,
  });
};
