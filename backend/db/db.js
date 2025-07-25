const mongoose = require('mongoose');

function connectToDb() {
  const dbUri = process.env.DB_CONNECT || 'mongodb://localhost:27017/uber_clone';
  
  mongoose.connect(dbUri)
    .then(() => {
      console.log('Connected to the database successfully');
    })
    .catch(err => {
      console.error('Database connection error:', err);
    });
}

module.exports = connectToDb;

