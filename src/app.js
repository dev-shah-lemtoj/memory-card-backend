const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

// MongoDB URI (Replace with your actual MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/memoryCardGame'; // Example URI for local development

// Connect to MongoDB
mongoose.connect(mongoURI, {
 
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.json());

// Use authentication routes
app.use('/api/auth', authRoutes);

// Use game routes (protected)
app.use('/api', gameRoutes); // Prefix API routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
