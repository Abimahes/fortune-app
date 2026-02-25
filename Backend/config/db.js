const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://ilakzilakzilakz:X2KhNgNipMEb2zoj@cluster0.f91qfqz.mongodb.net/?appName=Cluster0'
    );
    console.log('MongoDB Atlas connected');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
