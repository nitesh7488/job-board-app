require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (simplified for modern Mongoose)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/jobs', jobRoutes);

// Basic test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});