const express = require('express');
const router = express.Router();
const User = require('../model/User');

// Insert new user
router.post('/', async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.json(user);
});

// Update user by ID
router.put('/:id', async (req, res) => {
    const { name, email } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { name, email },
        { new: true }
    );
    res.json(updatedUser);
});

module.exports = router;
