const captainModel = require('../models/captain.model');
const captainservice = require('../services/captain.service');
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