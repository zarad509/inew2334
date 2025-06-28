const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to render all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', { users });
});

// Route to handle new user sign-up
router.post('/signup', async (req, res) => {
  const { name, email } = req.body;
  await User.create({ name, email });
  res.redirect('/');
});

// Route to edit a specific user
router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('edit', { user });
});

// Route to update the user info
router.post('/edit/:id', async (req, res) => {
  const { name, email } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, email });
  res.redirect('/');
});

// Route to delete a user
router.post('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
