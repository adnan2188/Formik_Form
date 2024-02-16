import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";
import {User} from '../models/UserModel.js'

export const Register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = await User.create({
    username,
    email,
    password,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});
