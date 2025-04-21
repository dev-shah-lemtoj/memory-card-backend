const express = require('express');
const router = express.Router();
const { getLevels, getGameHistoryByUser, getAllGameHistory } = require('../controllers/gameController');

// Route to get all levels
router.get('/levels', getLevels);

// Route to get game history for a specific user
router.get('/game-history/:userId', getGameHistoryByUser);

// Route to get all game history
router.get('/game-history', getAllGameHistory);

module.exports = router;
