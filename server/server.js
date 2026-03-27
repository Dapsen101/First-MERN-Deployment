const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // 👈 ADD THIS
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// 👇 SERVE REACT BUILD
app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected ✅');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));