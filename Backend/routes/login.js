const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// POST /api/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // 2️⃣ Compare password (bcrypt)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // 3️⃣ Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'SECRET_KEY',            // move to .env later
      { expiresIn: '1h' }
    );

    // 4️⃣ Send token to frontend
    // res.status(200).json({ token });
        // 4️⃣ Send token + user details
        res.status(200).json({
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
