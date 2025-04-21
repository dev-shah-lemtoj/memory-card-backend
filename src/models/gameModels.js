const mongoose = require('mongoose');

// Define Level schema
const levelSchema = new mongoose.Schema({
  name: String,
  cardCount: Number
});

const Level = mongoose.model('Level', levelSchema);

// Define GameHistory schema
const gameHistorySchema = new mongoose.Schema({
  userId: Number,
  levelId: mongoose.Schema.Types.ObjectId, // Refers to Level model
  score: Number,
  date: Date
});

const GameHistory = mongoose.model('GameHistory', gameHistorySchema);

module.exports = { Level, GameHistory };
