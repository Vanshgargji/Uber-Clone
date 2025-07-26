const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const isblacklisted = await BlacklistTokenModel.findOne({ token: token });
  if (isblacklisted) {
    return res.status(401).json({ message: "Token is blacklisted." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Invalid token." });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
};
