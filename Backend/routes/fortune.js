const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/fortune', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch fortune' });
  }
});

module.exports = router;