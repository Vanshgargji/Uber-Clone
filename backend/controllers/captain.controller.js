const captainModel = require('../models/captain.model');
const captainservice = require('../services/captain.service');
const BlacklistTokenModel = require('../models/blacklistToken.model');
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname } = req.body.fullname;
  const { email, password } = req.body;
  const { color, plate, capacity, vehicleType } = req.body.vehicle;

  const isCaptainAlreadyExists = await captainModel.findOne({ email });
  if (isCaptainAlreadyExists) {
    return res.status(400).json({ error: 'Captain already exists' });
  }

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainservice.createCaptain({
    firstname,
    lastname,
    email,
    password: hashPassword,
    color,
    plate,
    capacity,
    vehicleType
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
}

module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select('+password');

  if (!captain) {
    return res.status(401).json({ message: 'Captain not found' });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = captain.generateAuthToken();

  res.cookie('token', token);
  res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await BlacklistTokenModel.create({ token });
  
  // Clear the cookie
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
}
