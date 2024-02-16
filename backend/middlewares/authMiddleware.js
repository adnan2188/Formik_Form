import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import asyncHandler from "express-async-handler";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(verifyToken.userId).select(-password);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("u have no authorization");
    }
  } else {
    res.status(401);
    throw new Error("No token Provided");
  }
});
