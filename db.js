const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

// Set up mongodb connection
mongoose.connect(mongoURL, { // Use the variable mongoURL instead of the string 'mongoURL'
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listener keywords
db.on('connected', () => {
    console.log('Connected to Mongodb server');
});

db.on('disconnected', () => {
    console.log('Disconnected from Mongodb server');
});

db.on('error', (err) => {
    console.error('Error:', err);
});

// Export the database connection
module.exports = db;
