// const User = require('../models/User');

// // GET all users
// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // CREATE a new user
// const createUser = async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         const user = new User({ name, email, password });
//         const savedUser = await user.save();
//         res.status(201).json(savedUser);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// module.exports = { getUsers, createUser };

// server/controllers/userControllers.js
const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getUsers };