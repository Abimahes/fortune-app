// const express = require('express');
// const bcrypt = require('bcryptjs');
// const fs = require('fs');

// const router = express.Router();
// const USERS_FILE = './users.json';

// // Read users from JSON
// function readUsers() {
//   const data = fs.readFileSync(USERS_FILE, 'utf-8');
//   return JSON.parse(data);
// }

// // Write users to JSON
// function writeUsers(users) {
//   fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
// }

// // SIGNUP API
// router.post('/signup', async (req, res) => {
//   console.log("req.body",req.body)

//   // Frontend la irundhu data vangrom
//   const { name, email, password } = req.body;

//   // Simple validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'All fields required' });
//   }

//   // Existing users read pannrom
//   const users = readUsers();

//   // Duplicate email check
//   const userExist = users.find(u => u.email === email);
//   if (userExist) {
//     return res.status(400).json({ message: 'Email already exists' });
//   }

//   // Password encrypt pannrom
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // New user add pannrom
//   users.push({
//     id: Date.now(),
//     name,
//     email,
//     password: hashedPassword
//   });

//   // JSON file update
//   writeUsers(users);

//   res.json({ message: 'Signup successful' });
// });

// module.exports = router;


const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {

  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  // Check email exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  // Save to MongoDB
  await newUser.save();

  res.json({ message: 'Signup successful' });
});

module.exports = router;

