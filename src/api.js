const express = require('express');
const User = require('./models/User');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ mesage: 'Base App API Root'});
})

router.get('/users', async (req, res) => {
    try {

    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ message: 'Internal server error'});
    }
})

// Get user by email
router.get('/user', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.query.email });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user)
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).json({ message: 'Internal server error'});
    }
});

// Update user
router.put('/user', async (req, res) => {
    try {
      const { email, updates } = req.body;
      const user = await User.findOneAndUpdate({ email }, updates, { new: true });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;