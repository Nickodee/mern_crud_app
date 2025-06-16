const User = require('../models/User');

// Create User
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Get Single User
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) res.json({ message: 'Login successful', user });
  else res.status(401).json({ message: 'Invalid credentials' });
};



// Delete User
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

// Update User
const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
};

module.exports = {
  createUser,
  getUsers,
  loginUser,
  deleteUser,
  updateUser,
  getUserById,
};
